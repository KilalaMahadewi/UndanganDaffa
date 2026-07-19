import Image from "next/image";

function LeafSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 10 C20 30, 5 60, 15 90 C25 110, 55 110, 65 90 C75 60, 60 30, 40 10Z" fill="#7C9473" opacity="0.6"/>
      <path d="M40 10 C40 50, 40 80, 25 105" stroke="#4A6741" strokeWidth="1.5" opacity="0.5" strokeLinecap="round"/>
      <path d="M40 35 C30 38, 22 45, 20 55" stroke="#4A6741" strokeWidth="0.8" opacity="0.4" strokeLinecap="round"/>
      <path d="M40 50 C50 53, 58 60, 60 70" stroke="#4A6741" strokeWidth="0.8" opacity="0.4" strokeLinecap="round"/>
    </svg>
  );
}

function SmallLeafSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 5 C10 20, 3 45, 10 65 C18 78, 32 78, 40 65 C47 45, 40 20, 25 5Z" fill="#A8BCA1" opacity="0.7"/>
      <path d="M25 5 C25 35, 24 55, 15 72" stroke="#7C9473" strokeWidth="1" opacity="0.5" strokeLinecap="round"/>
    </svg>
  );
}

function FlowerSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="15" rx="6" ry="12" fill="white" opacity="0.9"/>
      <ellipse cx="45" cy="30" rx="12" ry="6" fill="white" opacity="0.9"/>
      <ellipse cx="30" cy="45" rx="6" ry="12" fill="white" opacity="0.9"/>
      <ellipse cx="15" cy="30" rx="12" ry="6" fill="white" opacity="0.9"/>
      <ellipse cx="41" cy="19" rx="6" ry="12" fill="white" opacity="0.8" transform="rotate(45 41 19)"/>
      <ellipse cx="41" cy="41" rx="6" ry="12" fill="white" opacity="0.8" transform="rotate(-45 41 41)"/>
      <ellipse cx="19" cy="41" rx="6" ry="12" fill="white" opacity="0.8" transform="rotate(45 19 41)"/>
      <ellipse cx="19" cy="19" rx="6" ry="12" fill="white" opacity="0.8" transform="rotate(-45 19 19)"/>
      <circle cx="30" cy="30" r="7" fill="#F0E68C" opacity="0.9"/>
      <circle cx="30" cy="30" r="4" fill="#DAA520" opacity="0.7"/>
    </svg>
  );
}

function BerryBranchSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 70 C30 50, 50 40, 80 20" stroke="#7C9473" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
      <path d="M30 55 C35 45, 45 40, 55 35" stroke="#A8BCA1" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <circle cx="80" cy="20" r="5" fill="#7C9473" opacity="0.8"/>
      <circle cx="70" cy="14" r="4" fill="#A8BCA1" opacity="0.8"/>
      <circle cx="88" cy="13" r="3.5" fill="#4A6741" opacity="0.7"/>
      <circle cx="60" cy="28" r="3" fill="#7C9473" opacity="0.6"/>
      <circle cx="55" cy="20" r="4" fill="#A8BCA1" opacity="0.7"/>
    </svg>
  );
}

export default function StickerPage() {
  const stickers = [1, 2, 3, 4, 5, 6];

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center py-12 print:bg-white">
      <div className="mb-8 text-center print:hidden">
        <h1 className="text-2xl font-bold text-gray-700 mb-1">Preview Stiker Cetak Hampers</h1>
        <p className="text-gray-500 text-sm">Tekan <strong>Ctrl+P</strong> lalu pilih <strong>"Save as PDF"</strong> atau langsung ke printer. Hilangkan header/footer agar bersih.</p>
      </div>

      <div className="bg-white shadow-2xl p-10 grid grid-cols-3 gap-8 max-w-3xl print:shadow-none print:p-4">
        {stickers.map((item) => (
          <div key={item} className="relative w-52 h-52 rounded-full overflow-hidden flex flex-col items-center justify-center shadow-md bg-white print:shadow-none">

            {/* Background soft gradient */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sage-50 via-white to-sage-100" />

            {/* Outer ring */}
            <div className="absolute inset-1 rounded-full border border-sage-300 opacity-60" />
            <div className="absolute inset-2 rounded-full border border-dashed border-sage-200 opacity-40" />

            {/* === BOTANICAL DECORATIONS === */}

            {/* Big leaf top-left */}
            <LeafSVG className="absolute -top-3 -left-2 w-14 h-14 rotate-[130deg]" />
            {/* Big leaf top-right */}
            <LeafSVG className="absolute -top-3 -right-2 w-12 h-12 rotate-[220deg]" />

            {/* Small leaves bottom */}
            <SmallLeafSVG className="absolute -bottom-2 left-4 w-8 h-10 rotate-[40deg]" />
            <SmallLeafSVG className="absolute -bottom-2 right-4 w-7 h-9 rotate-[-40deg]" />

            {/* Extra leaves on sides */}
            <SmallLeafSVG className="absolute top-10 -left-3 w-7 h-9 rotate-[100deg]" />
            <SmallLeafSVG className="absolute top-10 -right-3 w-7 h-9 rotate-[-100deg]" />

            {/* Berry branches */}
            <BerryBranchSVG className="absolute top-1 left-3 w-16 h-12 rotate-[-20deg]" />
            <BerryBranchSVG className="absolute top-1 right-0 w-16 h-12 rotate-[200deg] scale-x-[-1]" />

            {/* Flower top-center */}
            <FlowerSVG className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-8" />

            {/* Flowers on sides */}
            <FlowerSVG className="absolute top-16 -left-2 w-6 h-6 opacity-80" />
            <FlowerSVG className="absolute top-16 -right-2 w-6 h-6 opacity-80" />

            {/* Small accent leaves scattered */}
            <SmallLeafSVG className="absolute top-4 left-8 w-4 h-6 rotate-[60deg] opacity-50" />
            <SmallLeafSVG className="absolute top-4 right-8 w-4 h-6 rotate-[-60deg] opacity-50" />

            {/* === CONTENT === */}
            <div className="z-10 flex flex-col items-center w-full px-5 pt-4">
              <h2 className="font-script text-2xl text-sage-800 leading-tight text-center drop-shadow-sm mb-1">
                Selamat Menikmati
              </h2>

              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-sage-300 shadow-sm bg-sage-100 mb-1.5">
                <Image src="/images/daffa.png" alt="Daffa Ibnu Hafidz" fill className="object-cover" />
              </div>

              <div className="text-center">
                <p className="font-sans font-bold text-[7px] tracking-widest text-sage-600 uppercase mb-0.5">Tasyakuran Khotmil Qur'an</p>
                <p className="font-script text-base text-sage-800 leading-none mb-0.5">Daffa Ibnu Hafidz</p>
                <p className="font-sans font-medium text-[6.5px] text-sage-500 tracking-wider">26 Juli 2026</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
