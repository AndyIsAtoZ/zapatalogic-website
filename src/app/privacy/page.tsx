import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: "How ZapataLogic handles information from this website and from its internal Google integrations.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="November 18, 2026">
      <section>
        <p>
          This policy explains how ZapataLogic (&ldquo;we&rdquo;) handles information collected through
          zapatalogic.com and through ZapataLogic&rsquo;s internal assistant integrations with Google
          services (Google Calendar and Gmail).
        </p>
      </section>

      <section>
        <h2>Website</h2>
        <p>
          When you submit the contact form, we receive the details you provide (such as your name, email
          address, and message) and use them only to respond to your inquiry. We do not sell this
          information or share it with third parties for marketing.
        </p>
      </section>

      <section>
        <h2>Google integrations</h2>
        <p>
          ZapataLogic operates a private assistant application that connects only to Google accounts
          belonging to ZapataLogic&rsquo;s owner, who explicitly authorizes each connection through
          Google&rsquo;s sign-in and consent screen. It is not offered to the public.
        </p>
        <ul>
          <li>
            <strong>Data accessed:</strong> calendar events, invitations and availability (Google Calendar),
            and email messages and labels (Gmail), limited to the scopes shown on the consent screen.
          </li>
          <li>
            <strong>How it is used:</strong> solely to provide assistant features to the account owner,
            such as summarizing schedules, responding to invitations, and organizing email, at the
            owner&rsquo;s direction.
          </li>
          <li>
            <strong>Storage:</strong> authorization tokens and any working data are kept on systems
            controlled by ZapataLogic&rsquo;s owner. Data is not sold, used for advertising, or transferred
            to third parties except as needed to operate the assistant or as required by law.
          </li>
          <li>
            <strong>Revoking access:</strong> access can be revoked at any time at{" "}
            <a href="https://myaccount.google.com/permissions">myaccount.google.com/permissions</a>.
          </li>
        </ul>
        <p>
          ZapataLogic&rsquo;s use and transfer of information received from Google APIs adheres to the{" "}
          <a href="https://developers.google.com/terms/api-services-user-data-policy">
            Google API Services User Data Policy
          </a>
          , including the Limited Use requirements.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent to{" "}
          <a href="mailto:andy@zapatalogic.com">andy@zapatalogic.com</a>.
        </p>
      </section>
    </LegalPage>
  );
}
