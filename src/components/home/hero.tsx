"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";
import { Play, MessageCircle, ChevronDown, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/config";
import { ServerBadge } from "@/components/shared/server-badge";
import { HeroBackground } from "@/components/home/hero-background";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const smokeRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!smokeRef.current) return;
    const particles = smokeRef.current.querySelectorAll(".smoke-particle");
    particles.forEach((particle, i) => {
      gsap.to(particle, {
        x: `random(${-200}, ${200})`,
        y: `random(${-100}, ${-300})`,
        opacity: 0,
        scale: gsap.utils.random(0.5, 2),
        duration: gsap.utils.random(4, 8),
        repeat: -1,
        delay: i * 0.3,
        ease: "power1.out",
      });
    });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const h = window.innerHeight;
      if (scrollY > h) return;
      const factor = scrollY / h;
      if (bgRef.current) bgRef.current.style.transform = `translateY(${factor * -40}px)`;
      if (contentRef.current) contentRef.current.style.transform = `translateY(${factor * 60}px)`;
      if (contentRef.current) contentRef.current.style.opacity = `${1 - factor * 1.2}`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div ref={bgRef} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/20 to-transparent z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/images/hero-poster.jpg"
          onError={(e) => { (e.target as HTMLVideoElement).style.display = "none"; }}
        >
          <source src={siteConfig.hero.videoBg} type="video/mp4" />
        </video>
        <HeroBackground />
      </div>

      {/* Smoke Effect */}
      <div
        ref={smokeRef}
        className="absolute inset-0 z-20 pointer-events-none"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="smoke-particle absolute bottom-0 left-1/2 w-32 h-32 bg-gradient-to-t from-[#7C3AED]/10 to-transparent rounded-full blur-3xl"
            style={{
              left: `${10 + i * 8}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Particles */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => {
          const left = 10 + (i * 3.2) % 90;
          const top = 10 + (i * 5.7) % 80;
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#7C3AED]/30 rounded-full"
              animate={{
                y: [0, -(30 + (i % 20) * 5)],
                x: [0, (i % 2 === 0 ? 1 : -1) * (20 + (i % 10) * 5)],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 5 + (i % 10),
                repeat: Infinity,
                delay: i * 0.3,
                ease: "linear",
              }}
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-30 text-center max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-[#7C3AED] rounded-full opacity-30 blur-3xl animate-pulse" />
            <img
              src={siteConfig.logo}
              alt={siteConfig.siteName}
              className="relative w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] tracking-wider mb-6 neon-text uppercase"
        >
          {siteConfig.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-[#9ca3af] mb-8 max-w-2xl mx-auto"
        >
          {siteConfig.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <ServerBadge variant="hero" showDiscord />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href={`fivem://connect/${siteConfig.server.cfx}`}>
            <Button
              variant="premium"
              size="xl"
              className="text-base min-w-[240px] group animate-glow-pulse font-bold tracking-wider"
              style={{
                background: "linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)",
              }}
            >
              <Play className="fill-current text-white" />
              LANCER FIVEM (1-CLIC)
            </Button>
          </a>
          <Link href={siteConfig.discord.inviteUrl} target="_blank">
            <Button
              variant="outline"
              size="xl"
              className="text-base min-w-[220px] group border-[#5865F2]/50 hover:bg-[#5865F2]/20 text-white"
            >
              <MessageCircle className="text-[#5865F2]" />
              REJOINDRE LE DISCORD
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="animate-bounce text-[#7C3AED]" size={32} />
        </motion.div>
      </div>
    </section>
  );
}
