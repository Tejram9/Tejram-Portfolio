import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDevicePerformance } from '../../hooks/useDevicePerformance';

export const PageLoader: React.FC = () => {
  const { prefersReducedMotion } = useDevicePerformance();
  const [loading, setLoading] = useState(!prefersReducedMotion);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    if (prefersReducedMotion) {
      setLoading(false);
      return;
    }

    const timer1 = setTimeout(() => setProgress(65), 120);
    const timer2 = setTimeout(() => setProgress(100), 300);
    const timer3 = setTimeout(() => setLoading(false), 520);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="fixed top-0 left-0 right-0 z-[100] flex flex-col items-center justify-center pointer-events-none py-2 px-4 bg-space-950/95 backdrop-blur-md border-b border-amber-500/30"
        >
          <div className="flex items-center justify-between w-full max-w-7xl font-mono text-[10px] text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              <span className="text-slate-200 font-semibold tracking-wider">
                TEJRAM_DUDHAPACHARE // SYSTEM_INIT
              </span>
              <span className="hidden sm:inline text-slate-500">• SSGMCE 2026</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-amber-400 font-bold">{progress}%</span>
              <div className="w-20 sm:w-28 h-1 bg-space-900 rounded-full overflow-hidden border border-slate-800">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-200 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
