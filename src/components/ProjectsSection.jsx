import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, ShieldCheck, Cpu, Code2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projects } from '../data/projects';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Full-Stack', 'Backend / IoT', 'Automated Testing'];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Full-Stack') return project.category.includes('Full-Stack');
    if (activeFilter === 'Backend / IoT') return project.category.includes('Backend');
    if (activeFilter === 'Automated Testing') return project.testMetrics !== undefined;
    return true;
  });

  return (
    <section id="projects" className="section-spacing scroll-animate">
      <div className="section-header reveal-on-scroll">
        <div className="badge-pill">
          <Code2 size={14} className="badge-icon" />
          <span>Real-World Engineering</span>
        </div>
        <h2 className="font-headline-md section-title">Featured Projects</h2>
        <p className="font-body-md section-subtitle">
          Architected with clean patterns, high-performance backends, and rigorous automated test coverage.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="project-filters reveal-on-scroll stagger-1">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`font-label-mono filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="projects-grid">
        {filteredProjects.map((project, idx) => (
          <article
            key={project.id}
            className={`project-card glass-panel reveal-on-scroll stagger-${(idx % 3) + 1}`}
          >
            {/* Card Top Meta */}
            <div className="project-top-row">
              <span className="project-badge" style={{ borderColor: project.accentColor, color: project.accentColor }}>
                {project.badge}
              </span>
              <span className="project-category font-label-mono">{project.category}</span>
            </div>

            {/* Title & Role */}
            <h3 className="project-title font-headline-md">{project.title}</h3>
            <p className="project-subtitle font-body-md">{project.subtitle}</p>
            <p className="project-role-tag font-label-mono">Role: {project.role}</p>

            <p className="project-description font-body-md">{project.description}</p>

            {/* Architecture Highlights */}
            <div className="project-highlights">
              <span className="highlights-label font-label-mono">Key Technical Highlights:</span>
              <ul className="highlights-list">
                {project.highlights.map((h, i) => (
                  <li key={i}>
                    <CheckCircle2 size={14} className="highlight-icon text-cyan" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Automated Testing Box */}
            <div className="project-qa-box">
              <div className="qa-box-header">
                <ShieldCheck size={16} className="text-emerald" />
                <span className="font-label-mono qa-title">Quality Assurance & Test Coverage</span>
              </div>
              <div className="qa-metrics-grid">
                <div className="qa-metric-item">
                  <span className="qa-label">Test Framework</span>
                  <span className="qa-value">{project.testMetrics.tool}</span>
                </div>
                <div className="qa-metric-item">
                  <span className="qa-label">Coverage</span>
                  <span className="qa-value text-emerald">{project.testMetrics.coverage}</span>
                </div>
                <div className="qa-metric-item">
                  <span className="qa-label">Test Scope</span>
                  <span className="qa-value">{project.testMetrics.testType}</span>
                </div>
                <div className="qa-metric-item">
                  <span className="qa-label">Automated Specs</span>
                  <span className="qa-value text-cyan">{project.testMetrics.suiteCount}</span>
                </div>
              </div>
            </div>

            {/* Tech Tags */}
            <div className="project-tags">
              {project.tech.map((tech) => (
                <span key={tech} className="font-label-mono project-tag">
                  {tech}
                </span>
              ))}
            </div>

            {/* Card Actions */}
            <div className="project-actions">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action btn-github"
              >
                <GithubIcon size={16} />
                <span>Source Code</span>
                <ArrowUpRight size={14} />
              </a>
              <a
                href="#contact"
                className="btn-action btn-demo"
              >
                <Cpu size={16} />
                <span>Request Walkthrough</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
