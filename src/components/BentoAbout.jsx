import React from 'react';
import { GraduationCap, Users, ShieldCheck, Zap, MapPin, Sparkles, Code2, CheckCircle2 } from 'lucide-react';
import { EncryptedText } from './ui/EncryptedText';
import Gsap3DTilt from './ui/Gsap3DTilt';
import { useLanguage } from '../context/LanguageContext';

export default function BentoAbout() {
  const { t, language } = useLanguage();

  return (
    <section id="bento" className="section-spacing scroll-animate">
      <div className="section-header reveal-on-scroll">
        <div className="badge-pill">
          <Sparkles size={14} className="badge-icon" />
          <span>{t('bento.badge')}</span>
        </div>
        <h2 className="font-headline-md section-title">{t('bento.title')}</h2>
        <p className="font-body-md section-subtitle">
          {t('bento.subtitle')}
        </p>
      </div>

      <div className="bento-grid">
        {/* Card 1: Main Bio & University */}
        <Gsap3DTilt maxTilt={6} depthStrength={20} className="reveal-on-scroll stagger-1">
          <div className="bento-card bento-card-large glass-panel">
            <div className="bento-card-header tilt-depth-1">
              <div className="bento-icon-wrapper">
                <GraduationCap size={22} className="text-cyan" />
              </div>
              <span className="bento-badge">{t('bento.card1Badge')}</span>
            </div>
            <h3 className="bento-title">
              {language === 'th' ? (
                <>วิทยาการคอมพิวเตอร์ @ <EncryptedText text="มหาวิทยาลัยบูรพา" className="text-cyan" /></>
              ) : (
                <>Computer Science @ <EncryptedText text="Burapha University" className="text-cyan" /></>
              )}
            </h3>
            <p className="bento-text">
              {t('bento.card1Desc')}
            </p>
            <div className="bento-tags-row tilt-depth-2">
              <span className="mini-tag">{language === 'th' ? 'โครงสร้างข้อมูล' : 'Data Structures'}</span>
              <span className="mini-tag">{language === 'th' ? 'Relational SQL' : 'Relational SQL'}</span>
              <span className="mini-tag">{language === 'th' ? 'การออกแบบระบบ' : 'System Design'}</span>
              <span className="mini-tag">{language === 'th' ? 'Distributed APIs' : 'Distributed APIs'}</span>
            </div>
          </div>
        </Gsap3DTilt>

        {/* Card 2: Live Status & Location */}
        <Gsap3DTilt maxTilt={7} depthStrength={22} className="reveal-on-scroll stagger-2">
          <div className="bento-card bento-card-medium glass-panel glow-card">
            <div className="bento-card-header tilt-depth-1">
              <div className="live-status-pill">
                <span className="pulsing-emerald-dot" />
                <span>{t('bento.card2Badge')}</span>
              </div>
              <MapPin size={18} className="text-cyan" />
            </div>
            <h3 className="bento-title">{t('bento.card2Title')}</h3>
            <p className="bento-text">
              {t('bento.card2Desc')}
            </p>
            <div className="location-pill tilt-depth-2">
              <span>{t('bento.card2Location')}</span>
            </div>
          </div>
        </Gsap3DTilt>

        {/* Card 3: Teaching Assistant (Leadership & Mentorship) */}
        <Gsap3DTilt maxTilt={7} depthStrength={22} className="reveal-on-scroll stagger-3">
          <div className="bento-card bento-card-medium glass-panel">
            <div className="bento-card-header tilt-depth-1">
              <div className="bento-icon-wrapper">
                <Users size={22} className="text-purple" />
              </div>
              <span className="bento-badge">{t('bento.card3Badge')}</span>
            </div>
            <h3 className="bento-title">{t('bento.card3Title')}</h3>
            <p className="bento-text">
              {t('bento.card3Desc')}
            </p>
            <div className="bento-stat-highlight tilt-depth-2">
              <CheckCircle2 size={16} className="text-purple" />
              <span>{t('bento.card3Highlight')}</span>
            </div>
          </div>
        </Gsap3DTilt>

        {/* Card 4: The QA + Dev Dual Advantage */}
        <Gsap3DTilt maxTilt={6} depthStrength={20} className="reveal-on-scroll stagger-4">
          <div className="bento-card bento-card-large glass-panel">
            <div className="bento-card-header tilt-depth-1">
              <div className="bento-icon-wrapper">
                <ShieldCheck size={22} className="text-emerald" />
              </div>
              <span className="bento-badge">{t('bento.card4Badge')}</span>
            </div>
            <h3 className="bento-title">{t('bento.card4Title')}</h3>
            <p className="bento-text">
              {t('bento.card4Desc')}
            </p>
            <div className="bento-metrics-row tilt-depth-2">
              <div className="mini-metric">
                <span className="num">3+</span>
                <span className="label">{t('bento.metric1Label')}</span>
              </div>
              <div className="mini-metric">
                <span className="num">50+</span>
                <span className="label">{t('bento.metric2Label')}</span>
              </div>
              <div className="mini-metric">
                <span className="num">&lt;50ms</span>
                <span className="label">{t('bento.metric3Label')}</span>
              </div>
            </div>
          </div>
        </Gsap3DTilt>
      </div>
    </section>
  );
}
