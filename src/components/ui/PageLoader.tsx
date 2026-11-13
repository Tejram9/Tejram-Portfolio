import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const PageLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-void flex flex-col items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <motion.div
            className="font-display text-5xl text-white tracking-tightest"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            TEJRAM<span className="text-lime-acid">.</span>
          </motion.div>
          <motion.div
            className="mt-6 w-32 h-px bg-charcoal overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="h-full bg-lime-acid"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
