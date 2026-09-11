import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MapPin, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import Gsap3DTilt from './ui/Gsap3DTilt';
import { useLanguage } from '../context/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('jansanga.new@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:jansanga.new@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Contact from ' + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="section-spacing scroll-animate">
      <div className="section-header reveal-on-scroll">
        <div className="badge-pill">
          <Sparkles size={14} className="badge-icon" />
          <span>{t('contact.badge')}</span>
        </div>
        <h2 className="font-headline-md section-title">{t('contact.title')}</h2>
        <p className="font-body-md section-subtitle">
          {t('contact.subtitle')}
        </p>
      </div>

      <Gsap3DTilt maxTilt={3} perspective={1400} depthStrength={12} className="reveal-on-scroll stagger-2">
        <div className="contact-container glass-panel">
          {/* Left Col: Contact Info & Quick Copy */}
          <div className="contact-info-col tilt-depth-1">
          <h3 className="contact-info-title font-headline-md">{t('contact.directTitle')}</h3>
          <p className="contact-info-desc font-body-md">
            {t('contact.directDesc')}
          </p>

          <div className="email-copy-box">
            <div className="email-label-group">
              <span className="email-label font-label-mono">Primary Email</span>
              <span className="email-value font-label-mono">jansanga.new@gmail.com</span>
            </div>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="btn-copy-email"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-emerald" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={16} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <div className="contact-meta-list">
            <div className="contact-meta-item">
              <MapPin size={18} className="text-cyan" />
              <span>Bangkok & Chonburi, Thailand (Hybrid / On-site ready)</span>
            </div>
            <div className="contact-meta-item">
              <Mail size={18} className="text-cyan" />
              <span>Response time: Usually within 24 hours</span>
            </div>
          </div>

          <div className="contact-social-pills">
            <a
              href="https://github.com/MatTew-png"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right Col: Interactive Message Form */}
        <div className="contact-form-col">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="font-label-mono form-label">{t('contact.formName')}</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Alex Tech Lead"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="font-label-mono form-label">{t('contact.formEmail')}</label>
              <input
                type="email"
                className="form-input"
                placeholder="e.g. alex@company.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="font-label-mono form-label">{t('contact.formSubject')}</label>
              <input
                type="text"
                className="form-input"
                placeholder="e.g. Job Opportunity / Full-Stack Role"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="font-label-mono form-label">{t('contact.formMessage')}</label>
              <textarea
                className="form-input form-textarea"
                rows="4"
                placeholder={t('contact.formPlaceholder')}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className="button-primary submit-btn font-label-mono">
              <Send size={16} />
              <span>{t('contact.sendBtn')}</span>
            </button>
          </form>
        </div>
        </div>
      </Gsap3DTilt>
    </section>
  );
}
