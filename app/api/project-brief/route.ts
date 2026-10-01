import { NextResponse } from "next/server";
import { projectBriefFormSchema } from "@/lib/validations/inquiries";

export async function POST(request: Request) {
  try {
    const body = await request.json();

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
      receivedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("API /api/project-brief error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected server error occurred while lodging your project brief." },
      { status: 500 }
    );
  }
}
