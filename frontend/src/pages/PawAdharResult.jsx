import { ArrowLeft, Download, PawPrint, Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toPng } from "html-to-image";
import { QRCodeSVG } from "qrcode.react";

export default function PawAdharResult() {
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const savedPet = localStorage.getItem("pawAdharPet");

    if (savedPet) {
      setPet(JSON.parse(savedPet));
    }
  }, []);


  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/pet/${pet.pawAdharId}`;

    const shareData = {
      title: `${pet.name || "My pet"}'s Paw-Adhar 🐾`,
      text: `Check out ${pet.name || "my pet"}'s Paw-Adhar! 🐾`,
      url: shareUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      await navigator.clipboard.writeText(shareUrl);

      alert("Paw-Adhar link copied!");
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Sharing failed:", error);
      }
    }
  };

  const handleDownload = async () => {
    const card = document.getElementById("paw-adhar-card");

    if (!card) return;

    try {
      const dataUrl = await toPng(card, {
        pixelRatio: 2,
        cacheBust: true,
      });

      const link = document.createElement("a");

      link.download = `${pet.name || "pet"}-paw-adhar.png`;
      link.href = dataUrl;

      link.click();
    } catch (error) {
      console.error("Failed to download Paw-Adhar:", error);
    }
  };

  if (!pet) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f3ed] px-5">
        <div className="text-center">
          <p className="text-4xl">🐾</p>

          <h1 className="mt-4 text-2xl font-black">No Paw-Adhar found</h1>

          <a
            href="/create"
            className="mt-5 inline-block rounded-2xl bg-[#171717] px-6 py-3 font-bold text-white"
          >
            Create Paw-Adhar
          </a>
        </div>
      </main>
    );
  } else {
    const profileUrl = `${window.location.origin}/pet/${pet.pawAdharId}`;

    return (
      <main className="min-h-screen bg-[#f5f3ed] text-[#171717]">
        {/* NAVBAR */}
        <nav className="border-b border-black/10 bg-[#f5f3ed]">
          <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#171717] text-white">
                <PawPrint size={18} />
              </div>

              <span className="text-lg font-black">Paw-Adhar</span>
            </a>

            <a
              href="/create"
              className="text-sm font-bold text-black/50 transition hover:text-black"
            >
              Create another
            </a>
          </div>
        </nav>

        {/* CONTENT */}
        <section className="px-5 py-10 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-5xl">
            {/* HEADER */}
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#d85b2c] text-white">
                <PawPrint size={23} />
              </div>

              <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                Paw-Adhar generated!
              </h1>

              <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-black/50 sm:text-base">
                {pet.name} is now officially unofficial. Download the card or
                share it with your friends.
              </p>
            </div>

            {/* CARD */}
            <div className="mt-10">
              <div className="mx-auto w-full max-w-[850px]">
                <div
                  id="paw-adhar-card"
                  className="overflow-hidden rounded-2xl border border-black/15 bg-[#f7f4ed] shadow-[0_25px_70px_rgba(0,0,0,0.16)]"
                >
                  {/* STRIPES */}
                  <div className="flex h-2">
                    <div className="w-1/3 bg-[#e87532]" />
                    <div className="w-1/3 bg-white" />
                    <div className="w-1/3 bg-[#4f8d55]" />
                  </div>

                  {/* HEADER */}
                  <div className="px-4 pb-4 pt-5 sm:px-7">
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
                          PAW-ADHAR
                        </p>

                        <div className="mx-auto mt-2 h-1 max-w-xs rounded-full bg-gradient-to-r from-[#e87532] via-white to-[#4f8d55]" />
                      </div>

                      <div className="text-center">
                        <div className="text-3xl sm:text-4xl">🐱</div>

                        <p className="text-[7px] font-bold uppercase">Pet ID</p>
                      </div>
                    </div>
                  </div>

                  {/* BODY */}
                  <div className="grid gap-5 px-4 pb-6 sm:grid-cols-[170px_1fr_150px] sm:gap-6 sm:px-7 sm:pb-7">
                    {/* PHOTO */}
                    <div>
                      <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-sm border-2 border-black/60 bg-[#ddd8cc] text-7xl">
                        {pet.photo ? (
                          <img
                            src={pet.photo}
                            alt={pet.name || "Pet"}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          "🐾"
                        )}
                      </div>

                      <p className="mt-2 text-center text-[7px] font-bold text-black/60 sm:text-[8px]">
                        फोटो / PHOTO
                      </p>
                    </div>

                    {/* DETAILS */}
                    <div className="space-y-3 text-xs sm:text-sm">
                      <Detail
                        label="नाम / Name"
                        value={pet.name || "Unnamed Pet"}
                      />

                      <Detail
                        label="जन्म तिथि / Date of Birth"
                        value={pet.dob || "Not specified"}
                      />

                      <Detail
                        label="लिंग / Gender"
                        value={pet.gender || "Not specified"}
                      />

                      <Detail
                        label="नस्ल / Breed"
                        value={pet.breed || "Not specified"}
                      />

                      <Detail
                        label="मालिक / Owner"
                        value={pet.owner || "Pet Parent"}
                      />

                      <Detail
                        label="पता / Address"
                        value={pet.address || "Not specified"}
                      />

                      <div className="border-t border-black/20 pt-2">
                        <p className="text-[8px] font-bold uppercase text-black/40">
                          Special Identification
                        </p>

                        <p className="mt-1 font-bold">
                          {pet.specialId || "Nothing suspicious"}
                        </p>
                      </div>
                    </div>

                    {/* QR */}
                    <div className="flex flex-col items-center justify-between">
                      <div className="text-center">
                        <p className="text-[8px] font-bold text-[#9b4030] sm:text-[9px]">
                          Paw-Adhar Number
                        </p>

                        <p className="mt-1 font-mono text-xs font-black sm:text-sm">
                          {pet.pawAdharId}
                        </p>
                      </div>

                      <div className="mt-4 flex h-28 w-28 items-center justify-center border-2 border-black bg-white sm:h-32 sm:w-32">
                        <div className="mt-4 flex h-28 w-28 items-center justify-center border-2 border-black bg-white p-2 sm:h-32 sm:w-32">
                          <QRCodeSVG
                            value={profileUrl}
                            size={112}
                            level="M"
                            bgColor="#ffffff"
                            fgColor="#171717"
                          />
                        </div>
                      </div>

                      <div className="mt-3 text-center">
                        <p className="text-lg italic">{pet.name || "Pet"} 🐾</p>

                        <div className="mx-auto mt-1 h-px w-24 bg-black/50" />

                        <p className="text-[7px] text-black/50">हस्ताक्षर</p>
                      </div>
                    </div>
                  </div>

                  {/* FOOTER */}
                  <div className="border-t-2 border-[#9b4030] px-4 py-3 text-center sm:px-7">
                    <p className="text-sm font-black sm:text-lg">
                      मेरा ID, मेरी पहचान 🐾
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-center text-[10px] text-black/35">
                  FOR ENTERTAINMENT PURPOSES ONLY · NOT A GOVERNMENT DOCUMENT
                </p>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleDownload}
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#171717] px-6 py-4 font-bold text-white transition hover:-translate-y-0.5"
              >
                <Download size={18} />
                Download Card
              </button>

              <button
                type="button"
                onClick={handleShare}
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-6 py-4 font-bold transition hover:-translate-y-0.5"
              >
                <Share2 size={18} />
                Share
              </button>
            </div>

            {/* BACK */}
            <div className="mt-6 text-center">
              <a
                href="/create"
                className="inline-flex items-center gap-2 text-sm font-bold text-black/45 transition hover:text-black"
              >
                <ArrowLeft size={15} />
                Create another Paw-Adhar
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

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
