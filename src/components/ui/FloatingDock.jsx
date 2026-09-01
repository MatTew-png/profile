import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

/**
 * Aceternity UI: Floating Dock
 * macOS-style floating dock with interactive magnification physics on mouse hover.
 */
export const FloatingDock = ({
  items,
  desktopClassName = '',
  mobileClassName = '',
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({ items, className = '' }) => {
  return (
    <div className={`fixed bottom-4 right-4 z-[999] md:hidden ${className}`}>
      <div className="flex items-center gap-2 p-2 rounded-full glass-panel border border-white/10 shadow-2xl backdrop-blur-xl bg-slate-950/80">
        {items.map((item) => (
          <a
            key={item.title}
            href={item.href}
            onClick={item.onClick}
            target={item.target}
            rel={item.rel}
            aria-label={item.title}
            className="w-10 h-10 rounded-full flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:bg-white/10 transition-colors"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

const FloatingDockDesktop = ({ items, className = '' }) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] hidden md:flex items-end gap-3 px-4 py-3 rounded-2xl glass-panel border border-white/15 shadow-2xl backdrop-blur-2xl bg-slate-950/75 hover:border-cyan-500/40 transition-colors ${className}`}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({ mouseX, title, icon, href, onClick, target, rel }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [42, 64, 42]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [42, 64, 42]);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 32, 20]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 32, 20]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex items-center justify-center rounded-xl bg-white/[0.06] border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.12] text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer"
    >
      <motion.div
        style={{ width, height }}
        className="flex items-center justify-center"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: 2, x: '-50%' }}
              className="px-2.5 py-1 whitespace-pre rounded-md bg-slate-900 border border-white/20 text-white font-mono text-[11px] font-medium absolute -top-8 left-1/2 -translate-x-1/2 w-fit shadow-xl pointer-events-none"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </Tag>
  );
}
