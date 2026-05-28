'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const WORDS = ['Design', 'Create', 'Inspire'];
const WORD_INTERVAL = 900;
const COUNTER_DURATION = 2700;
const COMPLETE_DELAY = 400;

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [counter, setCounter] = useState(0);
  const onCompleteRef = useRef(onComplete);

  // Keep onComplete ref updated to avoid stale closures
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Rotating words - stops at last word (no loop)
  useEffect(() => {
    if (wordIndex < WORDS.length - 1) {
      const timer = setInterval(() => {
        setWordIndex((prev) => prev + 1);
      }, WORD_INTERVAL);
      return () => clearInterval(timer);
    }
  }, [wordIndex]);

  // Counter animation using requestAnimationFrame
  useEffect(() => {
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / COUNTER_DURATION, 1);
      const value = progress * 100;

      setCounter(Math.round(value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Wait 400ms then call onComplete
        setTimeout(() => {
          onCompleteRef.current();
        }, COMPLETE_DELAY);
      }
    };

    const rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const progress = counter;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#0a0a0a]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Element 1: "Portfolio" Label (Top-Left) */}
      <motion.div
        className="absolute top-8 left-8 md:top-12 md:left-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <span className="text-xs md:text-sm text-[#888888] uppercase tracking-[0.3em]">
          Brilliance Dev
        </span>
      </motion.div>

      {/* Element 2: Rotating Words (Center) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-[#f5f5f5]/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Element 3: Counter (Bottom-Right) */}
      <motion.div
        className="absolute bottom-8 right-8 md:bottom-12 md:right-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <span className="text-6xl md:text-8xl lg:text-9xl font-display text-[#f5f5f5] tabular-nums">
          {Math.round(progress).toString().padStart(3, '0')}
        </span>
      </motion.div>

      {/* Element 4: Progress Bar (Bottom Edge) */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1f1f1f]/50">
        <motion.div
          className="h-full origin-left"
          style={{
            background: 'linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)',
            boxShadow: '0 0 8px rgba(137, 170, 204, 0.35)',
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          transition={{ duration: 0.1, ease: 'linear' }}
        />
      </div>
    </motion.div>
  );
};
