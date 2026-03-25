import ContentLayout from "@/components/ContentLayout";
import CompanyContactBlock from "@/components/CompanyContactBlock";
import {
  createLegalPageMetadata,
  LEGAL_PAGES,
  LEGAL_DATES,
} from "@/app/legal-pages.config";

const page = LEGAL_PAGES.privacy;

export const metadata = createLegalPageMetadata(page);

const breadcrumbs = [{ label: page.title, href: page.slug }];

export default function PrivacyPage() {
  return (
    <ContentLayout
      breadcrumbs={breadcrumbs}
      title={page.title}
      subtitle={page.subtitle}
      article={{
        title: page.title,
        description: page.description,
        url: page.slug,
        ...LEGAL_DATES,
      }}
    >
      <div className="legal-prose">
        <p>
          <strong>Last updated: March 2026</strong>
        </p>

        <h2>1. Introduction</h2>
        <p>
          LexEU s.r.o. (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) operates the LexEU AI legal
          information service at{" "}
          <a href="https://www.lexeu.ai">www.lexeu.ai</a>. We are committed to
          protecting your personal data and respecting your privacy.
        </p>
        <p>
          This Privacy Policy explains what personal data we collect, why we
          collect it, how we use it, and what rights you have as a data subject.
          It applies to all users of the LexEU website and service.
        </p>
        <p>
          Please also read our <a href="/cookies/">Cookie Policy</a> for specific
          information about the cookies we use.
        </p>

        <h2>2. Data Controller</h2>
        <p>The data controller responsible for your personal data is:</p>
        <CompanyContactBlock />

        <h2>3. Data We Collect</h2>
        <p>We collect the following categories of personal data:</p>

        <h3>3.1 Account Information</h3>
        <ul>
          <li>Full name</li>
          <li>Email address</li>
          <li>
            Password (stored in hashed form — we never see your password in plain
            text)
          </li>
          <li>Account creation date and preferences</li>
        </ul>

        <h3>3.2 Payment Data</h3>
        <p>
          Payment transactions are processed by our third-party payment provider.
          We do not store your full card number, CVV, or banking credentials. We
          receive confirmation of payment and may store transaction IDs and
          billing amounts for accounting and legal record-keeping.
        </p>

        <h3>3.3 Legal Queries and AI Responses</h3>
        <ul>
          <li>The legal questions you submit to the Service</li>
          <li>The AI-generated responses you receive</li>
          <li>Timestamps and question category metadata</li>
        </ul>

        <h3>3.4 Usage Data</h3>
        <ul>
          <li>Pages visited and features used</li>
          <li>Subscription tier and usage volume</li>
          <li>Session duration and interaction patterns</li>
        </ul>

        <h3>3.5 Technical Data</h3>
        <ul>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Operating system and device type</li>
          <li>Referring URL</li>
        </ul>

        <h3>3.6 Communications</h3>
        <p>
          Emails or messages you send us (for support, billing queries, or other
          contact).
        </p>

        <h2>4. How We Use Your Data</h2>
        <p>We use your personal data for the following purposes:</p>
        <table>
          <thead>
            <tr>
              <th>Purpose</th>
              <th>Legal Basis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Creating and managing your account</td>
              <td>Performance of contract (Art. 6(1)(b) GDPR)</td>
            </tr>
            <tr>
              <td>Providing AI legal information responses</td>
              <td>Performance of contract (Art. 6(1)(b) GDPR)</td>
            </tr>
            <tr>
              <td>Processing payments</td>
              <td>Performance of contract (Art. 6(1)(b) GDPR)</td>
            </tr>
            <tr>
              <td>Sending service communications (receipts, account notices)</td>
              <td>Performance of contract (Art. 6(1)(b) GDPR)</td>
            </tr>
            <tr>
              <td>Improving and developing the Service</td>
              <td>Legitimate interest (Art. 6(1)(f) GDPR)</td>
            </tr>
            <tr>
              <td>Website analytics and performance monitoring</td>
              <td>Legitimate interest (Art. 6(1)(f) GDPR)</td>
            </tr>
            <tr>
              <td>Fraud prevention and security</td>
              <td>Legitimate interest (Art. 6(1)(f) GDPR)</td>
            </tr>
            <tr>
              <td>Compliance with legal obligations</td>
              <td>Legal obligation (Art. 6(1)(c) GDPR)</td>
            </tr>
            <tr>
              <td>Marketing communications (if opted in)</td>
              <td>Consent (Art. 6(1)(a) GDPR)</td>
            </tr>
          </tbody>
        </table>

        <h2>5. Your Legal Queries and AI Processing</h2>
        <p>
          This section specifically addresses how your legal questions are
          handled.
        </p>
        <p>
          <strong>5.1 Processing for Service Delivery.</strong> When you submit a
          legal question, it is transmitted to our AI model infrastructure. The
          question is processed to generate a response. This processing is
          necessary to perform the Service you have contracted with us.
        </p>
        <p>
          <strong>5.2 Service Improvement.</strong> We may use anonymized and
          aggregated query data to improve the accuracy and quality of the
          Service. Before using query data for this purpose, we apply
          anonymization techniques that remove personally identifiable
          information. We will not use your legal queries in identifiable form
          for any purpose beyond delivering the Service unless you have given
          explicit consent.
        </p>
        <p>
          <strong>5.3 Sensitivity of Legal Queries.</strong> We recognize that
          legal questions may touch on sensitive personal circumstances. We treat
          this data with particular care and apply appropriate technical and
          organizational security measures.
        </p>
        <p>
          <strong>5.4 No Attorney Review.</strong> Your queries are processed by
          AI, not by human attorneys. The Service does not involve legal review by
          a lawyer employed by or affiliated with LexEU s.r.o.
        </p>

        <h2>6. Data Sharing and Third-Party Processors</h2>
        <p>
          We share personal data only where necessary. Our third-party processors
          are contractually bound by data processing agreements and act only on
          our instructions.
        </p>
        <table>
          <thead>
            <tr>
              <th>Processor Category</th>
              <th>Purpose</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Payment provider</td>
              <td>Processing subscription payments</td>
              <td>EU / EEA</td>
            </tr>
            <tr>
              <td>Cloud hosting / infrastructure</td>
              <td>Hosting the Service and storing data</td>
              <td>EU / EEA</td>
            </tr>
            <tr>
              <td>AI model provider</td>
              <td>Processing legal queries</td>
              <td>EU / EEA or international (see Section 7)</td>
            </tr>
            <tr>
              <td>Google LLC (Google Analytics)</td>
              <td>Website traffic and usage analytics</td>
              <td>USA (see Section 7)</td>
            </tr>
            <tr>
              <td>Email service provider</td>
              <td>Transactional and account emails</td>
              <td>EU / EEA</td>
            </tr>
          </tbody>
        </table>
        <p>We do not sell your personal data to third parties.</p>

        <h2>7. International Data Transfers</h2>
        <p>
          Some of our service providers are located outside the European Economic
          Area (EEA). Where personal data is transferred outside the EEA, we
          ensure appropriate safeguards are in place, including:
        </p>
        <ul>
          <li>
            <strong>Standard Contractual Clauses (SCCs)</strong> adopted by the
            European Commission, or
          </li>
          <li>Other transfer mechanisms approved under the GDPR</li>
        </ul>
        <p>
          For Google Analytics transfers to the United States, Google relies on
          the EU-US Data Privacy Framework and/or Standard Contractual Clauses.
          For more information, see{" "}
          <a href="https://policies.google.com/privacy">
            Google&rsquo;s Privacy Policy
          </a>
          .
        </p>

        <h2>8. Data Retention</h2>
        <p>
          We retain your personal data only as long as necessary for the purposes
          set out in this Policy:
        </p>
        <table>
          <thead>
            <tr>
              <th>Data Category</th>
              <th>Retention Period</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Account information</td>
              <td>Duration of your account + 3 years</td>
            </tr>
            <tr>
              <td>Legal queries and AI responses</td>
              <td>Duration of your account + 3 years</td>
            </tr>
            <tr>
              <td>Payment records</td>
              <td>10 years (legal and accounting obligation)</td>
            </tr>
            <tr>
              <td>Usage and technical data</td>
              <td>26 months (Google Analytics default)</td>
            </tr>
            <tr>
              <td>Support communications</td>
              <td>3 years from last contact</td>
            </tr>
          </tbody>
        </table>
        <p>
          When retention periods expire, data is deleted or irreversibly
          anonymized.
        </p>

        <h2>9. Your Rights Under GDPR</h2>
        <p>
          As a data subject under the GDPR, you have the following rights:
        </p>
        <p>
          <strong>Right of access (Art. 15)</strong> — You can request a copy of
          the personal data we hold about you.
        </p>
        <p>
          <strong>Right to rectification (Art. 16)</strong> — You can ask us to
          correct inaccurate or incomplete data.
        </p>
        <p>
          <strong>Right to erasure (Art. 17)</strong> — You can ask us to delete
          your personal data (&ldquo;right to be forgotten&rdquo;), subject to legal
          retention obligations.
        </p>
        <p>
          <strong>Right to restriction of processing (Art. 18)</strong> — You can
          ask us to limit how we process your data in certain circumstances.
        </p>
        <p>
          <strong>Right to data portability (Art. 20)</strong> — You can request
          your data in a structured, commonly used, machine-readable format.
        </p>
        <p>
          <strong>Right to object (Art. 21)</strong> — You can object to
          processing based on legitimate interest, including for direct marketing
          purposes.
        </p>
        <p>
          <strong>Right to withdraw consent</strong> — Where processing is based
          on your consent, you may withdraw it at any time. Withdrawal does not
          affect the lawfulness of processing carried out before withdrawal.
        </p>
        <p>
          <strong>Right to lodge a complaint</strong> — You have the right to
          lodge a complaint with the competent supervisory authority:
        </p>
        <p>
          <strong>
            Úrad na ochranu osobných údajov Slovenskej republiky
          </strong>
          <br />
          (Office for Personal Data Protection of the Slovak Republic)
          <br />
          Hraničná 12, 820 07 Bratislava 27, Slovak Republic
          <br />
          Website:{" "}
          <a href="https://dataprotection.gov.sk">
            https://dataprotection.gov.sk
          </a>
          <br />
          Email:{" "}
          <a href="mailto:statny.dozor@pdp.gov.sk">statny.dozor@pdp.gov.sk</a>
        </p>
        <p>
          To exercise any of your rights, contact us at{" "}
          <strong>
            <a href="mailto:info@lexeu.ai">info@lexeu.ai</a>
          </strong>
          . We will respond within 30 days.
        </p>

        <h2>10. Security</h2>
        <p>
          We implement appropriate technical and organizational security measures
          to protect your personal data, including:
        </p>
        <ul>
          <li>Encrypted data transmission (HTTPS/TLS)</li>
          <li>Password hashing</li>
          <li>Access controls limiting who can view personal data</li>
          <li>Regular security reviews</li>
        </ul>
        <p>
          No system is entirely immune to risk. If you suspect a security
          incident affecting your account, contact us immediately at{" "}
          <a href="mailto:info@lexeu.ai">info@lexeu.ai</a>.
        </p>

        <h2>11. Cookies</h2>
        <p>
          We use cookies on the LexEU website. For full details of the cookies we
          use, their purpose, and how to manage them, please see our{" "}
          <a href="/cookies/">Cookie Policy</a>.
        </p>

        <h2>12. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you
          of material changes by email or via a notice on the website. The
          &ldquo;Last updated&rdquo; date at the top of this page always reflects the most
          recent revision.
        </p>

        <h2>13. Contact Us</h2>
        <p>For any privacy-related questions or to exercise your rights:</p>
        <CompanyContactBlock />

        <hr />
        <p>© 2026 LexEU s.r.o. All rights reserved.</p>
      </div>
    </ContentLayout>
  );
}
