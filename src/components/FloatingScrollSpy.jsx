import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'about', label: 'About & Hero' },
  { id: 'bento', label: 'Highlights' },
  { id: 'test-runner', label: 'Test Runner' },
  { id: 'projects', label: 'Projects' },
  { id: 'stack', label: 'Skills & Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' }
];

export default function FloatingScrollSpy() {
  const [activeSection, setActiveSection] = useState('about');
  const [hoveredSection, setHoveredSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="floating-scrollspy" aria-label="Section Navigation">
      <div className="scrollspy-track">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          const isHovered = hoveredSection === section.id;

          return (
            <div
              key={section.id}
              className={`scrollspy-item ${isActive ? 'active' : ''}`}
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
              onClick={() => scrollTo(section.id)}
            >
              {/* Tooltip Label */}
              <span className={`scrollspy-tooltip font-label-mono ${isHovered ? 'visible' : ''}`}>
                {section.label}
              </span>

              {/* Indicator Dot */}
              <button
                className="scrollspy-dot"
                aria-label={`Scroll to ${section.label}`}
                title={section.label}
              >
                {isActive && <span className="scrollspy-pulse" />}
              </button>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
