"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingLeaves() {
  const [leaves, setLeaves] = useState<Array<{ id: number; left: number; duration: number; delay: number; size: number }>>([]);

  useEffect(() => {
    const newLeaves = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      size: Math.random() * 20 + 20,
    }));
    setLeaves(newLeaves);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute top-[-50px] opacity-40"
          style={{ left: `${leaf.left}%` }}
          animate={{
            y: ["0vh", "110vh"],
            rotate: [0, 360],
            x: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div 
            className="bg-sage-400 rounded-tl-full rounded-br-full opacity-60 blur-[1px]"
            style={{ width: leaf.size, height: leaf.size }}
          />
        </motion.div>
      ))}
    </div>
  );
}
