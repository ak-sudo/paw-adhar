import { Link, useParams } from "react-router-dom";
import { PawPrint, ArrowLeft, QrCode } from "lucide-react";
import { useEffect, useState } from "react";

export default function PetProfile() {
  const { pawAdharId } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const savedPet = localStorage.getItem("pawAdharPet");

    if (!savedPet) return;

    const parsedPet = JSON.parse(savedPet);

    if (parsedPet.pawAdharId === pawAdharId) {
      setPet(parsedPet);
    }
  }, [pawAdharId]);

  if (!pet) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f5f3ed] px-5">
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#171717] text-white">
            <PawPrint size={24} />
          </div>

          <h1 className="mt-5 text-2xl font-black">
            Pet not found
          </h1>

          <p className="mt-2 text-sm text-black/45">
            This Paw-Adhar profile doesn't exist on this device.
          </p>

          <Link
            to="/create"
            className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-[#171717] px-6 py-3 text-sm font-bold text-white"
          >
            <ArrowLeft size={16} />
            Create a Paw-Adhar
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f3ed] text-[#171717]">

      {/* NAVBAR */}
      <nav className="border-b border-black/10">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">

          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#171717] text-white">
              <PawPrint size={18} />
            </div>

            <span className="text-lg font-black">
              Paw-Adhar
            </span>
          </Link>

          <Link
            to="/create"
            className="rounded-full bg-[#171717] px-4 py-2 text-sm font-bold text-white"
          >
            Create yours
          </Link>

        </div>
      </nav>

      {/* PROFILE */}
      <section className="px-5 py-10 sm:px-8 sm:py-16">

        <div className="mx-auto max-w-4xl">

          {/* VERIFIED-STYLE HEADER */}
          <div className="text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#d85b2c] text-white">
              <PawPrint size={25} />
            </div>

            <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-[#d85b2c]">
              Paw-Adhar Profile
            </p>

            <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
              {pet.name || "Unnamed Pet"} 🐾
            </h1>

            <p className="mt-3 text-sm text-black/45">
              Unofficially identified as{" "}
              <span className="font-mono font-bold text-black/60">
                {pet.pawAdharId}
              </span>
            </p>

          </div>

          {/* PROFILE CARD */}
          <div className="mt-10 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.1)]">

            {/* TOP */}
            <div className="flex h-2">
              <div className="w-1/3 bg-[#e87532]" />
              <div className="w-1/3 bg-white" />
              <div className="w-1/3 bg-[#4f8d55]" />
            </div>

            <div className="grid gap-8 p-5 sm:p-8 md:grid-cols-[220px_1fr]">

              {/* PHOTO */}
              <div>

                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-[#ddd8cc]">

                  {pet.photo ? (
                    <img
                      src={pet.photo}
                      alt={pet.name || "Pet"}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-7xl">
                      🐾
                    </div>
                  )}

                </div>

                <div className="mt-3 rounded-xl bg-[#f5f3ed] px-4 py-3 text-center">

                  <p className="text-[9px] font-bold uppercase tracking-widest text-black/35">
                    Paw-Adhar Number
                  </p>

                  <p className="mt-1 break-all font-mono text-xs font-black">
                    {pet.pawAdharId}
                  </p>

                </div>

              </div>

              {/* DETAILS */}
              <div>

                <div className="border-b border-black/10 pb-5">

                  <p className="text-xs font-bold uppercase tracking-widest text-black/35">
                    Pet Identity
                  </p>

                  <h2 className="mt-2 text-3xl font-black">
                    {pet.name || "Unnamed Pet"}
                  </h2>

                  <p className="mt-1 text-black/45">
                    {pet.breed || "Breed not specified"}
                  </p>

                </div>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">

                  <ProfileDetail
                    label="Date of Birth"
                    value={pet.dob || "Not specified"}
                  />

                  <ProfileDetail
                    label="Gender"
                    value={pet.gender || "Not specified"}
                  />

                  <ProfileDetail
                    label="Owner"
                    value={pet.owner || "Pet Parent"}
                  />

                  <ProfileDetail
                    label="Special Identification"
                    value={pet.specialId || "Nothing suspicious"}
                  />

                </div>

                <div className="mt-6 rounded-2xl bg-[#f5f3ed] p-5">

                  <p className="text-[9px] font-bold uppercase tracking-widest text-black/35">
                    Address
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-6">
                    {pet.address || "Not specified"}
                  </p>

                </div>

                {/* QR PLACEHOLDER */}
                <div className="mt-6 flex items-center gap-4 rounded-2xl border border-black/10 p-4">

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center border border-black/10 bg-white">
                    <QrCode size={48} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="font-bold">
                      That's one official-looking pet.
                    </p>

                    <p className="mt-1 text-xs leading-5 text-black/40">
                      Scan the Paw-Adhar QR code to view this profile.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* DISCLAIMER */}
          <p className="mx-auto mt-6 max-w-xl text-center text-[10px] leading-5 text-black/35">
            This is a fictional entertainment profile created by Paw-Adhar.
            It is not an official identification document and is not affiliated
            with UIDAI or the Government of India.
          </p>

          <div className="mt-8 text-center">

            <Link
              to="/create"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#171717] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5"
            >
              <PawPrint size={17} />
              Make a Paw-Adhar for your pet
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}


function ProfileDetail({ label, value }) {
  return (
    <div>
      <p className="text-[9px] font-bold uppercase tracking-widest text-black/35">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold">
        {value}
      </p>
    </div>
  );
}