import Image from "next/image";

// =====================
// SVG BOTANICAL COMPONENTS
// =====================

function WreathBorder() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* === TOP CLUSTER === */}
      {/* Large eucalyptus sprigs top-left */}
      <ellipse cx="95" cy="38" rx="18" ry="9" fill="#7C9473" opacity="0.75" transform="rotate(-35 95 38)" />
      <ellipse cx="78" cy="55" rx="16" ry="8" fill="#A8BCA1" opacity="0.70" transform="rotate(-50 78 55)" />
      <ellipse cx="115" cy="28" rx="14" ry="7" fill="#4A6741" opacity="0.65" transform="rotate(-20 115 28)" />
      <ellipse cx="65" cy="70" rx="15" ry="7" fill="#7C9473" opacity="0.60" transform="rotate(-65 65 70)" />
      <line x1="100" y1="40" x2="70" y2="75" stroke="#4A6741" strokeWidth="1.5" opacity="0.5" strokeLinecap="round"/>

      {/* Large eucalyptus sprigs top-right */}
      <ellipse cx="305" cy="38" rx="18" ry="9" fill="#7C9473" opacity="0.75" transform="rotate(35 305 38)" />
      <ellipse cx="322" cy="55" rx="16" ry="8" fill="#A8BCA1" opacity="0.70" transform="rotate(50 322 55)" />
      <ellipse cx="285" cy="28" rx="14" ry="7" fill="#4A6741" opacity="0.65" transform="rotate(20 285 28)" />
      <ellipse cx="335" cy="70" rx="15" ry="7" fill="#7C9473" opacity="0.60" transform="rotate(65 335 70)" />
      <line x1="300" y1="40" x2="330" y2="75" stroke="#4A6741" strokeWidth="1.5" opacity="0.5" strokeLinecap="round"/>

      {/* Top-center small leaves */}
      <ellipse cx="185" cy="18" rx="12" ry="6" fill="#A8BCA1" opacity="0.65" transform="rotate(-10 185 18)" />
      <ellipse cx="200" cy="14" rx="10" ry="5" fill="#7C9473" opacity="0.70" />
      <ellipse cx="215" cy="18" rx="12" ry="6" fill="#A8BCA1" opacity="0.65" transform="rotate(10 215 18)" />

      {/* === WHITE ANEMONE FLOWERS === */}
      {/* Flower top-left */}
      <circle cx="130" cy="42" r="14" fill="white" opacity="0.95" />
      <circle cx="130" cy="42" r="10" fill="white" opacity="0.9" />
      <circle cx="118" cy="42" r="9" fill="white" opacity="0.85" />
      <circle cx="142" cy="42" r="9" fill="white" opacity="0.85" />
      <circle cx="130" cy="30" r="9" fill="white" opacity="0.85" />
      <circle cx="130" cy="54" r="9" fill="white" opacity="0.85" />
      <circle cx="121" cy="33" r="8" fill="white" opacity="0.8" />
      <circle cx="139" cy="33" r="8" fill="white" opacity="0.8" />
      <circle cx="130" cy="42" r="5" fill="#3d5a3a" opacity="0.8" />
      <circle cx="130" cy="42" r="3" fill="#2a3d28" opacity="0.9" />

      {/* Flower top-right */}
      <circle cx="270" cy="42" r="14" fill="white" opacity="0.95" />
      <circle cx="270" cy="42" r="10" fill="white" opacity="0.9" />
      <circle cx="258" cy="42" r="9" fill="white" opacity="0.85" />
      <circle cx="282" cy="42" r="9" fill="white" opacity="0.85" />
      <circle cx="270" cy="30" r="9" fill="white" opacity="0.85" />
      <circle cx="270" cy="54" r="9" fill="white" opacity="0.85" />
      <circle cx="261" cy="33" r="8" fill="white" opacity="0.8" />
      <circle cx="279" cy="33" r="8" fill="white" opacity="0.8" />
      <circle cx="270" cy="42" r="5" fill="#3d5a3a" opacity="0.8" />
      <circle cx="270" cy="42" r="3" fill="#2a3d28" opacity="0.9" />

      {/* Flower top-center */}
      <circle cx="200" cy="30" r="11" fill="white" opacity="0.9" />
      <circle cx="200" cy="30" r="8" fill="white" opacity="0.85" />
      <circle cx="190" cy="30" r="7" fill="white" opacity="0.8" />
      <circle cx="210" cy="30" r="7" fill="white" opacity="0.8" />
      <circle cx="200" cy="20" r="7" fill="white" opacity="0.8" />
      <circle cx="200" cy="40" r="7" fill="white" opacity="0.8" />
      <circle cx="200" cy="30" r="4" fill="#3d5a3a" opacity="0.8" />
      <circle cx="200" cy="30" r="2.5" fill="#2a3d28" opacity="0.9" />

      {/* === LEFT SIDE === */}
      <ellipse cx="22" cy="155" rx="18" ry="8" fill="#7C9473" opacity="0.70" transform="rotate(-80 22 155)" />
      <ellipse cx="18" cy="135" rx="16" ry="7" fill="#A8BCA1" opacity="0.65" transform="rotate(-75 18 135)" />
      <ellipse cx="28" cy="175" rx="15" ry="7" fill="#4A6741" opacity="0.65" transform="rotate(-85 28 175)" />
      <ellipse cx="20" cy="200" rx="17" ry="8" fill="#7C9473" opacity="0.60" transform="rotate(90 20 200)" />
      <ellipse cx="25" cy="220" rx="14" ry="7" fill="#A8BCA1" opacity="0.65" transform="rotate(-88 25 220)" />
      <line x1="25" y1="130" x2="22" y2="230" stroke="#4A6741" strokeWidth="1.5" opacity="0.45" strokeLinecap="round"/>
      {/* Left small flower */}
      <circle cx="35" cy="200" r="10" fill="white" opacity="0.9" />
      <circle cx="35" cy="190" r="7" fill="white" opacity="0.85" />
      <circle cx="35" cy="210" r="7" fill="white" opacity="0.85" />
      <circle cx="25" cy="200" r="7" fill="white" opacity="0.85" />
      <circle cx="45" cy="200" r="7" fill="white" opacity="0.85" />
      <circle cx="35" cy="200" r="3.5" fill="#3d5a3a" opacity="0.8" />

      {/* === RIGHT SIDE === */}
      <ellipse cx="378" cy="155" rx="18" ry="8" fill="#7C9473" opacity="0.70" transform="rotate(80 378 155)" />
      <ellipse cx="382" cy="135" rx="16" ry="7" fill="#A8BCA1" opacity="0.65" transform="rotate(75 382 135)" />
      <ellipse cx="372" cy="175" rx="15" ry="7" fill="#4A6741" opacity="0.65" transform="rotate(85 372 175)" />
      <ellipse cx="380" cy="200" rx="17" ry="8" fill="#7C9473" opacity="0.60" transform="rotate(90 380 200)" />
      <ellipse cx="375" cy="220" rx="14" ry="7" fill="#A8BCA1" opacity="0.65" transform="rotate(88 375 220)" />
      <line x1="375" y1="130" x2="378" y2="230" stroke="#4A6741" strokeWidth="1.5" opacity="0.45" strokeLinecap="round"/>
      {/* Right small flower */}
      <circle cx="365" cy="200" r="10" fill="white" opacity="0.9" />
      <circle cx="365" cy="190" r="7" fill="white" opacity="0.85" />
      <circle cx="365" cy="210" r="7" fill="white" opacity="0.85" />
      <circle cx="355" cy="200" r="7" fill="white" opacity="0.85" />
      <circle cx="375" cy="200" r="7" fill="white" opacity="0.85" />
      <circle cx="365" cy="200" r="3.5" fill="#3d5a3a" opacity="0.8" />

      {/* === BOTTOM CLUSTER === */}
      <ellipse cx="95" cy="362" rx="18" ry="9" fill="#7C9473" opacity="0.75" transform="rotate(35 95 362)" />
      <ellipse cx="78" cy="345" rx="16" ry="8" fill="#A8BCA1" opacity="0.70" transform="rotate(50 78 345)" />
      <ellipse cx="115" cy="372" rx="14" ry="7" fill="#4A6741" opacity="0.65" transform="rotate(20 115 372)" />
      <ellipse cx="65" cy="330" rx="15" ry="7" fill="#7C9473" opacity="0.60" transform="rotate(65 65 330)" />

      <ellipse cx="305" cy="362" rx="18" ry="9" fill="#7C9473" opacity="0.75" transform="rotate(-35 305 362)" />
      <ellipse cx="322" cy="345" rx="16" ry="8" fill="#A8BCA1" opacity="0.70" transform="rotate(-50 322 345)" />
      <ellipse cx="285" cy="372" rx="14" ry="7" fill="#4A6741" opacity="0.65" transform="rotate(-20 285 372)" />
      <ellipse cx="335" cy="330" rx="15" ry="7" fill="#7C9473" opacity="0.60" transform="rotate(-65 335 330)" />

      {/* Bottom center leaves */}
      <ellipse cx="185" cy="382" rx="12" ry="6" fill="#A8BCA1" opacity="0.65" transform="rotate(10 185 382)" />
      <ellipse cx="200" cy="386" rx="10" ry="5" fill="#7C9473" opacity="0.70" />
      <ellipse cx="215" cy="382" rx="12" ry="6" fill="#A8BCA1" opacity="0.65" transform="rotate(-10 215 382)" />

      {/* Bottom flowers */}
      <circle cx="130" cy="358" r="12" fill="white" opacity="0.9" />
      <circle cx="130" cy="348" r="8" fill="white" opacity="0.85" />
      <circle cx="130" cy="368" r="8" fill="white" opacity="0.85" />
      <circle cx="120" cy="358" r="8" fill="white" opacity="0.85" />
      <circle cx="140" cy="358" r="8" fill="white" opacity="0.85" />
      <circle cx="130" cy="358" r="4" fill="#3d5a3a" opacity="0.8" />
      <circle cx="130" cy="358" r="2.5" fill="#2a3d28" opacity="0.9" />

      <circle cx="270" cy="358" r="12" fill="white" opacity="0.9" />
      <circle cx="270" cy="348" r="8" fill="white" opacity="0.85" />
      <circle cx="270" cy="368" r="8" fill="white" opacity="0.85" />
      <circle cx="260" cy="358" r="8" fill="white" opacity="0.85" />
      <circle cx="280" cy="358" r="8" fill="white" opacity="0.85" />
      <circle cx="270" cy="358" r="4" fill="#3d5a3a" opacity="0.8" />
      <circle cx="270" cy="358" r="2.5" fill="#2a3d28" opacity="0.9" />

      {/* === DECORATIVE STEM LINES === */}
      <path d="M 60 75 Q 40 150 30 250" stroke="#4A6741" strokeWidth="1.2" fill="none" opacity="0.35" strokeLinecap="round"/>
      <path d="M 340 75 Q 360 150 370 250" stroke="#4A6741" strokeWidth="1.2" fill="none" opacity="0.35" strokeLinecap="round"/>
      <path d="M 90 360 Q 150 375 200 382 Q 250 375 310 360" stroke="#4A6741" strokeWidth="1.2" fill="none" opacity="0.35" strokeLinecap="round"/>
      <path d="M 90 40 Q 150 25 200 20 Q 250 25 310 40" stroke="#4A6741" strokeWidth="1.2" fill="none" opacity="0.35" strokeLinecap="round"/>

      {/* Berry accents */}
      <circle cx="55" cy="110" r="4" fill="#7C9473" opacity="0.75" />
      <circle cx="48" cy="122" r="3.5" fill="#A8BCA1" opacity="0.7" />
      <circle cx="62" cy="120" r="3" fill="#4A6741" opacity="0.65" />
      <circle cx="345" cy="110" r="4" fill="#7C9473" opacity="0.75" />
      <circle cx="352" cy="122" r="3.5" fill="#A8BCA1" opacity="0.7" />
      <circle cx="338" cy="120" r="3" fill="#4A6741" opacity="0.65" />
      <circle cx="55" cy="290" r="4" fill="#7C9473" opacity="0.65" />
      <circle cx="48" cy="278" r="3.5" fill="#A8BCA1" opacity="0.6" />
      <circle cx="345" cy="290" r="4" fill="#7C9473" opacity="0.65" />
      <circle cx="352" cy="278" r="3.5" fill="#A8BCA1" opacity="0.6" />
    </svg>
  );
}

