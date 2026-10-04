import { Resend } from "resend";
import nodemailer from "nodemailer";
import fs from "fs/promises";
import path from "path";

export interface SubmissionPayload {
  ref: string;
  source: "homepage_quick" | "contact_page" | "project_brief";
  title: string;
  fullName: string;
  organization?: string;
  email?: string;
  phone?: string;
  category?: string;
  sector?: string;
  location?: string;
  projectType?: string;
  disciplines?: string[];
  scale?: string;
  timeline?: string;
  message?: string;
  receivedAt: string;
  clientIp?: string;
  userAgent?: string;
}

/**
 * Dynamic config getters (evaluated at runtime so updated env vars take effect immediately)
 */
function getNotificationRecipient(): string {
  return (
    process.env.CONTACT_NOTIFICATION_EMAIL ||
    process.env.NEXT_PUBLIC_COMPANY_EMAIL ||
    "kinber024@gmail.com"
  );
}

function getSenderEmail(): string {
  return (
    process.env.RESEND_FROM_EMAIL ||
    process.env.EMAIL_FROM ||
    "Yebis Engineering <notifications@yebisengineering.pro.et>"
  );
}

function getCompanyReplyEmail(): string {
  return (
    process.env.COMPANY_REPLY_EMAIL ||
    process.env.CONTACT_NOTIFICATION_EMAIL ||
    "kinber024@gmail.com"
  );
}

/**
 * Generate responsive executive HTML email for internal engineering & estimating desk
 */
