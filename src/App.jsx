import React, { useState, useEffect } from 'react';
import {
  Download,
  FileText,
  ArrowRight,
  ShieldCheck,
  Terminal,
  Sparkles,
  MapPin,
} from 'lucide-react';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import FloatingScrollSpy from './components/FloatingScrollSpy';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import CommandPalette from './components/CommandPalette';
import Hero3D from './components/Hero3D';
import BentoAbout from './components/BentoAbout';
import TestRunnerWidget from './components/TestRunnerWidget';
import ProjectsSection from './components/ProjectsSection';
import TechStackSection from './components/TechStackSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

import { FlipWords } from './components/ui/FlipWords';
import { EncryptedText } from './components/ui/EncryptedText';
import { MagneticButton } from './components/ui/MagneticButton';
import { NoiseBackground } from './components/ui/NoiseBackground';
import { useLanguage } from './context/LanguageContext';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function App() {
  const { t, dict, language } = useLanguage();
  const [isLightMode, setIsLightMode] = useState(() => {
    return localStorage.getItem('theme') === 'light';
  });
  const [isCmdKOpen, setIsCmdKOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsLightMode((prev) => {
      const next = !prev;
      localStorage.setItem('theme', next ? 'light' : 'dark');
      if (next) {
        document.body.classList.add('light-theme');
      } else {
        document.body.classList.remove('light-theme');
      }
      return next;
    });
  };

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [isLightMode]);

  // Fast & Predictive Bi-directional Scroll Reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            // Only unmount/hide when scrolled well beyond viewport boundaries (150px)
            const rect = entry.target.getBoundingClientRect();
            if (rect.top > window.innerHeight + 150 || rect.bottom < -150) {
              entry.target.classList.remove('is-visible');
            }
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '120px 0px 100px 0px' // Pre-loads and triggers 120px before entering screen!
      }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // GSAP 3D Scroll Depth, Parallax & Micro-Physics
  useGSAP(() => {
    // 1. Ambient Background 3D Parallax Orbs
    gsap.to('.gsap-parallax-orb-1', {
      yPercent: 60,
      xPercent: 20,
      rotation: 60,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.2,
      },
    });

    gsap.to('.gsap-parallax-orb-2', {
      yPercent: -50,
      xPercent: -25,
      rotation: -45,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
      },
    });

    // 2. Hero Section 3D Floating Micro-Physics
    gsap.to('.hero-status-pill', {
      y: -6,
      duration: 2.6,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    });

    gsap.to('.hero-trust-bar', {
      y: -5,
      duration: 3.2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      delay: 0.5,
    });

    // 3. Section Headers 3D Lift-In
    const sectionHeaders = gsap.utils.toArray('.section-header');
    sectionHeaders.forEach((hdr) => {
      gsap.fromTo(
        hdr,
        {
          opacity: 0,
          y: 35,
          rotateX: 8,
          transformPerspective: 1000,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: hdr,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <>
      {/* Noise Texture Background */}
      <NoiseBackground opacity={isLightMode ? 0.015 : 0.03} />

      {/* GSAP 3D Parallax Ambient Background Orbs */}
      <div className="gsap-parallax-orb gsap-parallax-orb-1" aria-hidden="true" />
      <div className="gsap-parallax-orb gsap-parallax-orb-2" aria-hidden="true" />

      {/* Visual Enhancers */}
      <CustomCursor />
      <ScrollProgress />
      <FloatingScrollSpy />

      {/* Navigation & Overlays */}
      <Navbar
        isLightMode={isLightMode}
        toggleTheme={toggleTheme}
        onOpenCmdK={() => setIsCmdKOpen(true)}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
        isLightMode={isLightMode}
        toggleTheme={toggleTheme}
        onOpenCmdK={() => setIsCmdKOpen(true)}
      />

      <CommandPalette
        isOpen={isCmdKOpen}
        setIsOpen={setIsCmdKOpen}
        isLightMode={isLightMode}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="main-content container">
        {/* Hero Section */}
        <section id="about" className="section-spacing hero-section scroll-animate">
          <Hero3D />

          <div className="hero-text">
            {/* Live Availability Badge */}
            <div className="hero-status-pill animate-fade-in-up">
              <span className="pulsing-emerald-dot" />
              <span className="font-label-mono">{t('hero.status')}</span>
            </div>

            <h1 className="font-display-lg hero-title animate-fade-in-up">
              {t('hero.greeting')}{' '}
              <EncryptedText
                key={language}
                text={t('hero.name')}
                className="gradient-text"
              />
            </h1>

            <h2 className="font-headline-md hero-subtitle animate-fade-in-up delay-100 flex items-center flex-wrap gap-2">
              <span className="text-secondary">{t('hero.subtitlePrefix')}</span>
              <FlipWords
                key={language}
                words={dict.hero.flipWords}
                duration={2600}
              />
            </h2>

            <p className="font-body-lg hero-description animate-fade-in-up delay-200">
              {t('hero.description')}
            </p>

            {/* Hero Quick CTAs with Magnetic Physics */}
            <div className="hero-actions animate-fade-in-up delay-300">
              <MagneticButton>
                <a href="#projects" className="button-primary font-label-mono">
                  <span>{t('hero.viewProjects')}</span>
                  <ArrowRight size={16} />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a href="#test-runner" className="button-secondary btn-test-action font-label-mono">
                  <Terminal size={16} className="text-cyan" />
                  <span>{t('hero.liveTestRunner')}</span>
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="mailto:jansanga.new@gmail.com?subject=Resume%20Request%20-%20Phattharraphon"
                  className="button-tertiary font-label-mono"
                >
                  <Download size={15} />
                  <span>{t('hero.requestResume')}</span>
                </a>
              </MagneticButton>
            </div>

            {/* Quick Hero Highlights */}
            <div className="hero-trust-bar animate-fade-in-up delay-300">
              <div className="trust-item">
                <span className="trust-val font-label-mono text-cyan">{t('hero.trustEduVal')}</span>
                <span className="trust-label">{t('hero.trustEdu')}</span>
              </div>
              <div className="trust-separator" />
              <div className="trust-item">
                <span className="trust-val font-label-mono text-emerald">{t('hero.trustTestVal')}</span>
                <span className="trust-label">{t('hero.trustTest')}</span>
              </div>
              <div className="trust-separator" />
              <div className="trust-item">
                <span className="trust-val font-label-mono text-purple">{t('hero.trustTaVal')}</span>
                <span className="trust-label">{t('hero.trustTa')}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 1. Bento Grid: About & Highlights */}
        <BentoAbout />

        {/* 2. Interactive QA & Automated Test Runner Terminal */}
        <TestRunnerWidget />

        {/* 3. Featured Projects Showcase */}
        <ProjectsSection />

        {/* 4. Categorized Technical Stack */}
        <TechStackSection />

        {/* 5. Experience & Education Roadmap */}
        <ExperienceTimeline />

        {/* 6. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
