import React from 'react';
import { X, Compass, Terminal, Sparkles, Layers, Calendar, Mail, FileText, Sun, Moon } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function MobileMenu({ isOpen, setIsOpen, isLightMode, toggleTheme, onOpenCmdK }) {
  if (!isOpen) return null;

  const links = [
    { name: 'About', href: '#about', icon: Compass },
    { name: 'Highlights', href: '#bento', icon: Sparkles },
    { name: 'Live Test Runner', href: '#test-runner', icon: Terminal, badge: 'Featured' },
    { name: 'Projects', href: '#projects', icon: Layers },
    { name: 'Tech Stack', href: '#stack', icon: Layers },
    { name: 'Experience', href: '#experience', icon: Calendar },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  const handleLinkClick = (href) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="mobile-drawer-backdrop" onClick={() => setIsOpen(false)}>
      <div className="mobile-drawer glass-panel" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="mobile-drawer-header">
          <span className="font-label-mono font-bold text-cyan">MENU NAVIGATION</span>
          <button className="mobile-drawer-close" onClick={() => setIsOpen(false)}>
            <X size={22} />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="mobile-drawer-nav">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="mobile-nav-link font-label-mono"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
              >
                <div className="mobile-nav-left">
                  <Icon size={18} className="text-cyan" />
                  <span>{link.name}</span>
                </div>
                {link.badge && <span className="mini-badge-emerald">{link.badge}</span>}
              </a>
            );
          })}
        </nav>

        {/* Quick Actions in Mobile Drawer */}
        <div className="mobile-drawer-actions">
          <button
            className="mobile-action-btn font-label-mono"
            onClick={() => {
              setIsOpen(false);
              onOpenCmdK();
            }}
          >
            <span>Command Palette (⌘K)</span>
          </button>

          <button className="mobile-action-btn font-label-mono" onClick={toggleTheme}>
            {isLightMode ? <Moon size={16} /> : <Sun size={16} />}
            <span>{isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}</span>
          </button>

          <div className="mobile-social-row">
            <a
              href="https://github.com/MatTew-png"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="mailto:jansanga.new@gmail.com"
              className="social-icon-btn"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