function generateInternalNotificationHtml(data: SubmissionPayload): string {
  const details: Array<{ label: string; value: string | undefined }> = [
    { label: "Dossier / Tracking Ref", value: data.ref },
    { label: "Submission Channel", value: data.title },
    { label: "Client / Principal Name", value: data.fullName },
    { label: "Organization / Firm", value: data.organization || "N/A" },
    { label: "Email Address", value: data.email || "Not Provided (Phone Primary)" },
    { label: "Contact Phone", value: data.phone || "N/A" },
    { label: "Inquiry Category", value: data.category?.toUpperCase() },
    { label: "Project Classification", value: data.projectType?.replace(/_/g, " ").toUpperCase() },
    { label: "Sectors / Disciplines", value: data.disciplines?.join(", ") || data.sector },
    { label: "Gross Scale (sqm)", value: data.scale?.toUpperCase() },
    { label: "Target Timeline", value: data.timeline },
    { label: "Site Location", value: data.location },
    { label: "Timestamp (EAT)", value: data.receivedAt },
    { label: "Client IP / Network", value: data.clientIp || "N/A" },
  ].filter((item) => item.value !== undefined && item.value !== "");

  const rows = details
    .map(
      (item) => `
      <tr>
        <td style="padding: 10px 14px; font-weight: 600; color: #475569; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e2e8f0; width: 35%; background: #f8fafc;">
          ${item.label}
        </td>
        <td style="padding: 10px 14px; color: #0f172a; font-size: 14px; border-bottom: 1px solid #e2e8f0; font-family: monospace;">
          ${item.value}
        </td>
      </tr>`
    )
    .join("");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Submission - Yebis Engineering</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #0b1120; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 4px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.25);">
    <!-- Header -->
    <tr>
      <td style="background-color: #0f172a; padding: 24px 30px; border-bottom: 3px solid #c48016;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td>
              <span style="font-size: 11px; letter-spacing: 2px; color: #c48016; text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 4px;">
                YEBIS ENGINEERING GC-3 // INTAKE SYSTEM
              </span>
              <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700; letter-spacing: -0.5px; text-transform: uppercase;">
                ${data.title}
              </h1>
            </td>
            <td align="right" style="vertical-align: middle;">
              <span style="display: inline-block; background: #c48016; color: #ffffff; padding: 6px 12px; font-size: 12px; font-weight: 700; font-family: monospace; letter-spacing: 1px; border-radius: 2px;">
                ${data.ref}
              </span>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Alert Banner -->
    <tr>
      <td style="background: #f1f5f9; padding: 12px 30px; border-bottom: 1px solid #e2e8f0; font-size: 13px; color: #334155;">
        <strong>Action Required:</strong> A potential client submitted parameters via the website. Review scope and follow up within the standard 24–48h SLA.
      </td>
    </tr>

    <!-- Body Spec Table -->
    <tr>
      <td style="padding: 24px 30px;">
        <h3 style="margin: 0 0 14px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; color: #0f172a;">
          Submission Specifications
        </h3>
        <table width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #e2e8f0; border-collapse: collapse;">
          ${rows}
        </table>

        <!-- Message / Scope block -->
        ${
          data.message
            ? `
        <div style="margin-top: 24px;">
          <h3 style="margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #0f172a;">
            Scope Summary / Project Narrative
          </h3>
          <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-left: 4px solid #c48016; padding: 16px; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">
${data.message}
          </div>
        </div>`
            : ""
        }

        <!-- Quick reply action -->
        ${
          data.email
            ? `
        <div style="margin-top: 28px; text-align: center;">
          <a href="mailto:${data.email}?subject=RE: Yebis Engineering Inquiry [${data.ref}]" style="display: inline-block; background: #0f172a; color: #ffffff; text-decoration: none; padding: 12px 24px; font-size: 13px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; border-radius: 2px;">
            Reply to ${data.fullName} (${data.email})
          </a>
        </div>`
            : ""
        }
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background: #f8fafc; padding: 18px 30px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; line-height: 1.5;">
        Yebis Engineering Grade 3 General Contractor &bull; Addis Ababa, Ethiopia<br>
        Direct Hotlines: +251 91 151 7784 / +251 91 123 6075 &bull; yebisengineering.pro.et
      </td>
    </tr>
  </table>
</body>
</html>
`;
}

/**
 * Generate branded client confirmation receipt email
 */
function generateClientConfirmationHtml(data: SubmissionPayload): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Receipt Confirmation - Yebis Engineering</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #0b1120; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 4px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.25);">
    <!-- Header -->
    <tr>
      <td style="background-color: #0f172a; padding: 28px 30px; border-bottom: 3px solid #c48016;">
        <span style="font-size: 11px; letter-spacing: 2px; color: #c48016; text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 6px;">
          YEBIS ENGINEERING // GRADE 3 GENERAL CONTRACTOR
        </span>
        <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">
          Transmission Acknowledged
        </h1>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="padding: 30px;">
        <p style="font-size: 15px; color: #1e293b; margin: 0 0 16px 0; line-height: 1.6;">
          Dear <strong>${data.fullName}</strong>,
        </p>
        <p style="font-size: 14px; color: #475569; margin: 0 0 20px 0; line-height: 1.6;">
          Thank you for reaching out to <strong>Yebis Engineering</strong>. Your project parameters and transmission have been securely logged into our central engineering estimating and contracts registry.
        </p>

        <!-- Tracking Card -->
        <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 4px; padding: 20px; margin-bottom: 24px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <span style="font-size: 11px; font-weight: 700; letter-spacing: 1px; color: #64748b; text-transform: uppercase; display: block;">
                  OFFICIAL TRACKING / DOSSIER CODE
                </span>
                <span style="font-size: 20px; font-family: monospace; font-weight: 700; color: #0f172a; letter-spacing: 1px;">
                  ${data.ref}
                </span>
              </td>
              <td align="right">
                <span style="display: inline-block; background: #e0f2fe; color: #0369a1; border: 1px solid #bae6fd; font-size: 11px; font-weight: 700; text-transform: uppercase; padding: 4px 8px; border-radius: 2px;">
                  STATUS: IN QUEUE
                </span>
              </td>
            </tr>
          </table>

          <div style="margin-top: 16px; pt: 12px; border-top: 1px solid #e2e8f0; font-size: 13px; color: #475569; line-height: 1.6;">
            ${data.projectType ? `<div><strong>Scope:</strong> ${data.projectType.replace(/_/g, " ").toUpperCase()}</div>` : ""}
            ${data.disciplines && data.disciplines.length > 0 ? `<div><strong>Disciplines:</strong> ${data.disciplines.join(", ")}</div>` : ""}
            ${data.scale ? `<div><strong>Gross Scale:</strong> ${data.scale.toUpperCase()}</div>` : ""}
            ${data.location ? `<div><strong>Location:</strong> ${data.location}</div>` : ""}
          </div>
        </div>

        <h3 style="margin: 0 0 8px 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; color: #0f172a;">
          What Happens Next?
        </h3>
        <ul style="margin: 0 0 24px 0; padding-left: 20px; color: #475569; font-size: 14px; line-height: 1.7;">
          <li>Our Senior Engineering Bureau and Commercial Estimators are reviewing your submitted parameters.</li>
          <li>For formal tender briefs and bill of quantities (BOQ) inquiries, our technical lead will contact you within <strong>24 to 48 operational hours</strong>.</li>
          <li>If urgent site mobilization or emergency tender consultation is required, please reach our direct hotline below.</li>
        </ul>

        <div style="background: #0f172a; color: #ffffff; padding: 18px; border-radius: 4px; text-align: center;">
          <span style="font-size: 11px; letter-spacing: 1px; color: #c48016; text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 4px;">
            DIRECT ENGINEERING HOTLINE
          </span>
          <span style="font-size: 17px; font-weight: 700; letter-spacing: 0.5px;">
            +251 91 151 7784 / +251 91 387 9093
          </span>
          <span style="font-size: 12px; color: #94a3b8; display: block; margin-top: 4px;">
            Mon–Sat 08:00 – 18:00 EAT &bull; Bole Sub-City, Addis Ababa
          </span>
        </div>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background: #f8fafc; padding: 20px 30px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; line-height: 1.5;">
        <strong>Yebis Engineering</strong> &bull; Grade 3 General Contractor (GC-3)<br>
        Trade Reg: BL/AA/1/0001088/2004 &bull; TIN: 0001985917<br>
        Cameroon St., Yebis Tower, Addis Ababa, Ethiopia &bull; <a href="https://yebisengineering.pro.et" style="color: #c48016; text-decoration: none;">yebisengineering.pro.et</a>
      </td>
    </tr>
  </table>
</body>
</html>
`;
}

