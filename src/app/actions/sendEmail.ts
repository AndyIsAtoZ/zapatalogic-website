"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const honeypot = formData.get("company");

  if (honeypot) return { ok: true };

  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const result = await resend.emails.send({
    from: "ZapataLogic <andy@zapatalogic.com>",
    to: ["andy@zapatalogic.com"],
    replyTo: email || undefined,
    subject: `New Website Inquiry${name ? ` from ${name}` : ""}`,
    html: `
      <p><b>Name:</b> ${name || "(missing)"}</p>
      <p><b>Email:</b> ${email || "(missing)"}</p>
      <p><b>Message:</b></p>
      <p>${message || "(missing)"}</p>
    `,
  });

  if (result.error) {
    console.error("Resend sendEmail error:", result.error);
    throw new Error(result.error.message || "Failed to send email");
  }

  console.log("Resend sendEmail success:", result.data?.id || result);
  return { ok: true, id: result.data?.id ?? null };
}
