import React from 'react';
import { GraduationCap, Users, ShieldCheck, Zap, MapPin, Sparkles, Code2, CheckCircle2 } from 'lucide-react';

export default function BentoAbout() {
  return (
    <section id="bento" className="section-spacing scroll-animate">
      <div className="section-header reveal-on-scroll">
        <div className="badge-pill">
          <Sparkles size={14} className="badge-icon" />
          <span>Core Highlights</span>
        </div>
        <h2 className="font-headline-md section-title">About & Credentials</h2>
        <p className="font-body-md section-subtitle">
          Bridging the gap between scalable full-stack web engineering and test-driven quality assurance.
        </p>
      </div>

      <div className="bento-grid">
        {/* Card 1: Main Bio & University */}
        <div className="bento-card bento-card-large glass-panel reveal-on-scroll stagger-1">
          <div className="bento-card-header">
            <div className="bento-icon-wrapper">
              <GraduationCap size={22} className="text-cyan" />
            </div>
            <span className="bento-badge">Academic Foundation</span>
          </div>
          <h3 className="bento-title">Computer Science @ Burapha University</h3>
          <p className="bento-text">
            Studying at the Faculty of Informatics, Burapha University (Expected graduation: April 2026).
            Grounded in software engineering, database normalization, system design, and algorithmic problem-solving.
          </p>
          <div className="bento-tags-row">
            <span className="mini-tag">Data Structures</span>
            <span className="mini-tag">Relational SQL</span>
            <span className="mini-tag">System Design</span>
            <span className="mini-tag">Distributed APIs</span>
          </div>
        </div>

        {/* Card 2: Live Status & Location */}
        <div className="bento-card bento-card-medium glass-panel glow-card reveal-on-scroll stagger-2">
          <div className="bento-card-header">
            <div className="live-status-pill">
              <span className="pulsing-emerald-dot" />
              <span>Available for Hire</span>
            </div>
            <MapPin size={18} className="text-cyan" />
          </div>
          <h3 className="bento-title">Ready for Immediate Start</h3>
          <p className="bento-text">
            Actively seeking Full-Stack Developer, Backend Developer, or QA Automated Tester roles.
            Ready for <strong>On-site</strong> or <strong>Hybrid</strong> work in Bangkok and Chonburi.
          </p>
          <div className="location-pill">
            <span>📍 Bangkok / Chonburi / Remote</span>
          </div>
        </div>

        {/* Card 3: Teaching Assistant (Leadership & Mentorship) */}
        <div className="bento-card bento-card-medium glass-panel reveal-on-scroll stagger-3">
          <div className="bento-card-header">
            <div className="bento-icon-wrapper">
              <Users size={22} className="text-purple" />
            </div>
            <span className="bento-badge">Leadership</span>
          </div>
          <h3 className="bento-title">Teaching Assistant Experience</h3>
          <p className="bento-text">
            Served as an Undergraduate Teaching Assistant for <strong>Exploratory Data Analysis</strong> and <strong>Relational Database</strong> courses.
            Instructed students through hands-on labs and database modeling.
          </p>
          <div className="bento-stat-highlight">
            <CheckCircle2 size={16} className="text-purple" />
            <span>Demonstrated communication, mentorship & technical empathy</span>
          </div>
        </div>

        {/* Card 4: The QA + Dev Dual Advantage */}
        <div className="bento-card bento-card-large glass-panel reveal-on-scroll stagger-4">
          <div className="bento-card-header">
            <div className="bento-icon-wrapper">
              <ShieldCheck size={22} className="text-emerald" />
            </div>
            <span className="bento-badge">Key Differentiator</span>
          </div>
          <h3 className="bento-title">Full-Stack Capability + Automated Testing Mindset</h3>
          <p className="bento-text">
            Unlike traditional developers who write code and hope it works, I design features with automated testing in mind from Day 1.
            From unit and integration contracts (FastAPI, Postman) to full browser regression suites (Cypress),
            I ensure zero production regressions.
          </p>
          <div className="bento-metrics-row">
            <div className="mini-metric">
              <span className="num">3+</span>
              <span className="label">Production-grade Apps</span>
            </div>
            <div className="mini-metric">
              <span className="num">50+</span>
              <span className="label">Automated Test Specs</span>
            </div>
            <div className="mini-metric">
              <span className="num">&lt;50ms</span>
              <span className="label">WebSocket Latency</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
