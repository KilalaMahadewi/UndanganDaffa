"use client";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export default function SectionEvent() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    // 26 Juli 2026 10:00:00 WIB
    const targetDate = new Date("2026-07-26T10:00:00+07:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-script text-5xl text-sage-800 mb-4">Waktu & Tempat</h2>
          <p className="text-sage-600">Acara akan diselenggarakan pada:</p>
        </motion.div>

        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-sage-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sage-200/50 rounded-bl-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-sage-300/30 rounded-tr-full blur-2xl" />

          <div className="grid md:grid-cols-2 gap-10 relative z-10">
            <div className="flex flex-col gap-8 justify-center">
              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
              >
                <div className="bg-sage-100 p-3 rounded-full text-sage-600">
                  <Calendar size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-sage-800 text-lg mb-1">Tanggal</h3>
                  <p className="text-sage-600">Minggu, 26 Juli 2026</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
              >
                <div className="bg-sage-100 p-3 rounded-full text-sage-600">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-sage-800 text-lg mb-1">Waktu</h3>
                  <p className="text-sage-600">10.00 WIB - Selesai</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ x: 5 }}
              >
                <div className="bg-sage-100 p-3 rounded-full text-sage-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-sage-800 text-lg mb-1">Tempat</h3>
                  <p className="text-sage-600 leading-relaxed">
                    Rumah Kami<br />
                    Johorejo 03/02, Gemuh, Kendal
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col justify-center items-center border-t md:border-t-0 md:border-l border-sage-200 pt-10 md:pt-0 md:pl-10">
              <h3 className="font-sans font-semibold text-sage-700 mb-6 text-center tracking-widest uppercase text-sm">Menuju Hari Bahagia</h3>
              <div className="grid grid-cols-4 gap-2 md:gap-4 w-full">
                {timeBlocks.map((block, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <motion.div 
                      key={block.value}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="bg-sage-600 text-white w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg mb-2"
                    >
                      {block.value.toString().padStart(2, '0')}
                    </motion.div>
                    <span className="text-[10px] sm:text-xs text-sage-500 uppercase tracking-wider font-semibold">{block.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
