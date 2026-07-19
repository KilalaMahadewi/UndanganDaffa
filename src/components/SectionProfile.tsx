"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SectionProfile() {
  return (
    <section className="py-20 px-6 bg-sage-100/50 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto flex flex-col items-center text-center"
      >
        <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl mb-8 flex items-center justify-center bg-sage-200">
          <Image src="/images/daffa.png" alt="Daffa Ibnu Hafidz" fill className="object-cover" />
        </div>

        <h1 className="font-script text-6xl md:text-7xl text-sage-800 mb-4 drop-shadow-sm">
          Daffa Ibnu Hafidz
        </h1>

        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-[1px] bg-sage-400" />
          <p className="text-sage-500 text-sm uppercase tracking-widest">Putra Dari</p>
          <div className="w-12 h-[1px] bg-sage-400" />
        </div>

        <p className="font-sans text-xl text-sage-700 font-medium">
          Bpk. Sismanto & Ibu Irma Santya Dewi
        </p>
      </motion.div>
    </section>
  );
}
