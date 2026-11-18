import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { buildPageMetadata } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Service",
  description: "Terms governing use of zapatalogic.com and ZapataLogic's internal applications.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="November 18, 2026">
      <section>
        <p>
          These terms govern your use of zapatalogic.com and any application operated by ZapataLogic
          (&ldquo;we&rdquo;). By using them, you agree to these terms.
        </p>
      </section>

      <section>
        <h2>Website</h2>
        <p>
          Content on this website is provided for general information about ZapataLogic&rsquo;s services and
          is not professional advice for your specific situation. Engagements are governed by a separate
          written agreement.
        </p>
      </section>

      <section>
        <h2>Internal applications</h2>
        <p>
          ZapataLogic&rsquo;s assistant applications, including its Google Calendar and Gmail integrations,
          are private tools used only by ZapataLogic&rsquo;s owner with accounts the owner controls. They are
          not offered to the public, and access is limited to accounts explicitly authorized through
          Google&rsquo;s consent screen. Handling of data is described in our{" "}
          <a href="/privacy">Privacy Policy</a>.
        </p>
      </section>

      <section>
        <h2>No warranty and limitation of liability</h2>
        <p>
          The website and applications are provided &ldquo;as is&rdquo; without warranties of any kind. To the
          extent permitted by law, ZapataLogic is not liable for indirect, incidental, or consequential
          damages arising from their use.
        </p>
      </section>

      <section>
        <h2>Changes and contact</h2>
        <p>
          We may update these terms; the date above shows the latest revision. Questions can be sent to{" "}
          <a href="mailto:andy@zapatalogic.com">andy@zapatalogic.com</a>.
        </p>
      </section>
    </LegalPage>
  );
}
