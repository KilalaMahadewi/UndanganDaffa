"use client";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen } from "lucide-react";
import Image from "next/image";

interface OpeningScreenProps {
  onOpen: () => void;
  isOpen: boolean;
}

export default function OpeningScreen({ onOpen, isOpen }: OpeningScreenProps) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-sage-50 overflow-hidden"
          initial={{ y: 0 }}
          exit={{ y: "-100vh", opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Top-left botanical ornament placeholder */}
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-sage-200/30 rounded-full blur-3xl" />
          {/* Bottom-right botanical ornament placeholder */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-sage-300/30 rounded-full blur-3xl" />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center z-10 p-6 flex flex-col items-center w-full max-w-md"
          >
            <h2 className="font-sans text-sage-600 tracking-[0.3em] uppercase text-xs font-semibold mb-4">Undangan</h2>
            <h1 className="font-script text-5xl md:text-6xl text-sage-700 mb-8 drop-shadow-sm">Tasyakuran Khotmil Qur'an</h1>
            
            <motion.div 
              className="relative w-52 h-52 rounded-full overflow-hidden border-8 border-white shadow-xl mb-12 flex items-center justify-center bg-sage-200 ring-4 ring-sage-100"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src="/images/daffa.png" alt="Daffa Ibnu Hafidz" fill className="object-cover" priority />
            </motion.div>

            <motion.button
              onClick={onOpen}
              className="flex items-center gap-2 bg-sage-600 text-white px-8 py-3.5 rounded-full shadow-lg hover:bg-sage-700 hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen size={20} />
              Buka Undangan
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
