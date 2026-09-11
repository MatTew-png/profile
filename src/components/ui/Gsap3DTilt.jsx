import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

/**
 * Gsap3DTilt: Gives any container true 3D spatial depth,
 * cursor-interpolated spring physics, specular glare sheen,
 * and multi-layered Z-space translation.
 */
export default function Gsap3DTilt({
  children,
  className = '',
  maxTilt = 8,
  perspective = 1200,
  scale = 1.02,
  glare = true,
  depthStrength = 24,
  onClick,
  style = {},
  ...props
}) {
  const cardRef = useRef(null);
  const containerRef = useRef(null);
  const glareRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Quick interpolators for 60fps buttery-smooth performance
  const qRotateX = useRef(null);
  const qRotateY = useRef(null);
  const qScale = useRef(null);

  useGSAP(
    () => {
      if (!cardRef.current) return;

      qRotateX.current = gsap.quickTo(cardRef.current, 'rotationX', {
        duration: 0.35,
        ease: 'power2.out',
      });
      qRotateY.current = gsap.quickTo(cardRef.current, 'rotationY', {
        duration: 0.35,
        ease: 'power2.out',
      });
      qScale.current = gsap.quickTo(cardRef.current, 'scale', {
        duration: 0.35,
        ease: 'power2.out',
      });
    },
    { scope: containerRef }
  );

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;

    // Calculate rotation angles
    const rotX = -deltaY * maxTilt;
    const rotY = deltaX * maxTilt;

    if (qRotateX.current) qRotateX.current(rotX);
    if (qRotateY.current) qRotateY.current(rotY);
    if (qScale.current) qScale.current(scale);

    // Update specular glare reflection
    if (glare && glareRef.current) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      glareRef.current.style.background = `radial-gradient(circle 320px at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.12) 0%, rgba(56, 189, 248, 0.04) 40%, transparent 80%)`;
      glareRef.current.style.opacity = '1';
    }

    // Elevate any internal children with depth classes
    const depthElements = cardRef.current.querySelectorAll('.tilt-depth-1, .tilt-depth-2, .tilt-depth-3');
    depthElements.forEach((el) => {
      const depth = el.classList.contains('tilt-depth-3')
        ? depthStrength * 1.5
        : el.classList.contains('tilt-depth-2')
        ? depthStrength
        : depthStrength * 0.5;
      gsap.to(el, {
        z: depth,
        duration: 0.25,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!cardRef.current) return;

    // Spring back smoothly to rest position
    gsap.to(cardRef.current, {
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      duration: 0.65,
      ease: 'elastic.out(1, 0.6)',
      overwrite: 'auto',
    });

    if (glare && glareRef.current) {
      gsap.to(glareRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out',
      });
    }

    const depthElements = cardRef.current.querySelectorAll('.tilt-depth-1, .tilt-depth-2, .tilt-depth-3');
    depthElements.forEach((el) => {
      gsap.to(el, {
        z: 0,
        duration: 0.5,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    });
  };

  return (
    <div
      ref={containerRef}
      className={`gsap-tilt-container ${className}`}
      style={{
        perspective: `${perspective}px`,
        ...style,
      }}
      onClick={onClick}
      {...props}
    >
      <div
        ref={cardRef}
        className="gsap-tilt-card"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: 'preserve-3d',
          willChange: 'transform',
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        {children}

        {/* Specular Glare Reflection Layer */}
        {glare && (
          <div
            ref={glareRef}
            className="gsap-tilt-glare"
            style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              borderRadius: 'inherit',
              opacity: 0,
              transition: 'opacity 0.25s ease',
              mixBlendMode: 'overlay',
              zIndex: 30,
            }}
          />
        )}
      </div>
    </div>
  );
}
