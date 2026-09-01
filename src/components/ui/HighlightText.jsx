import React from 'react';
import { motion } from 'framer-motion';

export const HighlightText = ({
  children,
  className = '',
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: '0% 100%',
      }}
      animate={{
        backgroundSize: '100% 100%',
      }}
      transition={{
        duration: 1.2,
        ease: 'linear',
        delay: 0.3,
      }}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        display: 'inline',
      }}
      className={`relative inline-block pb-0.5 px-1.5 rounded-sm bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-cyan font-semibold ${className}`}
    >
      {children}
    </motion.span>
  );
};
