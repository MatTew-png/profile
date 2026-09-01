import React, { useState } from 'react';
import { Layers, ShieldCheck, Database, Layout, Sparkles, Code2, ArrowRight } from 'lucide-react';
import { skillCategories } from '../data/skills';
import TechMarquee from './TechMarquee';

export default function TechStackSection() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const getCategoryIcon = (category) => {
    if (category.includes('QA') || category.includes('Testing')) return ShieldCheck;
    if (category.includes('Backend')) return Database;
    if (category.includes('Frontend')) return Layout;
    return Layers;
  };

  const activeCategory = skillCategories[activeCategoryIndex] || skillCategories[0];
  const ActiveIcon = getCategoryIcon(activeCategory.category);

  return (
    <section id="stack" className="section-spacing scroll-animate">
      <div className="section-header reveal-on-scroll">
        <div className="badge-pill">
          <Layers size={14} className="badge-icon" />
          <span>Technical Repertoire</span>
        </div>
        <h2 className="font-headline-md section-title">Skills & Technologies</h2>
        <p className="font-body-md section-subtitle">
          Select a domain below to inspect core tools, frameworks, and architecture proficiency.
        </p>
      </div>

      {/* Interactive Category Selector Menu */}
      <div className="tech-menu-bar reveal-on-scroll stagger-1">
        {skillCategories.map((category, idx) => {
          const Icon = getCategoryIcon(category.category);
          const isActive = idx === activeCategoryIndex;

          return (
            <button
              key={idx}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`tech-menu-tab font-label-mono ${isActive ? 'active' : ''}`}
            >
              <Icon size={16} className={isActive ? 'text-cyan' : ''} />
              <span>{category.category}</span>
              <span className="tab-pill-count">{category.items.length}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Active Category Showcase */}
      <div className="tech-active-showcase glass-panel reveal-on-scroll stagger-2">
        <div className="active-category-header">
          <div className="active-cat-left">
            <div className="active-cat-icon">
              <ActiveIcon size={24} className="text-cyan" />
            </div>
            <div>
              <h3 className="active-cat-name font-headline-md">{activeCategory.category}</h3>
              <p className="active-cat-desc font-body-sm">{activeCategory.description}</p>
            </div>
          </div>
          <span className="active-cat-badge font-label-mono">{activeCategory.badge}</span>
        </div>

        {/* Compact Grid of Active Items */}
        <div className="tech-grid-compact">
          {activeCategory.items.map((tech, i) => (
            <div key={i} className="tech-card-compact glass-panel interactive-hover">
              <div className="tech-card-top">
                <div className="tech-icon-circle">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="tech-icon-img"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <span className="tech-level-tag font-label-mono">{tech.level}</span>
              </div>
              <h4 className="tech-item-name font-label-mono">{tech.name}</h4>
              <p className="tech-item-purpose font-body-sm">{tech.purpose}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite Animated Marquee Banner for Continuous Dynamic Motion */}
      <div className="tech-marquee-wrapper">
        <span className="marquee-subheading font-label-mono">
          <Sparkles size={13} className="text-cyan" />
          <span>CONTINUOUS TOOLCHAIN & SPECIALIZATIONS</span>
        </span>
        <TechMarquee />
      </div>
    </section>
  );
}
