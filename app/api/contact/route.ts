import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.SEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "derek.campbell6940@gmail.com",
    subject: subject,
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    /* Force dark mode colors — prevents Gmail mobile from inverting to black text */
    body, table, td, div, p, span, a { color-scheme: dark !important; }
    .email-body { background-color: #0d0d18 !important; }
    .email-card { background-color: #13132a !important; }
    .email-header { background-color: #0d0d18 !important; }
    .email-field { background-color: #0a0a14 !important; }
    .text-white { color: #f0f4ff !important; }
    .text-cyan { color: #00f5ff !important; }
    .text-purple { color: #bf5af2 !important; }
    .text-light { color: #c8d6f0 !important; }
    .text-muted { color: #8896b3 !important; }
    a { color: #00f5ff !important; }
  </style>
</head>
<body class="email-body" style="margin:0;padding:0;background:#0d0d18;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" class="email-body" style="background:#0d0d18;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" class="email-card" style="background:#13132a;border-radius:16px;border:1px solid #252550;overflow:hidden;max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td class="email-header" style="background:#0d0d18;padding:36px 40px;text-align:center;border-bottom:1px solid #252550;">
            <div style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#00f5ff;margin-right:10px;vertical-align:middle;"></div>
            <span class="text-white" style="font-size:22px;font-weight:700;color:#f0f4ff;letter-spacing:-0.5px;vertical-align:middle;">Derek<span class="text-cyan" style="color:#00f5ff;">.</span></span>
            <p class="text-white" style="margin:12px 0 0;font-family:monospace;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:#ffffff;">New Portfolio Message</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td class="email-card" style="padding:36px 40px;background:#13132a;">

            <!-- Subject badge -->
            <div style="margin-bottom:28px;text-align:center;">
              <span class="text-cyan" style="display:inline-block;background:#0d2a2a;border:1px solid #00f5ff;border-radius:999px;padding:8px 20px;font-family:monospace;font-size:13px;font-weight:700;color:#00f5ff;letter-spacing:1px;">
                ${subject}
              </span>
            </div>

            <!-- Fields -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding-bottom:16px;">
                  <div class="email-field" style="background:#0a0a14;border:1px solid #252550;border-radius:10px;padding:16px 20px;">
                    <p class="text-purple" style="margin:0 0 4px;font-family:monospace;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#bf5af2;">From</p>
                    <p class="text-white" style="margin:0;font-size:15px;font-weight:600;color:#f0f4ff;">${name}</p>
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding-bottom:16px;">
                  <div class="email-field" style="background:#0a0a14;border:1px solid #252550;border-radius:10px;padding:16px 20px;">
                    <p class="text-purple" style="margin:0 0 4px;font-family:monospace;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#bf5af2;">Reply To</p>
                    <a href="mailto:${email}" class="text-cyan" style="margin:0;font-size:15px;font-weight:600;color:#00f5ff;text-decoration:none;">${email}</a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="email-field" style="background:#0a0a14;border:1px solid #252550;border-radius:10px;padding:16px 20px;">
                    <p class="text-purple" style="margin:0 0 10px;font-family:monospace;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#bf5af2;">Message</p>
                    <p class="text-light" style="margin:0;font-size:15px;line-height:1.7;color:#c8d6f0;">${message.replace(/\n/g, "<br/>")}</p>
                  </div>
                </td>
              </tr>
            </table>

            <!-- Reply button -->
            <div style="margin-top:32px;text-align:center;">
              <a href="mailto:${email}?subject=Re: ${subject}" class="text-cyan" style="display:inline-block;background:#0d2a2a;border:1px solid #00f5ff;border-radius:999px;padding:12px 32px;font-family:monospace;font-size:13px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#00f5ff;text-decoration:none;">
                Reply to ${name}
              </a>
            </div>

          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td class="email-card" style="padding:20px 40px;border-top:1px solid #252550;text-align:center;background:#13132a;">
            <p class="text-muted" style="margin:0;font-family:monospace;font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#8896b3;">Sent via derek.campbell6940@gmail.com portfolio</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
