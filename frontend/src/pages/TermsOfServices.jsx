import { Link } from "react-router-dom";
import { ArrowLeft, PawPrint } from "lucide-react";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#f5f3ed] text-[#171717]">
      {/* NAVBAR */}
      <nav className="border-b border-black/10 bg-[#f5f3ed]">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-5 sm:px-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#171717] text-white">
              <PawPrint size={18} />
            </div>

            <span className="text-lg font-black tracking-tight">
              Paw-Adhar
            </span>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-semibold text-black/50 transition hover:text-black"
          >
            <ArrowLeft size={16} />
            Back
          </Link>
        </div>
      </nav>

      {/* CONTENT */}
      <article className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        {/* HEADER */}
        <header className="mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold">
            <PawPrint size={14} />
            Legal
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            Terms of Service
          </h1>

          <p className="mt-3 text-sm text-black/40">
            Last Updated: 12 August 2026
          </p>

          <div className="mt-6 rounded-2xl border border-[#d85b2c]/20 bg-[#d85b2c]/5 p-5">
            <p className="text-sm font-semibold leading-6">
              Paw-Adhar is a parody and entertainment service. It is not an
              official identity service and is not affiliated with UIDAI or
              the Government of India.
            </p>
          </div>
        </header>

        {/* TERMS */}
        <div className="space-y-10 text-sm leading-7 text-black/65">

          {/* 1 */}
          <section>
            <SectionTitle number="1" title="The Service" />

            <p className="mt-4">
              Paw-Adhar allows users to create fictional pet identity cards
              and public pet profiles.
            </p>

            <p className="mt-4">
              The service may provide:
            </p>

            <BulletList
              items={[
                "Pet identity-card generation",
                "Pet photo upload",
                "Public pet profiles",
                "QR codes",
                "Downloadable images",
                "Sharing links",
              ]}
            />

            <p className="mt-5">
              Features may change, be suspended, or be removed at any time.
            </p>
          </section>

          {/* 2 */}
          <section>
            <SectionTitle number="2" title="Eligibility" />

            <p className="mt-4">
              You must be legally capable of entering into these Terms.
            </p>

            <p className="mt-4">
              If you are under 18, you may use the service only with
              appropriate permission and involvement from a parent or legal
              guardian.
            </p>
          </section>

          {/* 3 */}
          <section>
            <SectionTitle
              number="3"
              title="Entertainment and Parody"
            />

            <p className="mt-4">
              Paw-Adhar is intentionally designed as a parody.
            </p>

            <div className="mt-5 rounded-2xl border border-black/10 bg-white p-5">
              <p className="font-black text-black">
                A Paw-Adhar:
              </p>

              <BulletList
                items={[
                  "Is not Aadhaar",
                  "Is not a government identity document",
                  "Does not establish identity",
                  "Does not establish citizenship",
                  "Does not establish ownership of an animal",
                  "Does not establish proof of address",
                  "Does not provide any government entitlement",
                  "Has no official validity",
                ]}
              />
            </div>

            <p className="mt-5 font-semibold text-black">
              You must not present a Paw-Adhar as a genuine government-issued
              document or use it to deceive another person or organization.
            </p>
          </section>

          {/* 4 */}
          <section>
            <SectionTitle
              number="4"
              title="User-Submitted Information"
            />

            <p className="mt-4">
              You are responsible for information, photographs, text, and
              other content that you submit.
            </p>

            <p className="mt-4">
              You represent that:
            </p>

            <BulletList
              items={[
                "You have the right to submit the content",
                "Your submission does not knowingly infringe another person's rights",
                "You will not submit confidential documents or secrets",
                "You will not use another person's personal information without appropriate permission or legal basis",
              ]}
            />
          </section>

          {/* 5 */}
          <section>
            <SectionTitle
              number="5"
              title="Public Information"
            />

            <p className="mt-4">
              Creating a Paw-Adhar may result in the creation of a public pet
              profile.
            </p>

            <p className="mt-4">
              Information included in a public profile can potentially be
              viewed by anyone who has the profile URL or scans its QR code.
            </p>

            <div className="mt-5 rounded-2xl border border-[#d85b2c]/20 bg-[#d85b2c]/5 p-5">
              <p className="font-bold text-black">
                Important:
              </p>

              <p className="mt-2">
                You are responsible for deciding what information to enter.
                Do not include passwords, government identification numbers,
                financial information, or other highly sensitive personal
                information in pet fields.
              </p>
            </div>
          </section>

          {/* 6 */}
          <section>
            <SectionTitle
              number="6"
              title="Prohibited Uses"
            />

            <p className="mt-4">
              You must not use Paw-Adhar to:
            </p>

            <BulletList
              items={[
                "Impersonate a government agency or official",
                "Create a fake government document for fraudulent purposes",
                "Misrepresent a Paw-Adhar as genuine Aadhaar",
                "Commit fraud or facilitate illegal activity",
                "Harass, threaten, or expose another person",
                "Upload content you do not have the right to use",
                "Upload malware or malicious code",
                "Attempt to bypass security controls",
                "Interfere with the service or its infrastructure",
                "Scrape or abuse the API at unreasonable rates",
                "Attempt unauthorized access to databases, servers, or accounts",
                "Use the service in violation of applicable law",
              ]}
            />

            <p className="mt-5">
              We may suspend or terminate access where we reasonably believe
              these Terms have been violated.
            </p>
          </section>

          {/* 7 */}
          <section>
            <SectionTitle
              number="7"
              title="Uploaded Images"
            />

            <p className="mt-4">
              You retain ownership of photographs and other content you
              submit, subject to the rights necessary for us and our service
              providers to operate the service.
            </p>

            <p className="mt-4">
              By uploading an image, you grant Paw-Adhar a non-exclusive,
              limited license to host, process, reproduce, display, and
              transmit that image as reasonably necessary to provide the
              service.
            </p>

            <p className="mt-4">
              You may request deletion of content subject to the limitations
              described in our Privacy Policy.
            </p>
          </section>

          {/* 8 */}
          <section>
            <SectionTitle
              number="8"
              title="Intellectual Property"
            />

            <p className="mt-4">
              The Paw-Adhar website, software, branding, interface, original
              graphics, text, and other service materials are owned by or
              licensed to Paw-Adhar unless otherwise stated.
            </p>

            <p className="mt-4">
              You may not copy, modify, distribute, reverse engineer, sell, or
              commercially exploit the service or its proprietary components
              without permission, except where applicable law permits
              otherwise.
            </p>

            <p className="mt-4">
              User-generated content remains the property of the relevant
              user, subject to the service license described above.
            </p>
          </section>

          {/* 9 */}
          <section>
            <SectionTitle
              number="9"
              title="Third-Party Services"
            />

            <p className="mt-4">
              Paw-Adhar relies on third-party providers including hosting,
              database, and image-storage providers.
            </p>

            <p className="mt-4">
              Third-party services may experience outages, errors, changes, or
              interruptions outside our control.
            </p>

            <p className="mt-4">
              Your use of a third-party service may also be subject to that
              provider's own terms.
            </p>
          </section>

          {/* 10 */}
          <section>
            <SectionTitle number="10" title="Availability" />

            <p className="mt-4">
              We aim to keep Paw-Adhar available, but we do not guarantee that
              the service will always be:
            </p>

            <BulletList
              items={[
                "Available",
                "Error-free",
                "Secure",
                "Uninterrupted",
                "Compatible with every device or browser",
              ]}
            />

            <p className="mt-5">
              We may perform maintenance, updates, or changes without prior
              notice where reasonably necessary.
            </p>
          </section>

          {/* 11 */}
          <section>
            <SectionTitle
              number="11"
              title="Generated Content"
            />

            <p className="mt-4">
              Generated Paw-Adhars are created using the information you
              provide.
            </p>

            <p className="mt-4">
              We do not guarantee that generated content will be accurate,
              complete, suitable for every purpose, or permanently available.
            </p>

            <p className="mt-4">
              The service should not be relied upon as a source of legal,
              governmental, identity, medical, veterinary, or other
              professional documentation.
            </p>
          </section>

          {/* 12 */}
          <section>
            <SectionTitle number="12" title="Privacy" />

            <p className="mt-4">
              Your use of Paw-Adhar is also governed by our{" "}
              <Link
                to="/privacy"
                className="font-bold text-[#d85b2c] hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>

            <p className="mt-4">
              The Privacy Policy explains how information and uploaded
              photographs are processed and stored.
            </p>
          </section>

          {/* 13 */}
          <section>
            <SectionTitle
              number="13"
              title="Deletion Requests"
            />

            <p className="mt-4">
              You may request deletion of a pet profile or associated
              information by contacting:
            </p>

            <a
              href="mailto:itzakshat706@gmail.com"
              className="mt-3 inline-block font-bold text-[#d85b2c] hover:underline"
            >
              itzakshat706@gmail.com
            </a>

            <p className="mt-4">
              We may need sufficient information to verify the request and may
              retain limited information where required or permitted by law.
            </p>
          </section>

          {/* 14 */}
          <section>
            <SectionTitle
              number="14"
              title="Disclaimer of Warranties"
            />

            <p className="mt-4">
              To the maximum extent permitted by applicable law, Paw-Adhar is
              provided on an "as is" and "as available" basis.
            </p>

            <p className="mt-4">
              We disclaim warranties that cannot lawfully be excluded, and
              otherwise disclaim implied warranties relating to availability,
              fitness for a particular purpose, accuracy, non-infringement, or
              uninterrupted operation.
            </p>

            <p className="mt-4">
              Nothing in these Terms excludes a liability that cannot legally
              be excluded.
            </p>
          </section>

          {/* 15 */}
          <section>
            <SectionTitle
              number="15"
              title="Limitation of Liability"
            />

            <p className="mt-4">
              To the maximum extent permitted by applicable law, Paw-Adhar and
              its operators will not be liable for indirect, incidental,
              special, consequential, exemplary, or punitive losses arising
              from use of the service.
            </p>

            <p className="mt-4">
              Nothing in these Terms limits liability where doing so would be
              prohibited by applicable law.
            </p>
          </section>

          {/* 16 */}
          <section>
            <SectionTitle number="16" title="Indemnity" />

            <p className="mt-4">
              To the extent permitted by applicable law, you agree to defend
              and hold harmless Paw-Adhar and its operators from claims,
              losses, liabilities, damages, and expenses arising from:
            </p>

            <BulletList
              items={[
                "Your misuse of the service",
                "Your violation of these Terms",
                "Your submitted content",
                "Your violation of another person's rights",
                "Your unlawful use of a generated Paw-Adhar",
              ]}
            />
          </section>

          {/* 17 */}
          <section>
            <SectionTitle
              number="17"
              title="Suspension and Termination"
            />

            <p className="mt-4">
              We may suspend, restrict, or terminate access to the service if:
            </p>

            <BulletList
              items={[
                "You violate these Terms",
                "Your use creates a security or legal risk",
                "We are required to do so by law",
                "The service is discontinued",
              ]}
            />

            <p className="mt-5">
              Termination does not necessarily remove information immediately
              from backups or records that must be retained for legal or
              security purposes.
            </p>
          </section>

          {/* 18 */}
          <section>
            <SectionTitle
              number="18"
              title="Changes to These Terms"
            />

            <p className="mt-4">
              We may update these Terms as the service develops or legal
              requirements change.
            </p>

            <p className="mt-4">
              The latest version will be published on this page with the
              updated date.
            </p>

            <p className="mt-4">
              Your continued use of Paw-Adhar after material changes take
              effect constitutes acceptance of the updated Terms to the extent
              permitted by applicable law.
            </p>
          </section>

          {/* 19 */}
          <section>
            <SectionTitle number="19" title="Contact" />

            <p className="mt-4">
              For questions about these Terms:
            </p>

            <div className="mt-5 rounded-2xl border border-black/10 bg-white p-5">
              <p className="font-black text-black">
                Paw-Adhar
              </p>

              <p className="mt-2 text-black/60">
                Email:{" "}
                <a
                  href="mailto:itzakshat706@gmail.com"
                  className="font-semibold text-[#d85b2c] hover:underline"
                >
                  itzakshat706@gmail.com
                </a>
              </p>

              <p className="mt-1 text-black/60">
                Website:{" "}
                <span className="font-semibold">
                  https://pawadhar.netlify.app
                </span>
              </p>
            </div>
          </section>
        </div>

        {/* BACK BUTTON */}
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-2xl bg-[#171717] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5"
          >
            <ArrowLeft size={16} />
            Back to Paw-Adhar
          </Link>
        </div>
      </article>
    </main>
  );
}

/* -------------------------------- */
/* Section Title                    */
/* -------------------------------- */

function SectionTitle({ number, title }) {
  return (
    <h2 className="flex items-baseline gap-3 text-xl font-black tracking-tight text-black sm:text-2xl">
      <span className="text-sm font-black text-[#d85b2c]">
        {number}.
      </span>

      <span>{title}</span>
    </h2>
  );
}

/* -------------------------------- */
/* Bullet List                      */
/* -------------------------------- */

function BulletList({ items }) {
  return (
    <ul className="mt-3 space-y-2 pl-5">
      {items.map((item, index) => (
        <li key={index} className="relative pl-2">
          <span className="absolute -left-3 top-3 h-1.5 w-1.5 rounded-full bg-[#d85b2c]" />
          {item}
        </li>
      ))}
    </ul>
  );
}