export default function StickerPage() {
  const stickers = [1, 2, 3, 4, 5, 6];

  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center py-12 gap-8 print:bg-white">
      <div className="text-center print:hidden">
        <h1 className="text-2xl font-bold text-gray-700 mb-1">Preview Stiker Hampers</h1>
        <p className="text-gray-500 text-sm">Tekan <strong>Ctrl+P</strong> → <strong>Save as PDF</strong> → bawa ke percetakan untuk cetak die-cut bulat.</p>
      </div>

      {/* Print Sheet */}
      <div className="bg-white shadow-2xl p-8 grid grid-cols-3 gap-6 max-w-3xl print:shadow-none print:p-2 print:gap-4">
        {stickers.map((item) => (
          <div
            key={item}
            className="relative w-56 h-56 rounded-full overflow-hidden flex flex-col items-center justify-center"
            style={{ background: "#FAF8F4" }}
          >
            {/* Outer double ring */}
            <div className="absolute inset-0 rounded-full border-2 border-sage-200 opacity-50 z-10 pointer-events-none" />
            <div className="absolute inset-1 rounded-full border border-dashed border-sage-300 opacity-30 z-10 pointer-events-none" />

            {/* Botanical Wreath */}
            <WreathBorder />

            {/* Content */}
            <div className="z-20 flex flex-col items-center justify-center w-full px-10 gap-1">
              {/* Title */}
              <p className="font-script text-xl text-sage-800 text-center leading-tight drop-shadow-sm">
                Selamat Menikmati
              </p>

              {/* Photo circle with inner leaf ring */}
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-[3px] border-sage-400 shadow-md bg-sage-100 flex-shrink-0">
                <Image
                  src="/images/daffa.png"
                  alt="Daffa Ibnu Hafidz"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Text below photo */}
              <div className="text-center flex flex-col gap-0.5">
                <p className="font-sans font-bold text-[6.5px] tracking-[0.15em] text-sage-600 uppercase">
                  Tasyakuran Khotmil Qur'an
                </p>
                <p className="font-script text-[15px] text-sage-800 leading-none">
                  Daffa Ibnu Hafidz
                </p>
                <p className="font-sans text-[6px] tracking-widest text-sage-500">
                  26 Juli 2026
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
