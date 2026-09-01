import React, { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';

export const TextGenerateEffect = ({
  words,
  className = '',
  filter = true,
  duration = 0.5,
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(' ');

  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
        filter: filter ? 'blur(0px)' : 'none',
        y: 0,
      },
      {
        duration: duration ? duration : 0.5,
        delay: stagger(0.08),
      }
    );
  }, [scope.current]);

  return (
    <div className={`font-normal leading-relaxed ${className}`} ref={scope}>
      {wordsArray.map((word, idx) => {
        return (
          <motion.span
            key={word + idx}
            className="inline-block opacity-0 mr-1.5"
            style={{
              filter: filter ? 'blur(8px)' : 'none',
              transform: 'translateY(8px)',
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
};
