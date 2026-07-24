"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Play, Pause, Music } from "lucide-react";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Royalty-free hiphop/drill style background audio stream / track
  const audioUrl = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=trap-future-bass-113576.mp3";

  useEffect(() => {
    const audio = new Audio(audioUrl);
    audio.loop = true;
    audio.volume = 0.25;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // autoplay blocked or network error
      });
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#1a1a1a]/90 backdrop-blur-xl border border-[#7C3AED]/30 shadow-xl shadow-black/80 group"
      >
        <button
          onClick={togglePlay}
          className="w-8 h-8 rounded-full bg-[#7C3AED] flex items-center justify-center text-white hover:scale-105 transition-transform shadow-md shadow-[#7C3AED]/40"
          title={isPlaying ? "Mettre en pause" : "Activer l'ambiance Drill"}
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
        </button>

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <Music size={12} className="text-[#A855F7] animate-pulse" />
            <span className="text-xs font-semibold text-white tracking-wide">
              DRILL AMBIANCE
            </span>
          </div>
          <span className="text-[10px] text-[#9ca3af]">
            {isPlaying ? "En cours de lecture" : "Cliquer pour lancer le son"}
          </span>
        </div>

        {isPlaying && (
          <div className="flex items-end gap-0.5 h-4 px-1">
            {[0.4, 0.8, 0.5, 0.9, 0.3].map((height, i) => (
              <motion.span
                key={i}
                className="w-1 bg-[#A855F7] rounded-full"
                animate={{ height: [4, 14, 6, 16, 4] }}
                transition={{
                  duration: 0.8 + i * 0.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}

        {isPlaying && (
          <button
            onClick={toggleMute}
            className="p-1 text-[#9ca3af] hover:text-white transition-colors"
            title={isMuted ? "Réactiver le son" : "Couper le son"}
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
        )}
      </motion.div>
    </div>
  );
}
