"use client";
import { motion } from "framer-motion";
import { Map } from "lucide-react";

export default function SectionLocation() {
  return (
    <section className="py-20 px-6 bg-sage-50 relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-script text-5xl text-sage-800 mb-4">Peta Lokasi</h2>
          <p className="text-sage-600">Alamat lengkap lokasi acara:</p>
        </motion.div>

        <motion.div 
          className="w-full h-80 md:h-[400px] rounded-3xl overflow-hidden shadow-xl border-4 border-white relative z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.435777490212!2d110.1118126!3d-6.907579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e705b637f90c371%3A0xc6fb694a919318de!2sJohorejo%2C%20Gemuh%2C%20Kendal%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-[20%] contrast-[90%]"
          ></iframe>
        </motion.div>

        <motion.a
          href="https://maps.app.goo.gl/gfNiV4omuDbD3Rdq9?g_st=aw"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 flex items-center gap-2 bg-sage-600 text-white px-8 py-3.5 rounded-full shadow-lg hover:bg-sage-700 hover:shadow-xl transition-all"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Map size={20} />
          Buka di Google Maps
        </motion.a>
      </div>
    </section>
  );
}
