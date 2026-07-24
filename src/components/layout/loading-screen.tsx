"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/config";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const maxWait = 5000;

    const waitForReady = async () => {
      const minDisplay = 1200;
      const start = Date.now();

      // wait for document fully loaded
      if (document.readyState !== "complete") {
        await new Promise<void>((resolve) => {
          const onReady = () => { document.removeEventListener("readystatechange", onReady); resolve(); };
          document.addEventListener("readystatechange", onReady);
        });
      }

      // wait a frame for React hydration
      await new Promise(requestAnimationFrame);

      const elapsed = Date.now() - start;

      // ensure minimum display time
      if (elapsed < minDisplay) {
        await new Promise((r) => setTimeout(r, minDisplay - elapsed));
      }

      if (!cancelled) setIsLoading(false);
    };

    // safety timeout: never exceed maxWait
    const safety = setTimeout(() => {
      if (!cancelled) setIsLoading(false);
    }, maxWait);

    waitForReady().then(() => clearTimeout(safety));

    return () => { cancelled = true; clearTimeout(safety); };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a]"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#7C3AED] rounded-full opacity-20 blur-3xl animate-pulse" />
            <img
              src={siteConfig.logo}
              alt={siteConfig.siteName}
              className="relative w-24 h-24 md:w-32 md:h-32 object-contain"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold tracking-widest mt-6 neon-text"
          >
            {siteConfig.logoText}
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            transition={{ delay: 0.6, duration: 1.5, ease: "easeInOut" }}
            className="h-[2px] bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent mt-6 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-[#9ca3af] text-sm mt-4 tracking-wider"
          >
            CHARGEMENT...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
