import { NextResponse } from "next/server";
import { contactFormSchema, quickInquirySchema } from "@/lib/validations/inquiries";
import { z } from "zod";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Check if this is a quick homepage inquiry or full contact form
    if (body.type === "quick_inquiry") {
      const parsed = quickInquirySchema.safeParse(body);
      if (!parsed.success) {
        const errors: Record<string, string> = {};
        parsed.error.issues.forEach((issue) => {
          const field = issue.path[0]?.toString() || "form";
          errors[field] = issue.message;
        });
        return NextResponse.json(
          { success: false, errors, message: "Validation error" },
          { status: 400 }
        );
      }

      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const ref = `YB-ETH-${randomNum}`;

      return NextResponse.json({
        success: true,
        ref,
        message: "Your project parameters have been received by our Commercial Estimating desk.",
        data: parsed.data,
        receivedAt: new Date().toISOString(),
      });
    }

    // Default: full contact form
    const parsed = contactFormSchema.safeParse(body);
    if (!parsed.success) {
      const errors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0]?.toString() || "form";
        errors[field] = issue.message;
      });
      return NextResponse.json(
        { success: false, errors, message: "Validation error" },
        { status: 400 }
      );
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const ref = `YB-CONT-${new Date().getFullYear()}-${randomNum}`;

    return NextResponse.json({
      success: true,
      ref,
      message: "Transmission received. Your inquiry has been routed to the designated engineering director.",
      data: parsed.data,
      receivedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("API /api/contact error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected server error occurred while transmitting your request." },
      { status: 500 }
    );
  }
}
