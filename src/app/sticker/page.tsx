import Image from "next/image";

export default function StickerPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <div className="text-center mb-8 absolute top-4">
        <h1 className="text-2xl font-bold text-gray-800">Preview Stiker Cetak</h1>
        <p className="text-gray-500 text-sm">Gunakan fitur Print di browser (Ctrl+P) dan hilangkan margin untuk mencetak.</p>
      </div>

      {/* Printable Area - A4 Size approx 210x297mm (Simulated with fixed size for preview) */}
      <div className="bg-white p-10 shadow-2xl flex flex-wrap gap-8 justify-center max-w-4xl">
        
        {/* We will loop a few stickers to show a printable sheet layout */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="relative w-64 h-64 rounded-full border border-gray-200 overflow-hidden flex flex-col items-center justify-center shadow-sm bg-white print:shadow-none print:border-none">
            
            {/* Wreath Decoration (using CSS gradients/shapes as placeholder for botanical theme) */}
            <div className="absolute inset-2 rounded-full border-2 border-dashed border-sage-300 opacity-50"></div>
            <div className="absolute inset-0 bg-sage-50/20 rounded-full"></div>
            
            {/* Decorative Leaves (Top & Bottom) */}
            <div className="absolute top-2 w-20 h-10 bg-[url('/images/ornament-tl.png')] bg-contain bg-no-repeat bg-center opacity-40"></div>
            <div className="absolute bottom-2 w-20 h-10 bg-[url('/images/ornament-br.png')] bg-contain bg-no-repeat bg-center opacity-40"></div>

            <div className="z-10 flex flex-col items-center w-full px-6">
              <h2 className="font-script text-3xl text-sage-800 mb-2 drop-shadow-sm leading-tight text-center">
                Selamat<br/>Menikmati
              </h2>
              
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-sage-300 mb-2 shadow-sm bg-sage-100">
                <Image src="/images/daffa.png" alt="Daffa" fill className="object-cover" />
              </div>

              <div className="text-center">
                <p className="font-sans font-bold text-[8px] tracking-wider text-sage-700 uppercase mb-0.5">Tasyakuran Khotmil Qur'an</p>
                <p className="font-script text-lg text-sage-600 leading-none mb-1">Daffa Ibnu Hafidz</p>
                <p className="font-sans font-medium text-[7px] text-sage-500 tracking-widest">26 Juli 2026</p>
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
