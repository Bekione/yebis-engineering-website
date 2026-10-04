import { NextResponse } from "next/server";
import { contactFormSchema, quickInquirySchema } from "@/lib/validations/inquiries";
import { dispatchInquiryNotification } from "@/lib/email";
import { getClientIp, isRateLimited, isHoneypotTriggered } from "@/lib/anti-spam";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    // Rate limiting to protect against abuse
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many submission attempts. Please wait a minute before retrying, or contact our direct hotline at +251 91 151 7784.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Silent spam-trap defense
    if (isHoneypotTriggered(body)) {
      return NextResponse.json({
        success: true,
        ref: `YB-SPAM-${Math.floor(1000 + Math.random() * 9000)}`,
        message: "Your parameters have been logged.",
      });
    }

    const userAgent = request.headers.get("user-agent") || undefined;
    const nowIso = new Date().toISOString();
    const formattedDate = new Date().toLocaleString("en-US", {
      timeZone: "Africa/Addis_Ababa",
      dateStyle: "medium",
      timeStyle: "short",
    });

    // Case 1: Homepage Quick Inquiry
    if (body.type === "quick_inquiry") {
      const parsed = quickInquirySchema.safeParse(body);
      if (!parsed.success) {
        const errors: Record<string, string> = {};
        parsed.error.issues.forEach((issue) => {
          const field = issue.path[0]?.toString() || "form";
          errors[field] = issue.message;
        });
        return NextResponse.json(
          { success: false, errors, message: "Validation error on quick inquiry submission." },
          { status: 400 }
        );
      }

      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const ref = `YB-ETH-${randomNum}`;

      // Dispatch internal notification and client confirmation
      await dispatchInquiryNotification({
        ref,
        source: "homepage_quick",
        title: "Homepage Quick Technical Inquiry",
        fullName: parsed.data.principalName,
        email: parsed.data.email || undefined,
        phone: parsed.data.phone,
        sector: parsed.data.sector,
        location: parsed.data.location,
        message: parsed.data.description,
        receivedAt: `${formattedDate} (EAT)`,
        clientIp: ip,
        userAgent,
      });

      return NextResponse.json({
        success: true,
        ref,
        message: "Your project parameters have been received by our Commercial Estimating desk.",
        data: parsed.data,
        receivedAt: nowIso,
      });
    }

    // Case 2: Full Departmental Contact Form
    const parsed = contactFormSchema.safeParse(body);
    if (!parsed.success) {
      const errors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0]?.toString() || "form";
        errors[field] = issue.message;
      });
      return NextResponse.json(
        { success: false, errors, message: "Validation error on departmental transmission." },
        { status: 400 }
      );
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const ref = `YB-CONT-${new Date().getFullYear()}-${randomNum}`;

    // Dispatch internal notification and client confirmation
    await dispatchInquiryNotification({
      ref,
      source: "contact_page",
      title: `Official Inquiry: ${parsed.data.category.toUpperCase()} DESK`,
      category: parsed.data.category,
      fullName: parsed.data.fullName,
      organization: parsed.data.organization,
      email: parsed.data.email,
      phone: parsed.data.phone || undefined,
      message: parsed.data.message,
      receivedAt: `${formattedDate} (EAT)`,
      clientIp: ip,
      userAgent,
    });

    return NextResponse.json({
      success: true,
      ref,
      message: "Transmission received. Your inquiry has been routed to the designated engineering director.",
      data: parsed.data,
      receivedAt: nowIso,
    });
  } catch (error) {
    console.error("API /api/contact error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected server error occurred while transmitting your request." },
      { status: 500 }
    );
  }
}
