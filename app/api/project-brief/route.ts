import { NextResponse } from "next/server";
import { projectBriefFormSchema } from "@/lib/validations/inquiries";
import { dispatchInquiryNotification } from "@/lib/email";
import { getClientIp, isRateLimited, isHoneypotTriggered } from "@/lib/anti-spam";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    // Rate limiting
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many submission attempts. Please wait a minute before retrying, or call our estimating desk at +251 91 151 7784.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Silent spam-trap defense
    if (isHoneypotTriggered(body)) {
      return NextResponse.json({
        success: true,
        trackingCode: `YB-RFP-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
        message: "Project brief received.",
      });
    }

    const parsed = projectBriefFormSchema.safeParse(body);
    if (!parsed.success) {
      const errors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0]?.toString() || "form";
        errors[field] = issue.message;
      });
      return NextResponse.json(
        { success: false, errors, message: "Validation error on project brief submission." },
        { status: 400 }
      );
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const trackingCode = `YB-RFP-${new Date().getFullYear()}-${randomNum}`;
    const userAgent = request.headers.get("user-agent") || undefined;
    const nowIso = new Date().toISOString();
    const formattedDate = new Date().toLocaleString("en-US", {
      timeZone: "Africa/Addis_Ababa",
      dateStyle: "medium",
      timeStyle: "short",
    });

    // Dispatch internal notification and client confirmation
    await dispatchInquiryNotification({
      ref: trackingCode,
      source: "project_brief",
      title: "Project Brief & Tender Consultation Intake",
      fullName: parsed.data.fullName,
      organization: parsed.data.organization,
      email: parsed.data.email,
      phone: parsed.data.phone || undefined,
      projectType: parsed.data.projectType,
      disciplines: parsed.data.disciplines,
      scale: parsed.data.scale,
      timeline: parsed.data.timeline,
      message: parsed.data.description || undefined,
      receivedAt: `${formattedDate} (EAT)`,
      clientIp: ip,
      userAgent,
    });

    return NextResponse.json({
      success: true,
      trackingCode,
      message: "Project brief successfully logged into the Yebis GC-3 estimating queue.",
      summary: {
        projectType: parsed.data.projectType,
        disciplinesCount: parsed.data.disciplines.length,
        scale: parsed.data.scale,
        organization: parsed.data.organization,
      },
      receivedAt: nowIso,
    });
  } catch (error) {
    console.error("API /api/project-brief error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected server error occurred while lodging your project brief." },
      { status: 500 }
    );
  }
}