/**
 * Escape HTML special characters for Telegram parse_mode=HTML
 */
function escHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Dispatch instant alert to Telegram Bot if configured
 */
async function sendTelegramNotification(data: SubmissionPayload): Promise<void> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!botToken || !chatId) return;

  try {
    const lines = [
      `🏗 <b>NEW INQUIRY — YEBIS ENGINEERING</b>`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `<b>Ref:</b> <code>${escHtml(data.ref)}</code>`,
      `<b>Channel:</b> ${escHtml(data.title)}`,
      `<b>Client:</b> <b>${escHtml(data.fullName)}</b>`,
      data.organization ? `<b>Org:</b> ${escHtml(data.organization)}` : null,
      data.phone ? (() => {
        const raw = data.phone!.replace(/\s+/g, "");
        const intl = raw.startsWith("0") ? `+251${raw.slice(1)}` : raw.startsWith("+") ? raw : `+251${raw}`;
        return `<b>Phone:</b> <a href="tel:${intl}">${escHtml(data.phone!)}</a>`;
      })() : null,
      data.email ? `<b>Email:</b> ${escHtml(data.email)}` : null,
      data.projectType ? `<b>Type:</b> ${escHtml(data.projectType.replace(/_/g, " ").toUpperCase())}` : null,
      data.disciplines && data.disciplines.length > 0 ? `<b>Disciplines:</b> ${escHtml(data.disciplines.join(", "))}` : null,
      data.scale ? `<b>Scale:</b> ${escHtml(data.scale.toUpperCase())}` : null,
      data.location ? `<b>Location:</b> ${escHtml(data.location)}` : null,
      data.timeline ? `<b>Timeline:</b> ${escHtml(data.timeline)}` : null,
      data.message ? `\n<b>Scope / Message:</b>\n<blockquote>${escHtml(data.message)}</blockquote>` : null,
      `━━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `🕒 <i>${escHtml(data.receivedAt)}</i>`,
    ]
      .filter(Boolean)
      .join("\n");

    const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: lines,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.warn("Telegram notification warning:", err);
    }
  } catch (err) {
    console.error("Telegram notification error:", err);
  }
}

/**
 * Dispatch webhook notification if configured (Slack, Discord, or Zapier)
 */
async function sendWebhookNotification(data: SubmissionPayload): Promise<void> {
  const webhookUrl = process.env.NOTIFICATION_WEBHOOK_URL;
  if (!webhookUrl) return;

  try {
    const textSummary = `*🔔 New Yebis Engineering Inquiry [${data.ref}]*\n*Channel:* ${data.title}\n*Client:* ${data.fullName} (${data.organization || "N/A"})\n*Email:* ${data.email || "N/A"} | *Phone:* ${data.phone || "N/A"}\n*Scope:* ${data.message || data.projectType || data.sector || "N/A"}`;

    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: textSummary, // Discord format
        text: textSummary, // Slack format
        payload: data,
      }),
    });
  } catch (err) {
    console.error("Webhook dispatch warning:", err);
  }
}

/**
 * Safe local fallback logger to guarantee zero loss of inquiries in dev or if credentials are pending
 */
async function recordLocalFallback(data: SubmissionPayload): Promise<void> {
  try {
    const backupDir = path.join(process.cwd(), ".data");
    await fs.mkdir(backupDir, { recursive: true });
    const filePath = path.join(backupDir, "inquiries_backup.jsonl");
    const line = JSON.stringify(data) + "\n";
    await fs.appendFile(filePath, line, "utf8");
  } catch {
    // Non-fatal if filesystem is restricted (e.g. read-only serverless disk)
  }
}

/**
 * Primary dispatch function: Sends internal alert and client confirmation
 */
export async function dispatchInquiryNotification(
  data: SubmissionPayload
): Promise<{ emailSent: boolean; provider: string; clientNotified: boolean }> {
  let emailSent = false;
  let clientNotified = false;
  let provider = "none";

  // Always back up locally first
  await recordLocalFallback(data);

  // Trigger Telegram push alert and Webhook in background
  void sendTelegramNotification(data);
  void sendWebhookNotification(data);

  const resendApiKey = process.env.RESEND_API_KEY;
  const smtpHost = process.env.SMTP_HOST;

  const recipient = getNotificationRecipient();
  const sender = getSenderEmail();
  const replyTo = getCompanyReplyEmail();

  // 1. Resend (Verified Domain or API Key)
  if (resendApiKey) {
    try {
      const resend = new Resend(resendApiKey);

      // Send to business inbox (kinber024@gmail.com)
      const internalResult = await resend.emails.send({
        from: sender,
        to: recipient,
        replyTo: data.email || undefined,
        subject: `[Yebis Intake] ${data.title}: ${data.fullName} (${data.ref})`,
        html: generateInternalNotificationHtml(data),
      });

      if (!internalResult.error) {
        emailSent = true;
        provider = "resend";
        console.log(`[Resend] Successfully delivered internal notification for ${data.ref} to ${recipient}`);
      } else {
        console.error("[Resend] Internal notification delivery error:", internalResult.error);
      }

      // Send confirmation receipt to client if email was provided
      if (data.email) {
        const clientResult = await resend.emails.send({
          from: sender,
          to: data.email,
          replyTo: replyTo,
          subject: `Inquiry Confirmation [Ref: ${data.ref}] - Yebis Engineering GC-3`,
          html: generateClientConfirmationHtml(data),
        });

        if (!clientResult.error) {
          clientNotified = true;
          console.log(`[Resend] Successfully delivered client confirmation for ${data.ref} to ${data.email}`);
        } else {
          console.warn("[Resend] Client confirmation delivery warning:", clientResult.error);
        }
      }

      return { emailSent, provider, clientNotified };
    } catch (err) {
      console.error("[Resend] Exception occurred during email send:", err);
    }
  }

  // 2. Nodemailer SMTP (Standard fallback)
  if (smtpHost) {
    try {
      const port = Number(process.env.SMTP_PORT) || 587;
      const secure = process.env.SMTP_SECURE === "true" || port === 465;
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port,
        secure,
        auth: {
          user: process.env.SMTP_USER || "",
          pass: process.env.SMTP_PASSWORD || process.env.SMTP_PASS || "",
        },
      });

      // Internal notification
      await transporter.sendMail({
        from: process.env.SMTP_FROM || sender,
        to: recipient,
        replyTo: data.email || undefined,
        subject: `[Yebis Intake] ${data.title}: ${data.fullName} (${data.ref})`,
        html: generateInternalNotificationHtml(data),
      });

      emailSent = true;
      provider = "smtp";

      // Client confirmation
      if (data.email) {
        await transporter.sendMail({
          from: process.env.SMTP_FROM || sender,
          to: data.email,
          replyTo: replyTo,
          subject: `Inquiry Confirmation [Ref: ${data.ref}] - Yebis Engineering GC-3`,
          html: generateClientConfirmationHtml(data),
        });
        clientNotified = true;
      }

      return { emailSent, provider, clientNotified };
    } catch (err) {
      console.error("[SMTP] Delivery failed:", err);
    }
  }

  // 3. Fallback: Log prominent info to server console
  console.info(
    `\n=== [YEBIS INQUIRY RECEIVED] ===\nRef: ${data.ref}\nSource: ${data.title}\nClient: ${data.fullName}\nEmail: ${data.email || "N/A"}\nPhone: ${data.phone || "N/A"}\nOrg: ${data.organization || "N/A"}\nScope: ${data.message || data.projectType || data.sector || "N/A"}\n=================================\n`
  );

  return { emailSent, provider, clientNotified };
}
