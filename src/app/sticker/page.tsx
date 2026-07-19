import Image from "next/image";

export default function StickerPage() {
  const stickers = [1, 2, 3, 4, 5, 6];

  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center justify-center py-12 gap-8 print:bg-white">
      <div className="text-center print:hidden">
        <h1 className="text-2xl font-bold text-gray-700 mb-1">Preview Stiker Hampers</h1>
        <p className="text-gray-500 text-sm">
          Tekan <strong>Ctrl+P</strong> → <strong>Save as PDF</strong> → bawa ke percetakan untuk cetak die-cut bulat.
        </p>
      </div>

      {/* Print Sheet */}
      <div className="bg-white shadow-2xl p-8 grid grid-cols-3 gap-4 max-w-3xl print:shadow-none print:p-2">
        {stickers.map((item) => (
          <div
            key={item}
            className="relative w-56 h-56 rounded-full overflow-hidden flex flex-col items-center justify-center"
          >
            {/* Layer 1: Botanical border watercolor image (background) */}
            <Image
              src="/images/stiker_border.png"
              alt="Border Botanical"
              fill
              className="object-cover"
              priority
            />

            {/* Layer 2: Content overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-8">
              {/* Title - Selamat Menikmati */}
              <p className="font-script text-[22px] leading-tight text-center text-[#2c4a28] drop-shadow-sm mb-1">
                Selamat<br />Menikmati
              </p>

              {/* Photo circle - Foto Daffa asli */}
              <div className="relative w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0 mb-1">
                <Image
                  src="/images/daffa.png"
                  alt="Daffa Ibnu Hafidz"
                  fill
                  className="object-cover object-top scale-110"
                />
              </div>

              {/* Text below photo */}
              <div className="text-center flex flex-col items-center gap-0.5">
                <p className="font-sans font-semibold text-[6px] tracking-[0.18em] text-[#4A6741] uppercase">
                  Tasyakuran Khotmil Qur'an
                </p>
                <p className="font-script text-[14px] text-[#2c4a28] leading-none">
                  Daffa Ibnu Hafidz
                </p>
                <p className="font-sans text-[5.5px] tracking-widest text-[#7C9473]">
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
