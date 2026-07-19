"use client";
import { motion } from "framer-motion";

export default function SectionSalam() {
  return (
    <section className="py-20 px-6 min-h-[60vh] flex flex-col justify-center items-center text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="font-script text-4xl md:text-5xl text-sage-800 mb-8">
          Assalamualaikum Warahmatullahi Wabarakatuh
        </h2>
        
        <div className="mb-8 relative py-8 px-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[1px] bg-sage-400" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[1px] bg-sage-400" />
          
          <p className="font-sans text-lg text-sage-700 leading-relaxed mb-6 font-medium italic">
            "Dan sesungguhnya telah Kami mudahkan Al-Quran untuk pelajaran, maka adakah orang yang mengambil pelajaran?"
          </p>
          <p className="font-sans text-sm text-sage-500 font-bold uppercase tracking-widest">
            (QS. Al-Qamar: 17)
          </p>
        </div>

        <p className="text-sage-600 leading-relaxed">
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan acara Tasyakuran Khotmil Qur'an putra kami.
        </p>
      </motion.div>
    </section>
  );
}
