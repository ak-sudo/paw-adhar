import { Link } from "react-router-dom";
import { ArrowLeft, PawPrint } from "lucide-react";

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>

          <p className="mt-3 text-sm text-black/40">
            Last Updated: 12 August 2026
          </p>

          <div className="mt-6 rounded-2xl border border-[#d85b2c]/20 bg-[#d85b2c]/5 p-5">
            <p className="text-sm font-semibold leading-6">
              Paw-Adhar is a parody and entertainment service. It is not an
              official government identity service and is not affiliated with
              UIDAI or the Government of India.
            </p>
          </div>
        </header>

        {/* POLICY */}
        <div className="space-y-10 text-sm leading-7 text-black/65">
          {/* 1 */}
          <section>
            <SectionTitle number="1" title="Scope" />

            <p className="mt-4">
              This Privacy Policy applies to information collected through the
              Paw-Adhar website, its APIs, and related services.
            </p>

            <p className="mt-4">
              By using Paw-Adhar, you acknowledge this Privacy Policy. Where
              consent is required by applicable law, we will seek consent in
              the manner required by that law.
            </p>
          </section>

          {/* 2 */}
          <section>
            <SectionTitle
              number="2"
              title="Information We Collect"
            />

            <p className="mt-4">
              Depending on how you use the service, we may collect the
              following information.
            </p>

            <SubTitle>Pet information</SubTitle>

            <BulletList
              items={[
                "Pet name",
                "Date of birth",
                "Gender",
                "Breed",
                "Special identification details",
                "Pet photograph",
              ]}
            />

            <SubTitle>Owner / user information</SubTitle>

            <BulletList
              items={[
                "Owner name",
                "Address entered by the user",
                "Information contained in support requests or communications",
              ]}
            />

            <SubTitle>Automatically generated information</SubTitle>

            <BulletList
              items={[
                "IP address",
                "Browser and device information",
                "Request timestamps",
                "Error and diagnostic information",
                "Security and abuse-prevention logs",
              ]}
            />

            <p className="mt-5">
              We do not intentionally collect government-issued Aadhaar
              numbers, passwords, payment-card information, or biometric
              identity information through the pet creation form.
            </p>
          </section>

          {/* 3 */}
          <section>
            <SectionTitle
              number="3"
              title="How We Use Information"
            />

            <p className="mt-4">
              We use information to:
            </p>

            <BulletList
              items={[
                "Create and display the requested Paw-Adhar",
                "Generate and maintain a unique Paw-Adhar ID",
                "Create a public pet profile when a Paw-Adhar is generated",
                "Generate QR codes that link to the relevant pet profile",
                "Store and display uploaded pet photographs",
                "Provide download and sharing functionality",
                "Operate, maintain, debug, and secure the service",
                "Prevent abuse, fraud, and unauthorized activity",
                "Respond to support requests",
                "Comply with applicable legal obligations",
              ]}
            />

            <p className="mt-5">
              We will not use submitted information for unrelated purposes
              unless permitted by applicable law or you provide appropriate
              consent.
            </p>
          </section>

          {/* 4 */}
          <section>
            <SectionTitle
              number="4"
              title="Public Profiles"
            />

            <p className="mt-4">
              A key feature of Paw-Adhar is the public pet profile.
            </p>

            <p className="mt-4">
              When you create a Paw-Adhar, information displayed on the
              generated card or public profile may be accessible to anyone who
              has the public profile URL or scans the associated QR code.
            </p>

            <div className="mt-5 rounded-2xl border border-black/10 bg-white p-5">
              <p className="font-bold text-black">
                Information that may be publicly accessible includes:
              </p>

              <BulletList
                items={[
                  "Pet name",
                  "Pet photograph",
                  "Paw-Adhar ID",
                  "Breed",
                  "Date of birth",
                  "Gender",
                  "Owner name",
                  "Address",
                  "Special identification information",
                ]}
              />
            </div>

            <p className="mt-5 font-semibold text-black">
              Do not enter information that you do not want to make publicly
              accessible.
            </p>

            <p className="mt-4">
              We strongly recommend avoiding highly sensitive personal
              information in the address or special-identification fields.
            </p>
          </section>

          {/* 5 */}
          <section>
            <SectionTitle number="5" title="Images" />

            <p className="mt-4">
              Uploaded pet photographs are sent to our image-storage provider,
              Cloudinary, so that they can be displayed on the generated
              Paw-Adhar and public profile.
            </p>

            <p className="mt-4">
              We store the resulting image URL with the pet record.
            </p>

            <p className="mt-4">
              Users should upload only photographs they have the right to use
              and should avoid uploading photographs containing people or
              sensitive documents unless they have an appropriate legal basis
              and permission to do so.
            </p>
          </section>

          {/* 6 */}
          <section>
            <SectionTitle
              number="6"
              title="Third-Party Service Providers"
            />

            <p className="mt-4">
              We use third-party infrastructure providers to operate
              Paw-Adhar, including:
            </p>

            <BulletList
              items={[
                "Cloudinary — image storage and delivery",
                "MongoDB / MongoDB Atlas — database hosting and storage",
                "Render — backend hosting",
                "Netlify — frontend hosting and delivery",
              ]}
            />

            <p className="mt-5">
              These providers may process information as necessary to provide
              their services. Their own terms and privacy policies may also
              apply.
            </p>
          </section>

          {/* 7 */}
          <section>
            <SectionTitle
              number="7"
              title="Legal Basis and Consent"
            />

            <p className="mt-4">
              Where Indian data-protection law applies, we intend to process
              personal data only for lawful purposes and on an applicable legal
              basis, including consent where required.
            </p>

            <p className="mt-4">
              India's Digital Personal Data Protection Act, 2023 establishes a
              framework for processing digital personal data. Applicable legal
              requirements may depend on the date, circumstances, and nature of
              the processing activity.
            </p>

            <p className="mt-4">
              This Privacy Policy is intended to support compliance with
              applicable requirements but does not constitute a legal
              determination that every provision of applicable data-protection
              law applies to Paw-Adhar.
            </p>
          </section>

          {/* 8 */}
          <section>
            <SectionTitle
              number="8"
              title="Data Retention"
            />

            <p className="mt-4">
              We retain pet records and associated photographs for as long as
              reasonably necessary to provide the service, maintain the
              requested public profile, meet legitimate operational needs, or
              comply with applicable legal obligations.
            </p>

            <p className="mt-4">
              If you request deletion of a pet profile and we are able to
              verify the request, we will take reasonable steps to delete the
              associated application data and stored image, subject to:
            </p>

            <BulletList
              items={[
                "Legal retention requirements",
                "Security and fraud-prevention requirements",
                "Backups that may take a reasonable period to expire",
                "Technical limitations of third-party infrastructure",
              ]}
            />
          </section>

          {/* 9 */}
          <section>
            <SectionTitle
              number="9"
              title="Your Choices and Rights"
            />

            <p className="mt-4">
              Depending on applicable law, you may have rights relating to your
              personal data, including rights to:
            </p>

            <BulletList
              items={[
                "Request information about personal data we process",
                "Request correction of inaccurate information",
                "Request deletion where legally applicable",
                "Withdraw consent where processing is based on consent",
                "Raise a grievance or complaint",
              ]}
            />

            <p className="mt-5">
              To make a request, contact us at:
            </p>

            <a
              href="mailto:itzakshat706@gmail.com"
              className="mt-2 inline-block font-bold text-[#d85b2c] hover:underline"
            >
              itzakshat706@gmail.com
            </a>

            <p className="mt-4">
              We may need to verify your request before taking action.
            </p>
          </section>

          {/* 10 */}
          <section>
            <SectionTitle number="10" title="Security" />

            <p className="mt-4">
              We use reasonable technical and organizational measures intended
              to protect information against unauthorized access, alteration,
              disclosure, or destruction.
            </p>

            <p className="mt-4">
              These measures may include:
            </p>

            <BulletList
              items={[
                "HTTPS for data transmission",
                "Server-side handling of service credentials",
                "Restricted access to infrastructure credentials",
                "Database access controls",
                "CORS restrictions",
                "File-size and upload restrictions",
                "Error and security logging",
              ]}
            />

            <p className="mt-5">
              No internet service can guarantee absolute security.
            </p>
          </section>

          {/* 11 */}
          <section>
            <SectionTitle
              number="11"
              title="Cookies and Local Storage"
            />

            <p className="mt-4">
              Paw-Adhar may use browser storage such as local storage for
              temporary application functionality, such as retaining the most
              recently generated pet record during the creation flow.
            </p>

            <p className="mt-4">
              We may also use cookies or similar technologies if they become
              necessary for analytics, security, authentication, or other
              functionality. If we introduce non-essential tracking
              technologies, we will update this Privacy Policy and provide any
              consent mechanism required by applicable law.
            </p>
          </section>

          {/* 12 */}
          <section>
            <SectionTitle
              number="12"
              title="Children's Privacy"
            />

            <p className="mt-4">
              Paw-Adhar is not intended to be used by children without
              appropriate adult involvement.
            </p>

            <p className="mt-4">
              If you are under 18, please use Paw-Adhar only with the
              involvement and permission of a parent or legal guardian.
            </p>

            <p className="mt-4">
              We do not knowingly seek to collect children's personal data for
              independent use without the safeguards required by applicable
              law.
            </p>
          </section>

          {/* 13 */}
          <section>
            <SectionTitle
              number="13"
              title="International Processing"
            />

            <p className="mt-4">
              Some of our infrastructure providers may process or store
              information outside India.
            </p>

            <p className="mt-4">
              Where applicable, we will take steps required by Indian law and
              our contractual arrangements with service providers in relation
              to such processing.
            </p>
          </section>

          {/* 14 */}
          <section>
            <SectionTitle
              number="14"
              title="Third-Party Links"
            />

            <p className="mt-4">
              Paw-Adhar may contain links to third-party websites or services.
              We are not responsible for the privacy practices, security, or
              content of third-party services.
            </p>

            <p className="mt-4">
              Please review their privacy policies before providing information
              to them.
            </p>
          </section>

          {/* 15 */}
          <section>
            <SectionTitle
              number="15"
              title="Changes to This Privacy Policy"
            />

            <p className="mt-4">
              We may update this Privacy Policy when the service, technology,
              or applicable legal requirements change.
            </p>

            <p className="mt-4">
              The latest version will be published on this page with an
              updated "Last Updated" date.
            </p>
          </section>

          {/* 16 */}
          <section>
            <SectionTitle number="16" title="Contact" />

            <p className="mt-4">
              For privacy questions, data requests, or complaints:
            </p>

            <div className="mt-5 rounded-2xl border border-black/10 bg-white p-5">
              <p className="font-black text-black">Paw-Adhar</p>

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
                <a className="font-semibold" href="https://pawadhar.netlify.app">
                  https://pawadhar.netlify.app
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* BACK */}
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
/* Sub Title                       */
/* -------------------------------- */

function SubTitle({ children }) {
  return (
    <h3 className="mt-6 font-black text-black">
      {children}
    </h3>
  );
}

/* -------------------------------- */
/* Bullet List                     */
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