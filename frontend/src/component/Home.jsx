import { ArrowRight, PawPrint, QrCode, Sparkles } from "lucide-react";
import cat from "/cat.jpeg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from '../../public/paw-adhar-logo.png'

export default function HomePage() {
    const navigate = useNavigate();
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f3ed] text-[#171717]">
      {/* NAVBAR */}
      <nav className="border-b border-black/10 bg-[#f5f3ed]">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#171717] text-white">
              <PawPrint size={18} />
            </div>
            <span className="text-lg font-black tracking-tight">Paw-Adhar</span>
          </div>

          <a
            href="/create"
            className="rounded-full bg-[#171717] px-4 py-2 text-sm font-bold text-white transition hover:bg-black/80 sm:px-5"
          >
            Create ID
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-5 pb-20 pt-14 sm:px-8 sm:pt-20">
        <div className="mx-auto max-w-7xl">
          {/* Intro */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold shadow-sm sm:text-sm">
              <PawPrint size={14} />
                Paw-Adhar · The unofficial pet identity generator
            </div>

            <h1 className="text-5xl font-black leading-[0.92] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              Your pet is
              <span className="block text-[#d85b2c]">
                officially unofficial.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
            Give your furry citizen the identity card they never asked for.
            Upload a photo, enter their details, and create their very own
            Paw-Adhar.
            </p>    

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/create"
                className="group flex items-center justify-center gap-2 rounded-2xl bg-[#171717] px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5"
              >
                Create their ID
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#preview"
                className="flex items-center justify-center rounded-2xl border border-black/10 bg-white px-7 py-4 font-bold transition hover:bg-black/[0.03]"
              >
                See an example
              </a>
            </div>

            <p className="mt-4 text-xs text-black/40">
              Just for fun · Not a government document
            </p>
          </div>

          {/* CARD PREVIEW */}
          <div id="preview" className="relative mt-16 sm:mt-20">
            {/* subtle background */}
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d85b2c]/10 blur-3xl sm:h-96 sm:w-96" />

            <div className="relative mx-auto w-full max-w-[850px]">
              {/* Card */}
              <div className="overflow-hidden rounded-2xl border border-black/15 bg-[#f7f4ed] shadow-[0_25px_70px_rgba(0,0,0,0.16)]">
                {/* Fake government-style stripes */}
                <div className="flex h-2">
                  <div className="w-1/3 bg-[#e87532]" />
                  <div className="w-1/3 bg-white" />
                  <div className="w-1/3 bg-[#4f8d55]" />
                </div>

                {/* Header */}
                <div className="px-4 pb-3 pt-4 sm:px-7 sm:pb-4 sm:pt-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="hidden text-center sm:block">
                      <div className="text-3xl">🐾</div>
                      <p className="text-[7px] font-bold uppercase">
                        Pet Registry
                      </p>
                    </div>

                    <div className="flex-1 text-center">
                      <p className="text-lg font-black sm:text-2xl">
                        भारत पेट पहचान
                      </p>

                      <p className="mt-0.5 text-sm font-bold sm:text-base">
                        PET IDENTITY CARD
                      </p>

                      <div className="mx-auto mt-2 h-1 max-w-xs rounded-full bg-gradient-to-r from-[#e87532] via-white to-[#4f8d55]" />
                    </div>

                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl">🐶</div>

                      <p className="text-[7px] font-bold uppercase">Pet ID</p>
                    </div>
                  </div>
                </div>

                {/* Main card body */}
                <div className="grid gap-5 px-4 pb-5 sm:grid-cols-[170px_1fr_150px] sm:gap-6 sm:px-7 sm:pb-7">
                  {/* PHOTO */}
                  <div>
                    <div className="aspect-[4/5] overflow-hidden rounded-sm border-2 border-black/60 bg-[#ddd8cc]">
                      <div className="flex h-full items-center justify-center text-7xl">
                        <img src={cat} />
                      </div>
                    </div>

                    <p className="mt-2 text-center text-[7px] font-bold text-black/60 sm:text-[8px]">
                      फोटो / PHOTO
                    </p>
                  </div>

                  {/* DETAILS */}
                  <div className="space-y-2.5 text-xs sm:space-y-3 sm:text-sm">
                    <Detail label="नाम / Name" value="Billu 🐱" />

                    <Detail
                      label="जन्म तिथि / Date of Birth"
                      value="15 / 10 / 2025"
                    />

                    <Detail label="लिंग / Gender" value="Male" />

                    <Detail label="नस्ल / Breed" value="Desi Billa" />

                    <Detail
                      label="पता / Address"
                      value={
                        <>
                          Meow Meow Gali,
                          <br />
                          Billa Nagar
                          <br />
                        </>
                      }
                    />

                    <div className="mt-3 border-t border-black/20 pt-2">
                      <p className="text-[8px] font-bold uppercase text-black/40">
                        Special Identification
                      </p>

                      <p className="font-bold">मूछ में एक बाल कम</p>
                    </div>
                  </div>

                  {/* QR + NUMBER */}
                  <div className="flex flex-col items-center justify-between">
                    <div className="text-center">
                      <p className="text-[8px] font-bold text-[#9b4030] sm:text-[9px]">
                        Pet ID Number
                      </p>

                      <p className="mt-1 font-mono text-sm font-black sm:text-base">
                        2222 2222 2222
                      </p>
                    </div>

                    <div className="mt-4 flex h-28 w-28 items-center justify-center border-2 border-black bg-white sm:h-32 sm:w-32">
                      <QrCode
                        size={90}
                        strokeWidth={1.5}
                        className="sm:h-[105px] sm:w-[105px]"
                      />
                    </div>

                    <div className="mt-3 text-center">
                      <p className="font-script text-lg italic">Kittu 🐾</p>

                      <div className="mx-auto mt-1 h-px w-24 bg-black/50" />

                      <p className="text-[7px] text-black/50">हस्ताक्षर</p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="border-t-2 border-[#9b4030] px-4 py-3 text-center sm:px-7">
                  <p className="text-sm font-black sm:text-lg">
                    मेरा ID, मेरी पहचान 🐾
                  </p>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="mt-4 text-center text-[10px] text-black/35">
                SAMPLE PREVIEW — FOR ENTERTAINMENT PURPOSES ONLY
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="border-t border-black/10 bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#d85b2c]">
              How it works
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Three steps to citizenship.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <Step
              number="01"
              title="Upload"
              text="Give us your pet's best photo."
            />

            <Step
              number="02"
              title="Fill in"
              text="Add their name, breed, address and other fun details."
            />

            <Step
              number="03"
              title="Share"
              text="Download their card and share it with the world."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="create" className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#171717] px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <div className="text-5xl">🐾</div>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
            Ready to make it official?
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-white/55 sm:text-base">
            Your pet has waited long enough for the recognition they absolutely
            did not ask for.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 font-bold text-[#171717] transition hover:-translate-y-0.5" onClick={()=>{navigate('/create')}}>
            Create Pet ID
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* FOOTER */}
        <footer className="border-t border-black/10 bg-[#f5f3ed]">
        <div className="mx-auto max-w-7xl px-5 py-8">

            <div className="mb-6 text-center">
            <p className="mx-auto max-w-2xl text-xs leading-5 text-black/40">
                By creating a Paw-Adhar, you understand that the information you
                provide may be displayed on a public pet profile.
            </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-xs text-black/40">
                © 2026 Paw-Adhar. Made for fun 🐾
            </p>

            <div className="flex gap-5 text-xs font-semibold">
                <Link
                to="/privacy"
                className="text-black/50 transition hover:text-black"
                >
                Privacy Policy
                </Link>

                <Link
                to="/terms"
                className="text-black/50 transition hover:text-black"
                >
                Terms of Service
                </Link>
            </div>

            </div>

        </div>
        </footer>
    </main>
  );
}

/* -------------------------------- */
/* Small reusable components        */
/* -------------------------------- */

function Detail({ label, value }) {
  return (
    <div>
      <p className="text-[8px] font-bold uppercase text-black/40 sm:text-[9px]">
        {label}
      </p>

      <p className="font-semibold leading-5">{value}</p>
    </div>
  );
}

function Step({ number, title, text }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-[#f5f3ed] p-6">
      <span className="text-xs font-black text-[#d85b2c]">{number}</span>

      <h3 className="mt-8 text-xl font-black">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-black/50">{text}</p>
    </div>
  );
}
