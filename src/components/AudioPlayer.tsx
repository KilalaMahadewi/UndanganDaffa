"use client";
import { useState, useEffect, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { motion } from "framer-motion";

interface AudioPlayerProps {
  isPlaying: boolean;
  togglePlay: () => void;
}

export default function AudioPlayer({ isPlaying, togglePlay }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.log("Audio play error:", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src="/music/music.mp3" loop />
      <motion.button
        onClick={togglePlay}
        className="bg-sage-600 text-white p-3 rounded-full shadow-lg hover:bg-sage-700 transition-colors flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </motion.button>
    </div>
  );
}
