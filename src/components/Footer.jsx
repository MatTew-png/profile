import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer scroll-animate">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="font-label-mono font-bold text-cyan">
            {language === 'th' ? 'ภัทรพล จันทร์สง่า (PHATTHARRAPHON J.)' : 'PHATTHARRAPHON JANSANGA'}
          </span>
          <p className="footer-tagline font-body-sm">
            {language === 'th'
              ? 'Application Developer • Full-Stack Developer • Automated QA Tester'
              : 'Application Developer • Full-Stack Developer • Automated QA Tester'}
          </p>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/MatTew-png"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link font-label-mono"
          >
            <GithubIcon size={15} />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link font-label-mono"
          >
            <LinkedinIcon size={15} />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:jansanga.new@gmail.com"
            className="footer-link font-label-mono"
          >
            <Mail size={15} />
            <span>Email</span>
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="back-to-top-btn font-label-mono"
          aria-label="Back to top"
        >
          <span>{language === 'th' ? 'กลับขึ้นด้านบน' : 'Back to Top'}</span>
          <ArrowUp size={14} />
        </button>
      </div>

      <div className="footer-bottom font-label-mono">
        <p>© 2026 {t('footer.rights')}</p>
        <p className="footer-built-with">
          {language === 'th'
            ? 'คณะวิทยาการสารสนเทศ มหาวิทยาลัยบูรพา • ' + t('footer.builtWith')
            : 'Faculty of Informatics, Burapha University • ' + t('footer.builtWith')}
        </p>
      </div>
    </footer>
  );
}
