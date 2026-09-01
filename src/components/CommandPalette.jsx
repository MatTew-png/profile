import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  Moon,
  Sun,
  FileText,
  Mail,
  Layers,
  Terminal,
  Compass,
  Check,
  Sparkles,
  X
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function CommandPalette({ isOpen, setIsOpen, isLightMode, toggleTheme }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const actions = [
    {
      id: 'jump-about',
      title: 'Go to About & Hero',
      category: 'Navigation',
      icon: Compass,
      perform: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      id: 'jump-test-runner',
      title: 'Run Live Automated Tests (Cypress & API)',
      category: 'Interactive',
      icon: Terminal,
      badge: 'Featured',
      perform: () => {
        document.getElementById('test-runner')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      id: 'jump-bento',
      title: 'View Highlights & Credentials (Bento Grid)',
      category: 'Navigation',
      icon: Sparkles,
      perform: () => {
        document.getElementById('bento')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      id: 'jump-projects',
      title: 'Explore Featured Projects & Architecture',
      category: 'Navigation',
      icon: Layers,
      perform: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      id: 'jump-stack',
      title: 'View Technical Skills & Tools',
      category: 'Navigation',
      icon: Layers,
      perform: () => {
        document.getElementById('stack')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      id: 'jump-experience',
      title: 'View Experience & Education Timeline',
      category: 'Navigation',
      icon: Compass,
      perform: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      id: 'jump-contact',
      title: 'Get in Touch / Send Message',
      category: 'Navigation',
      icon: Mail,
      perform: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    },
    {
      id: 'toggle-theme',
      title: isLightMode ? 'Switch to Dark Glacier Mode' : 'Switch to Clean Light Mode',
      category: 'Preference',
      icon: isLightMode ? Moon : Sun,
      perform: () => {
        toggleTheme();
        setIsOpen(false);
      }
    },
    {
      id: 'copy-email',
      title: copied ? 'Email Copied!' : 'Copy Email Address (jansanga.new@gmail.com)',
      category: 'Action',
      icon: copied ? Check : Mail,
      perform: () => {
        navigator.clipboard.writeText('jansanga.new@gmail.com');
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          setIsOpen(false);
        }, 800);
      }
    },
    {
      id: 'download-resume',
      title: 'Download / View Resume (PDF)',
      category: 'Document',
      icon: FileText,
      perform: () => {
        window.open('mailto:jansanga.new@gmail.com?subject=Resume%20Request%20-%20Phattharraphon', '_blank');
        setIsOpen(false);
      }
    },
    {
      id: 'open-github',
      title: 'Open GitHub Profile (@MatTew-png)',
      category: 'Social',
      icon: GithubIcon,
      perform: () => {
        window.open('https://github.com/MatTew-png', '_blank');
        setIsOpen(false);
      }
    },
    {
      id: 'open-linkedin',
      title: 'Open LinkedIn Profile',
      category: 'Social',
      icon: LinkedinIcon,
      perform: () => {
        window.open('https://linkedin.com', '_blank');
        setIsOpen(false);
      }
    }
  ];

  const filtered = actions.filter(
    (action) =>
      action.title.toLowerCase().includes(query.toLowerCase()) ||
      action.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDownInMenu = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filtered.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].perform();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="cmd-backdrop" onClick={() => setIsOpen(false)}>
      <div
        className="cmd-dialog glass-panel"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Search Bar */}
        <div className="cmd-search-wrapper">
          <Search size={18} className="cmd-search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="cmd-search-input"
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDownInMenu}
          />
          <button className="cmd-close-btn" onClick={() => setIsOpen(false)}>
            <X size={16} />
          </button>
        </div>

        {/* Results List */}
        <div className="cmd-results">
          {filtered.length === 0 ? (
            <div className="cmd-empty">No matching commands found.</div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  className={`cmd-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => item.perform()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                >
                  <div className="cmd-item-left">
                    <Icon size={16} className="cmd-item-icon" />
                    <span className="cmd-item-title">{item.title}</span>
                    {item.badge && <span className="cmd-badge">{item.badge}</span>}
                  </div>
                  <span className="cmd-item-category">{item.category}</span>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="cmd-footer">
          <div className="cmd-keys">
            <span><kbd>↑</kbd> <kbd>↓</kbd> to navigate</span>
            <span><kbd>↵</kbd> to select</span>
            <span><kbd>esc</kbd> to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}
