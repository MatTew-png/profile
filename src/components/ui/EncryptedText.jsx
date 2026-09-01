import React, { useState, useEffect, useRef } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~|}{[]:;?><';

export const EncryptedText = ({
  text,
  className = '',
  triggerOnHover = true,
  revealSpeed = 35,
  scrambleRounds = 3,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef(null);

  const startScramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);
    let iteration = 0;
    const maxIterations = text.length * scrambleRounds;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((letter, index) => {
            if (letter === ' ') return ' ';
            if (index < iteration / scrambleRounds) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );

      iteration += 1;
      if (iteration >= maxIterations) {
        clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsScrambling(false);
      }
    }, revealSpeed);
  };

  useEffect(() => {
    startScramble();
    return () => clearInterval(intervalRef.current);
  }, [text]);

  return (
    <span
      className={`font-mono cursor-pointer transition-colors ${className}`}
      onMouseEnter={triggerOnHover ? startScramble : undefined}
      title="Hover to re-scramble"
    >
      {displayText}
    </span>
  );
};
