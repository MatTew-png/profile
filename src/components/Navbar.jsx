import React from 'react';
import { Sun, Moon, Menu, Search, Terminal } from 'lucide-react';

export default function Navbar({
  isLightMode,
  toggleTheme,
  onOpenCmdK,
  isMobileMenuOpen,
  setIsMobileMenuOpen
}) {
  return (
    <header className="header">
      {/* Brand Logo */}
      <a href="#" className="font-label-mono header-logo">
        <span className="logo-text">PHATTHARRAPHON J.</span>
        <span className="logo-dot" />
      </a>

      {/* Desktop Navigation */}
      <nav className="header-nav">
        <a href="#about" className="font-label-mono">About</a>
        <a href="#bento" className="font-label-mono">Highlights</a>
        <a href="#test-runner" className="font-label-mono nav-featured">
          <Terminal size={14} className="nav-icon text-cyan" />
          <span>Testing</span>
        </a>
        <a href="#projects" className="font-label-mono">Projects</a>
        <a href="#stack" className="font-label-mono">Stack</a>
        <a href="#experience" className="font-label-mono">Experience</a>
        <a href="#contact" className="font-label-mono">Contact</a>

        {/* Cmd+K Quick Search Trigger Pill */}
        <button
          onClick={onOpenCmdK}
          className="cmdk-nav-btn font-label-mono"
          aria-label="Open Command Menu"
          title="Open Command Palette (Cmd+K)"
        >
          <Search size={14} />
          <span className="cmdk-text">Search</span>
          <span className="cmdk-kbd">⌘K</span>
        </button>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          aria-label="Toggle Theme"
          title={isLightMode ? 'Switch to Dark Glacier' : 'Switch to Light Mode'}
        >
          {isLightMode ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </nav>

      {/* Mobile Right Controls */}
      <div className="header-mobile-controls">
        <button
          onClick={onOpenCmdK}
          className="mobile-search-btn"
          aria-label="Open Search"
        >
          <Search size={18} />
        </button>

        <button
          onClick={toggleTheme}
          className="theme-toggle mobile-theme-btn"
          aria-label="Toggle Theme"
        >
          {isLightMode ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        <button
          aria-label="Toggle Navigation Menu"
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}
