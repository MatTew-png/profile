import React from 'react';
import { motion } from 'framer-motion';

/**
 * Aceternity UI: Background Gradient
 * Creates a glowing iridescent animated border around cards and containers.
 */
export const BackgroundGradient = ({
  children,
  className = '',
  containerClassName = '',
  animate = true,
}) => {
  const variants = {
    initial: {
      backgroundPosition: '0 50%',
    },
    animate: {
      backgroundPosition: ['0, 50%', '100% 50%', '0 50%'],
    },
  };

  return (
    <div className={`relative p-[3px] group ${containerClassName}`}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
        }}
        className="absolute inset-0 rounded-[22px] z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#38bdf8,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#a855f7,transparent),radial-gradient(circle_farthest-side_at_0_0,#10b981,#14b8a6)]"
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? 'initial' : undefined}
        animate={animate ? 'animate' : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: 'reverse',
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? '400% 400%' : undefined,
        }}
        className="absolute inset-0 rounded-[22px] z-[1] will-change-transform bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#38bdf8,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#a855f7,transparent),radial-gradient(circle_farthest-side_at_0_0,#10b981,#14b8a6)]"
      />

      <div className={`relative z-10 rounded-[19px] overflow-hidden ${className}`}>
        {children}
      </div>
    </div>
  );
};
