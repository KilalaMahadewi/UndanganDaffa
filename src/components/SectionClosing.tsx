"use client";
import { motion } from "framer-motion";

export default function SectionClosing() {
  return (
    <section className="py-24 px-6 relative bg-sage-800 text-sage-50 overflow-hidden text-center flex flex-col items-center justify-center min-h-[60vh]">
      <div className="absolute top-0 right-0 w-64 h-64 bg-sage-600/20 rounded-bl-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sage-700/30 rounded-tr-full blur-3xl" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-2xl mx-auto"
      >
        <p className="font-sans text-lg mb-8 leading-relaxed opacity-90">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada putra kami.
        </p>

        <h3 className="font-sans font-medium mb-12 opacity-90 uppercase tracking-widest text-sm">
          Terima Kasih
        </h3>

        <h2 className="font-script text-5xl md:text-6xl mb-8 text-sage-100">
          Wassalamualaikum Warahmatullahi Wabarakatuh
        </h2>

        <div className="mt-12 pt-8 border-t border-sage-600/50 inline-block px-12">
          <p className="text-sm opacity-80 mb-2 uppercase tracking-widest">Hormat Kami</p>
          <p className="font-medium text-lg">Bpk. Sismanto & Ibu Irma Santya Dewi</p>
        </div>
      </motion.div>
    </section>
  );
}
