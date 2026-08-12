import { useState } from "react";
import { ImagePlus, PawPrint, QrCode, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CreatePawAdhar() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    dob: "",
    gender: "",
    breed: "",
    address: "",
    specialId: "",
    owner: "",
  });

  const generatePawAdharId = () => {
    const uuid = crypto.randomUUID().replace(/-/g, "");

    return uuid
      .slice(0, 12)
      .toUpperCase()
      .match(/.{1,4}/g)
      .join("-");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handlePhoto = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setPhoto(file);
    setPhotoPreview(URL.createObjectURL(file));
  };

  const handleGenerate = async () => {
    if (isGenerating) return;

    const requiredFields = [
      ["name", "Pet name"],
      ["dob", "Date of birth"],
      ["gender", "Gender"],
      ["breed", "Breed"],
      ["owner", "Owner name"],
      ["address", "Address"],
      ["specialId", "Special identification"],
    ];

    const missingField = requiredFields.find(([field]) => !form[field].trim());

    if (missingField) {
      alert(`Please enter ${missingField[1]}.`);
      return;
    }

    if (!photo) {
      alert("Please upload your pet's photo.");
      return;
    }

    setIsGenerating(true);

    try {
      const uploadFormData = new FormData();

      uploadFormData.append("photo", photo);

      const uploadResponse = await fetch(
        `${import.meta.env.VITE_API_URL}/api/upload`,
        {
          method: "POST",
          body: uploadFormData,
        },
      );

      const uploadData = await uploadResponse.json();

      if (!uploadResponse.ok) {
        throw new Error(uploadData.message || "Photo upload failed.");
      }

      const petData = {
        ...form,
        photo: uploadData.photoUrl,
        pawAdharId: generatePawAdharId(),
      };

      const petResponse = await fetch(
        `${import.meta.env.VITE_API_URL}/api/pets`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(petData),
        },
      );

      const petResult = await petResponse.json();

      if (!petResponse.ok) {
        throw new Error(petResult.message || "Failed to create Paw-Adhar.");
      }

      localStorage.setItem("pawAdharPet", JSON.stringify(petResult.pet));

      navigate("/result");
    } catch (error) {
      console.error("Generate Paw-Adhar error:", error);
      alert(error.message || "Something went wrong.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f3ed] text-[#171717]">
      {/* NAVBAR */}
      <nav className="border-b border-black/10 bg-[#f5f3ed]">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#171717] text-white">
              <PawPrint size={18} />
            </div>

            <span className="text-lg font-black tracking-tight">Paw-Adhar</span>
          </a>

          <div className="text-xs font-medium text-black/40">
            Create your pet's identity
          </div>
        </div>
      </nav>

      {/* PAGE */}
      <section className="px-5 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto max-w-7xl">
          {/* HEADER */}
          <div className="mb-10 max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-bold">
              <Sparkles size={14} />
              Create Paw-Adhar
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
              Give your pet an identity.
            </h1>

            <p className="mt-4 max-w-xl leading-7 text-black/50">
              Add a few details about your furry citizen and watch their
              Paw-Adhar come to life.
            </p>
          </div>

          {/* CONTENT */}
          <div className="grid gap-8 lg:grid-cols-[420px_1fr]">
            {/* FORM */}
            <div className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm sm:p-7">
              <h2 className="text-xl font-black">Pet details</h2>

              <p className="mt-1 text-sm text-black/40">
                Fill in whatever makes your pet uniquely them.
              </p>

              <div className="mt-7 space-y-5">
                {/* PHOTO */}
                <div>
                  <label className="mb-2 block text-sm font-bold">
                    Pet photo
                  </label>

                  <label className="group flex cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-black/10 bg-[#f5f3ed] transition hover:border-[#d85b2c]/50">
                    {photoPreview ? (
                      <img
                        src={photoPreview}
                        alt="Pet preview"
                        className="h-48 w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-48 flex-col items-center justify-center">
                        <ImagePlus size={30} className="text-black/30" />

                        <p className="mt-3 text-sm font-bold">Upload a photo</p>

                        <p className="mt-1 text-xs text-black/40">
                          JPG, PNG or WEBP
                        </p>
                      </div>
                    )}

                    <input
                      type="file"
                      accept="image/png,image/jpeg,image/webp"
                      onChange={handlePhoto}
                      className="hidden"
                    />
                  </label>
                </div>

                <Input
                  label="Pet name"
                  name="name"
                  placeholder="e.g. Billu"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

                <Input
                  label="Date of birth"
                  name="dob"
                  type="date"
                  value={form.dob}
                  onChange={handleChange}
                  required
                />

                <div>
                  <label className="mb-2 block text-sm font-bold">Gender</label>

                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-black/10 bg-[#f5f3ed] px-4 py-3 text-sm outline-none transition focus:border-[#d85b2c]"
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <Input
                  label="Breed"
                  name="breed"
                  placeholder="e.g. Desi Billa"
                  value={form.breed}
                  onChange={handleChange}
                  required
                />

                <Input
                  label="Owner name"
                  name="owner"
                  placeholder="e.g. Rahul"
                  value={form.owner}
                  onChange={handleChange}
                  required
                />

                <div>
                  <label className="mb-2 block text-sm font-bold">
                    Address
                  </label>

                  <textarea
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    placeholder="Enter pet's address"
                    rows={3}
                    className="w-full resize-none rounded-xl border border-black/10 bg-[#f5f3ed] px-4 py-3 text-sm outline-none transition placeholder:text-black/30 focus:border-[#d85b2c]"
                    required
                  />
                </div>

                <Input
                  label="Special identification"
                  name="specialId"
                  placeholder="e.g. मूछ में एक बाल कम"
                  value={form.specialId}
                  onChange={handleChange}
                  required
                />

                <button
                  type="button"
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className={`mt-3 flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 font-bold text-white transition ${
                    isGenerating
                      ? "cursor-not-allowed bg-black/50"
                      : "bg-[#171717] hover:-translate-y-0.5 hover:bg-black/90"
                  }`}
                >
                  {isGenerating ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Creating Paw-Adhar...
                    </>
                  ) : (
                    "Generate Paw-Adhar"
                  )}
                </button>

                <p className="text-center text-[10px] leading-4 text-black/35">
                  For entertainment purposes only. This is not an official
                  government identification document.
                </p>
              </div>
            </div>

            {/* LIVE PREVIEW */}
            <div className="lg:sticky lg:top-8 lg:self-start">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black">Live preview</h2>

                  <p className="text-sm text-black/40">
                    Your card updates as you type.
                  </p>
                </div>

                <div className="hidden items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-bold shadow-sm sm:flex">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Live
                </div>
              </div>

              <PetCard form={form} photo={photoPreview} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* -------------------------------- */
/* Input                            */
/* -------------------------------- */

function Input({ label, name, value, onChange, placeholder, type = "text" , required= {required}}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold">{label}</label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-black/10 bg-[#f5f3ed] px-4 py-3 text-sm outline-none transition placeholder:text-black/30 focus:border-[#d85b2c]"
      />
    </div>
  );
}

/* -------------------------------- */
/* Pet Card                         */
/* -------------------------------- */

function PetCard({ form, photo }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/15 bg-[#f7f4ed] shadow-[0_25px_70px_rgba(0,0,0,0.14)]">
      {/* stripes */}
      <div className="flex h-2">
        <div className="w-1/3 bg-[#e87532]" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-[#4f8d55]" />
      </div>

      {/* header */}
      <div className="px-4 pb-4 pt-5 sm:px-7">
        <div className="flex items-center justify-between gap-3">
          <div className="hidden text-center sm:block">
            <div className="text-3xl">🐾</div>

            <p className="text-[7px] font-bold uppercase">Pet Registry</p>
          </div>

          <div className="flex-1 text-center">
            <p className="text-lg font-black sm:text-2xl">भारत पेट पहचान</p>

            <p className="mt-0.5 text-sm font-bold">PET IDENTITY CARD</p>

            <div className="mx-auto mt-2 h-1 max-w-xs rounded-full bg-gradient-to-r from-[#e87532] via-white to-[#4f8d55]" />
          </div>

          <div className="text-center text-3xl">🐶</div>
        </div>
      </div>

      {/* body */}
      <div className="grid gap-5 px-4 pb-6 sm:grid-cols-[150px_1fr_120px] sm:px-7">
        {/* photo */}
        <div>
          <div className="aspect-[4/5] overflow-hidden rounded-sm border-2 border-black/60 bg-[#ddd8cc]">
            {photo ? (
              <img
                src={photo}
                alt="Pet"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-6xl">
                🐾
              </div>
            )}
          </div>

          <p className="mt-2 text-center text-[7px] font-bold text-black/60">
            फोटो / PHOTO
          </p>
        </div>

        {/* details */}
        <div className="space-y-3 text-xs sm:text-sm">
          <Detail label="नाम / Name" value={form.name || "Your Pet"} />

          <Detail
            label="जन्म तिथि / Date of Birth"
            value={form.dob || "DD / MM / YYYY"}
          />

          <Detail
            label="लिंग / Gender"
            value={form.gender || "Not specified"}
          />

          <Detail
            label="नस्ल / Breed"
            value={form.breed || "Your pet's breed"}
          />

          <Detail
            label="पता / Address"
            value={form.address || "Your pet's address"}
          />

          <div className="border-t border-black/20 pt-2">
            <p className="text-[8px] font-bold uppercase text-black/40">
              Special Identification
            </p>

            <p className="mt-1 font-bold">
              {form.specialId || "Something very suspicious"}
            </p>
          </div>
        </div>

        {/* QR */}
        <div className="flex flex-col items-center justify-between">
          <div className="text-center">
            <p className="text-[8px] font-bold text-[#9b4030]">Pet ID Number</p>

            <p className="mt-1 font-mono text-xs font-black">PAW-2026-BILLU</p>
          </div>

          <div className="mt-4 flex h-24 w-24 items-center justify-center border-2 border-black bg-white sm:h-28 sm:w-28">
            <QrCode size={75} strokeWidth={1.5} />
          </div>

          <div className="mt-3 text-center">
            <p className="text-lg italic">{form.name || "Pet"} 🐾</p>

            <div className="mx-auto mt-1 h-px w-20 bg-black/50" />

            <p className="text-[7px] text-black/50">हस्ताक्षर</p>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="border-t-2 border-[#9b4030] px-4 py-3 text-center">
        <p className="text-sm font-black sm:text-lg">मेरा ID, मेरी पहचान 🐾</p>
      </div>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <p className="text-[8px] font-bold uppercase text-black/40">{label}</p>

      <p className="font-semibold leading-5">{value}</p>
    </div>
  );
}
