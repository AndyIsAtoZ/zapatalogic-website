"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const honeypot = formData.get("company");

  // spam protection
  if (honeypot) return { ok: true };

  await resend.emails.send({
    from: "Zapatalogic <onboarding@resend.dev>",
    to: ["info@zapatalogic.com"],
    subject: "New Website Inquiry",
    html: `
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p>${message}</p>
    `,
  });

  return { ok: true };
}

