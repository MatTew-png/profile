import React, { useState, useEffect } from 'react';
import { Download, FileText, ArrowRight, ShieldCheck, Terminal, Sparkles, MapPin } from 'lucide-react';
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

export default function App() {
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

  return (
    <>
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
              <span className="font-label-mono">Open for Opportunities • Hybrid & On-Site</span>
            </div>

            <h1 className="font-display-lg hero-title animate-fade-in-up">
              Hello, I am <EncryptedText text="Phattharaphon Jansanga" className="gradient-text" />
            </h1>

            <h2 className="font-headline-md hero-subtitle animate-fade-in-up delay-100 flex items-center flex-wrap gap-2">
              <span className="text-secondary">Application Developer &amp;</span>
              <FlipWords
                words={[
                  'Full-Stack Engineer',
                  'Automated QA Tester',
                  'API & WebSocket Specialist',
                  'NestJS & FastAPI Developer',
                  'Cypress & Postman Tester',
                ]}
                duration={2600}
              />
            </h2>

            <p className="font-body-lg hero-description animate-fade-in-up delay-200">
              Computer Science student at <strong>Burapha University</strong>. I engineer scalable web applications and real-time backend architectures with an unwavering focus on <strong>automated testing (Cypress, Postman, Pytest)</strong> to guarantee reliable software in production.
            </p>

            {/* Hero Quick CTAs */}
            <div className="hero-actions animate-fade-in-up delay-300">
              <a href="#projects" className="button-primary font-label-mono">
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>

              <a href="#test-runner" className="button-secondary btn-test-action font-label-mono">
                <Terminal size={16} className="text-cyan" />
                <span>Live Test Runner</span>
              </a>

              <a
                href="mailto:jansanga.new@gmail.com?subject=Resume%20Request%20-%20Phattharraphon"
                className="button-tertiary font-label-mono"
              >
                <Download size={15} />
                <span>Request Resume</span>
              </a>
            </div>

            {/* Quick Hero Highlights */}
            <div className="hero-trust-bar animate-fade-in-up delay-300">
              <div className="trust-item">
                <span className="trust-val font-label-mono text-cyan">B.Sc. CS</span>
                <span className="trust-label">Burapha University</span>
              </div>
              <div className="trust-separator" />
              <div className="trust-item">
                <span className="trust-val font-label-mono text-emerald">100%</span>
                <span className="trust-label">Automated Test Driven</span>
              </div>
              <div className="trust-separator" />
              <div className="trust-item">
                <span className="trust-val font-label-mono text-purple">TA Mentor</span>
                <span className="trust-label">EDA & Databases</span>
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
