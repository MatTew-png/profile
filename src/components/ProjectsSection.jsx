import React, { useState, useEffect } from 'react';
import {
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Code2,
  ArrowUpRight,
  Eye,
  X,
  Sparkles,
  Layers,
  Award,
  ChevronRight,
  Terminal,
  Coffee,
  Activity,
  FileText
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projects } from '../data/projects';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [previewProject, setPreviewProject] = useState(null);
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const filters = ['All', 'Full-Stack', 'Backend / IoT', 'Automated Testing'];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Full-Stack') return project.category.includes('Full-Stack');
    if (activeFilter === 'Backend / IoT') return project.category.includes('Backend');
    if (activeFilter === 'Automated Testing') return project.testMetrics !== undefined;
    return true;
  });

  const openPreview = (project) => {
    setPreviewProject(project);
    setActiveTabIdx(0);
  };

  const closePreview = () => {
    setPreviewProject(null);
  };

  // Close preview on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closePreview();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getProjectIcon = (type) => {
    switch (type) {
      case 'pos':
        return <Coffee size={20} className="text-emerald" />;
      case 'iot':
        return <Activity size={20} className="text-cyan" />;
      default:
        return <FileText size={20} className="text-purple" />;
    }
  };

  return (
    <section id="projects" className="section-spacing scroll-animate">
      <div className="section-header reveal-on-scroll">
        <div className="badge-pill">
          <Code2 size={14} className="badge-icon" />
          <span>Real-World Engineering</span>
        </div>
        <h2 className="font-headline-md section-title">Featured Projects</h2>
        <p className="font-body-md section-subtitle">
          Architected with clean design patterns, high-performance backends, and rigorous automated test coverage.
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
            className={`project-card glass-panel reveal-on-scroll stagger-${(idx % 3) + 1} ${
              project.featured ? 'is-featured' : ''
            }`}
          >
            {/* Visual Preview Banner */}
            <div
              className="project-banner-wrapper"
              onClick={() => openPreview(project)}
              role="button"
              tabIndex={0}
              title="Click to view interactive preview"
            >
              {project.bannerImage ? (
                <div className="project-banner-image-container">
                  <img
                    src={project.bannerImage}
                    alt={project.title}
                    className="project-banner-img"
                    loading="lazy"
                  />
                  <div className="banner-overlay">
                    <span className="btn-preview-badge font-label-mono">
                      <Eye size={14} />
                      <span>Live UI Preview</span>
                    </span>
                  </div>
                </div>
              ) : (
                <div className="project-banner-placeholder" style={{ background: `linear-gradient(135deg, ${project.accentColor}18, rgba(15, 23, 42, 0.9))` }}>
                  <div className="placeholder-icon-box" style={{ borderColor: `${project.accentColor}40` }}>
                    {getProjectIcon(project.previewType)}
                  </div>
                  <div className="placeholder-text">
                    <span className="font-label-mono text-cyan">{project.category}</span>
                    <span className="placeholder-title">{project.title}</span>
                  </div>
                  <span className="btn-preview-badge font-label-mono">
                    <Eye size={14} />
                    <span>View Architecture & UI</span>
                  </span>
                </div>
              )}
            </div>

            {/* Card Top Meta */}
            <div className="project-top-row">
              <span
                className="project-badge"
                style={{ borderColor: project.accentColor, color: project.accentColor }}
              >
                {project.badge}
              </span>
              <span className="project-category font-label-mono">{project.category}</span>
            </div>

            {/* Title & Role */}
            <h3 className="project-title font-headline-md">{project.title}</h3>
            <p className="project-subtitle font-body-md">{project.subtitle}</p>
            <p className="project-role-tag font-label-mono">
              <Award size={13} className="text-emerald inline-icon" /> Role: {project.role}
            </p>

            <p className="project-description font-body-md">{project.description}</p>

            {/* My Engineering Ownership Highlights */}
            {project.authorOwnership && (
              <div className="project-ownership-box">
                <div className="ownership-header font-label-mono">
                  <Sparkles size={14} className="text-emerald" />
                  <span>My Core Engineering Ownership:</span>
                </div>
                <ul className="ownership-list font-body-md">
                  {project.authorOwnership.slice(0, 3).map((item, i) => (
                    <li key={i}>
                      <ChevronRight size={14} className="text-emerald ownership-chevron" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

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
              <button
                type="button"
                className="btn-action btn-preview font-label-mono"
                onClick={() => openPreview(project)}
              >
                <Eye size={15} />
                <span>Preview UI</span>
              </button>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action btn-github font-label-mono"
              >
                <GithubIcon size={15} />
                <span>Source Code</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* Interactive Project Preview & Architecture Modal Lightbox */}
      {/* ========================================================================= */}
      {previewProject && (
        <div className="project-modal-backdrop" onClick={closePreview}>
          <div
            className="project-modal-card glass-panel"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-title-group">
                <div className="modal-badge-pill" style={{ borderColor: previewProject.accentColor, color: previewProject.accentColor }}>
                  {previewProject.badge}
                </div>
                <h3 className="modal-project-title font-headline-md">{previewProject.title}</h3>
                <p className="modal-project-subtitle font-body-md">{previewProject.subtitle}</p>
              </div>
              <button
                type="button"
                className="btn-close-modal"
                onClick={closePreview}
                aria-label="Close preview"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Interactive Content */}
            <div className="modal-body-scroll">
              {/* Feature Showcase Tabs */}
              {previewProject.screenshots && previewProject.screenshots.length > 0 && (
                <div className="modal-showcase-section">
                  <div className="showcase-tabs">
                    {previewProject.screenshots.map((s, idx) => (
                      <button
                        key={idx}
                        className={`showcase-tab-btn font-label-mono ${activeTabIdx === idx ? 'active' : ''}`}
                        onClick={() => setActiveTabIdx(idx)}
                      >
                        <Layers size={13} />
                        <span>{s.tag}</span>
                      </button>
                    ))}
                  </div>

                  <div className="showcase-display-box glass-panel">
                    {previewProject.bannerImage ? (
                      <img
                        src={previewProject.bannerImage}
                        alt={previewProject.screenshots[activeTabIdx]?.title}
                        className="showcase-img"
                      />
                    ) : (
                      <div className="showcase-mockup-graphic">
                        <Terminal size={32} className="text-cyan mb-2" />
                        <span className="font-label-mono text-cyan">Live Interactive Interface</span>
                      </div>
                    )}
                    <div className="showcase-caption">
                      <h4 className="caption-title font-body-lg">
                        {previewProject.screenshots[activeTabIdx]?.title}
                      </h4>
                      <p className="caption-desc font-body-md">
                        {previewProject.screenshots[activeTabIdx]?.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Complete Author Ownership Section */}
              <div className="modal-ownership-section">
                <h4 className="modal-section-title font-label-mono">
                  <Award size={16} className="text-emerald" />
                  <span>My Full-Stack Contributions & Architecture</span>
                </h4>
                <div className="modal-ownership-grid">
                  {(previewProject.authorOwnership || previewProject.highlights).map((item, i) => (
                    <div key={i} className="ownership-card glass-panel">
                      <CheckCircle2 size={16} className="text-emerald flex-shrink-0 mt-1" />
                      <span className="font-body-md">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack List */}
              <div className="modal-tech-section">
                <span className="font-label-mono modal-tech-title">Tech Stack & Tools:</span>
                <div className="modal-tech-pills">
                  {previewProject.tech.map((t) => (
                    <span key={t} className="modal-tech-pill font-label-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="modal-footer">
              <a
                href={previewProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary modal-btn-github font-label-mono"
              >
                <GithubIcon size={16} />
                <span>Explore Source Code on GitHub</span>
                <ArrowUpRight size={16} />
              </a>
              <button
                type="button"
                className="btn-modal-close-action font-label-mono"
                onClick={closePreview}
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
