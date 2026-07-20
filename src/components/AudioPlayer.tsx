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
  const chorusStartTime = 28;

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const seekToChorus = () => {
      if (audio.currentTime < chorusStartTime - 1 || audio.currentTime > chorusStartTime + 1) {
        audio.currentTime = chorusStartTime;
      }
    };

    const handleCanPlay = () => {
      seekToChorus();
    };

    const handlePlay = () => {
      seekToChorus();
    };

    const handleEnded = () => {
      seekToChorus();
      if (isPlaying) {
        audio.play().catch(e => console.log("Audio play error:", e));
      }
    };

    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [isPlaying]);

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
      <audio
        ref={audioRef}
        src="/music/Inshad_Way_._Com_Maher_Zain_-_Baraka_Allahu_Lakuma_(mp3.pm).mp3"
      />
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
