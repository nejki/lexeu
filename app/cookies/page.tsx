import ContentLayout from "@/components/ContentLayout";
import CompanyContactBlock from "@/components/CompanyContactBlock";
import {
  createLegalPageMetadata,
  LEGAL_PAGES,
  LEGAL_DATES,
} from "@/app/legal-pages.config";

const page = LEGAL_PAGES.cookies;

export const metadata = createLegalPageMetadata(page);

const breadcrumbs = [{ label: page.title, href: page.slug }];

export default function CookiesPage() {
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

        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small text files that websites place on your device when you
          visit them. They are widely used to make websites work correctly and to
          give website owners information about how their site is being used.
        </p>

        <h2>2. How LexEU Uses Cookies</h2>
        <p>
          LexEU uses a minimal set of cookies. We do{" "}
          <strong>not</strong> use advertising cookies, tracking pixels, or
          third-party marketing cookies.
        </p>
        <p>The cookies on this site fall into two categories:</p>
        <ul>
          <li>
            <strong>Strictly necessary cookies</strong> — required for the site
            to function (session management and your cookie consent preference)
          </li>
          <li>
            <strong>Analytics cookies</strong> — used to understand how visitors
            use the site (Google Analytics only)
          </li>
        </ul>

        <h2>3. Strictly Necessary Cookies</h2>
        <p>
          These cookies are essential for the website to operate correctly. They
          do not track you across other sites or collect personal information for
          advertising purposes.
        </p>
        <table>
          <thead>
            <tr>
              <th>Cookie name</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Session cookie</td>
              <td>Maintains your logged-in session</td>
              <td>Session (expires when browser closes)</td>
            </tr>
            <tr>
              <td>Cookie consent preference</td>
              <td>Remembers your cookie consent choice</td>
              <td>1 year</td>
            </tr>
          </tbody>
        </table>

        <h2>4. Google Analytics Cookies</h2>
        <p>
          We use <strong>Google Analytics</strong> to understand how visitors use
          the LexEU website. This helps us improve the site&rsquo;s content,
          structure, and performance. Google Analytics collects information such
          as the pages you visit, how long you spend on them, and how you arrived
          at the site. This data is aggregated and does not identify you
          personally.
        </p>
        <p>Google Analytics places the following cookies:</p>
        <table>
          <thead>
            <tr>
              <th>Cookie name</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code className="text-[13px] bg-warm-pale px-1.5 py-0.5 rounded">
                  _ga
                </code>
              </td>
              <td>
                Identifies unique visitors; distinguishes individual users
              </td>
              <td>2 years</td>
            </tr>
            <tr>
              <td>
                <code className="text-[13px] bg-warm-pale px-1.5 py-0.5 rounded">
                  _ga_*
                </code>{" "}
                (e.g. _ga_XXXXXXXX)
              </td>
              <td>
                Used by Google Analytics 4 to persist session state
              </td>
              <td>2 years</td>
            </tr>
            <tr>
              <td>
                <code className="text-[13px] bg-warm-pale px-1.5 py-0.5 rounded">
                  _gid
                </code>
              </td>
              <td>
                Distinguishes users; tracks sessions within a 24-hour window
              </td>
              <td>24 hours</td>
            </tr>
          </tbody>
        </table>
        <p>
          Google Analytics data is processed by <strong>Google LLC</strong> and
          may be transferred to servers in the United States under appropriate
          safeguards (Standard Contractual Clauses and/or the EU-US Data Privacy
          Framework). For details on how Google handles this data, see{" "}
          <a href="https://policies.google.com/privacy">
            Google&rsquo;s Privacy Policy
          </a>
          .
        </p>

        <h2>5. How to Control Cookies</h2>
        <p>You have several options to manage or disable cookies:</p>
        <p>
          <strong>5.1 Browser settings.</strong> Most browsers allow you to
          refuse or delete cookies through their privacy or security settings.
          Useful links for common browsers:
        </p>
        <ul>
          <li>
            <a href="https://support.google.com/chrome/answer/95647">
              Google Chrome
            </a>
          </li>
          <li>
            <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac">
              Safari
            </a>
          </li>
          <li>
            <a href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-168dab11-0753-043d-7c16-ede5947fc64d">
              Microsoft Edge
            </a>
          </li>
        </ul>
        <p>
          Note: blocking all cookies may affect the functionality of this and
          other websites.
        </p>
        <p>
          <strong>5.2 Google Analytics opt-out.</strong> You can prevent Google
          Analytics from collecting data about your visits to any website by
          installing the{" "}
          <a href="https://tools.google.com/dlpage/gaoptout">
            Google Analytics Opt-out Browser Add-on
          </a>
          .
        </p>
        <p>
          <strong>5.3 Cookie consent.</strong> When you first visit LexEU, you
          will be presented with a cookie consent notice. You can update your
          preferences at any time through the site&rsquo;s cookie settings.
        </p>

        <h2>6. Changes to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time. The &ldquo;Last
          updated&rdquo; date at the top of this page reflects the most recent
          revision. Material changes will be communicated via the website.
        </p>

        <h2>7. Contact Us</h2>
        <p>If you have questions about our use of cookies:</p>
        <CompanyContactBlock />

        <hr />
        <p>© 2026 LexEU s.r.o. All rights reserved.</p>
      </div>
    </ContentLayout>
  );
}
