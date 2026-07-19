"use client";
import { useState, useEffect } from "react";
import OpeningScreen from "@/components/OpeningScreen";
import FloatingLeaves from "@/components/FloatingLeaves";
import AudioPlayer from "@/components/AudioPlayer";
import SectionSalam from "@/components/SectionSalam";
import SectionProfile from "@/components/SectionProfile";
import SectionEvent from "@/components/SectionEvent";
import SectionLocation from "@/components/SectionLocation";
import SectionClosing from "@/components/SectionClosing";

function MainContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <main className="relative">
      <OpeningScreen onOpen={handleOpen} isOpen={isOpen} />
      
      {isOpen && (
        <>
          <FloatingLeaves />
          <AudioPlayer isPlaying={isPlaying} togglePlay={togglePlay} />
          
          <div className="relative z-10">
            <SectionSalam />
            <SectionProfile />
            <SectionEvent />
            <SectionLocation />
            <SectionClosing />
          </div>
        </>
      )}
    </main>
  );
}

export default function Home() {
  return <MainContent />;
}
