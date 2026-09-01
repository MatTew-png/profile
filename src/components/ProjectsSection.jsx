import React, { useState, useEffect } from 'react';
import {
  Code2,
  ArrowUpRight,
  Eye,
  X,
  Sparkles,
  Layers,
  Award,
  CheckCircle2,
  ShieldCheck,
  Coffee,
  Activity,
  FileText,
  ChevronRight
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { projects } from '../data/projects';
import { MagneticButton } from './ui/MagneticButton';
import { BackgroundGradient } from './ui/BackgroundGradient';
import { ProjectMockupBanner } from './ProjectMockupBanner';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [previewProject, setPreviewProject] = useState(null);
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  const filters = ['All', 'Full-Stack', 'Backend / IoT'];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Full-Stack') return project.category.includes('Full-Stack');
    if (activeFilter === 'Backend / IoT') return project.category.includes('Backend');
    return true;
  });

  const openPreview = (project) => {
    setPreviewProject(project);
    setActiveTabIdx(0);
  };

  const closePreview = () => {
    setPreviewProject(null);
  };

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
        return <Coffee size={24} className="text-emerald" />;
      case 'iot':
        return <Activity size={24} className="text-cyan" />;
      default:
        return <FileText size={24} className="text-purple" />;
    }
  };

  return (
    <section id="projects" className="section-spacing scroll-animate">
      <div className="section-header reveal-on-scroll">
        <div className="badge-pill">
          <Code2 size={14} className="badge-icon" />
          <span>Engineering Portfolio</span>
        </div>
        <h2 className="font-headline-md section-title">Featured Projects</h2>
        <p className="font-body-md section-subtitle">
          Real-world systems built with clean architecture, modern frameworks, and robust automated testing.
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

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, idx) => (
          <article
            key={project.id}
            className={`project-card glass-panel reveal-on-scroll stagger-${(idx % 3) + 1} ${
              project.featured ? 'is-featured' : ''
            }`}
          >
            {/* Visual Real Project Screenshot Banner */}
            <div
              className="project-banner-box"
              onClick={() => openPreview(project)}
              role="button"
              tabIndex={0}
              title="Click to view full-resolution UI screenshots"
            >
              <div className="banner-img-wrap">
                <img
                  src={project.bannerImage}
                  alt={project.title}
                  className="banner-img"
                  loading="lazy"
                />
                <div className="banner-badge font-label-mono">
                  <Eye size={13} />
                  <span>View Full UI & Details</span>
                </div>
              </div>
            </div>

            {/* Card Content Header */}
            <div className="project-header-row">
              <span
                className="project-badge-tag font-label-mono"
                style={{ borderColor: project.accentColor, color: project.accentColor }}
              >
                {project.badge}
              </span>
              <span className="project-role-text font-label-mono">{project.role}</span>
            </div>

            <h3 className="project-card-title font-headline-md">{project.title}</h3>
            <p className="project-card-desc font-body-md">{project.description}</p>

            {/* Concise Core Contributions */}
            <div className="project-key-points">
              <span className="key-points-title font-label-mono">Core Highlights:</span>
              <ul className="key-points-list">
                {(project.authorOwnership || project.highlights).slice(0, 3).map((pt, i) => (
                  <li key={i}>
                    <CheckCircle2 size={15} className="point-icon text-cyan" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Chips */}
            <div className="project-tech-chips">
              {project.tech.map((t) => (
                <span key={t} className="tech-chip font-label-mono">
                  {t}
                </span>
              ))}
            </div>

            {/* Action Buttons with Magnetic Physics */}
            <div className="project-card-actions">
              <MagneticButton>
                <button
                  type="button"
                  className="btn-card-preview font-label-mono"
                  onClick={() => openPreview(project)}
                >
                  <Eye size={15} />
                  <span>View Details & UI</span>
                </button>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-card-github font-label-mono"
                >
                  <GithubIcon size={15} />
                  <span>GitHub</span>
                  <ArrowUpRight size={14} />
                </a>
              </MagneticButton>
            </div>
          </article>
        ))}
      </div>

      {/* ========================================================================= */}
      {/* Interactive Clean Details Modal */}
      {/* ========================================================================= */}
      {previewProject && (
        <div className="clean-modal-backdrop" onClick={closePreview}>
          <div
            className="clean-modal-dialog glass-panel"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="clean-modal-header">
              <div className="clean-modal-title-group">
                <span
                  className="modal-badge-chip font-label-mono"
                  style={{ borderColor: previewProject.accentColor, color: previewProject.accentColor }}
                >
                  {previewProject.badge}
                </span>
                <h3 className="modal-title font-headline-md">{previewProject.title}</h3>
                <p className="modal-subtitle font-body-md">{previewProject.subtitle}</p>
              </div>
              <button
                type="button"
                className="clean-modal-close-btn"
                onClick={closePreview}
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="clean-modal-body">
              {/* Feature Showcase Tabs */}
              {previewProject.screenshots && previewProject.screenshots.length > 0 && (
                <div className="modal-showcase-block">
                  <div className="showcase-nav-tabs">
                    {previewProject.screenshots.map((s, idx) => (
                      <button
                        key={idx}
                        className={`showcase-nav-btn font-label-mono ${activeTabIdx === idx ? 'active' : ''}`}
                        onClick={() => setActiveTabIdx(idx)}
                      >
                        <Layers size={13} />
                        <span>{s.tag}</span>
                      </button>
                    ))}
                  </div>

                  <div className="showcase-preview-frame">
                    <img
                      src={previewProject.bannerImage}
                      alt={previewProject.screenshots[activeTabIdx]?.title}
                      className="showcase-frame-img"
                    />
                    <div className="showcase-frame-info">
                      <h4 className="frame-info-title font-body-lg">
                        {previewProject.screenshots[activeTabIdx]?.title}
                      </h4>
                      <p className="frame-info-desc font-body-md">
                        {previewProject.screenshots[activeTabIdx]?.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Engineering Contributions */}
              <div className="modal-details-section">
                <h4 className="details-section-title font-label-mono">
                  <Award size={16} className="text-emerald" />
                  <span>My Core Contributions & Architecture</span>
                </h4>
                <div className="details-grid">
                  {(previewProject.authorOwnership || previewProject.highlights).map((item, i) => (
                    <div key={i} className="detail-item-card glass-panel">
                      <CheckCircle2 size={16} className="text-emerald flex-shrink-0 mt-1" />
                      <span className="font-body-md">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quality Assurance Box */}
              {previewProject.testMetrics && (
                <div className="modal-qa-card">
                  <div className="modal-qa-header font-label-mono">
                    <ShieldCheck size={16} className="text-emerald" />
                    <span>Automated Quality Assurance & Test Coverage</span>
                  </div>
                  <div className="modal-qa-grid">
                    <div className="modal-qa-item">
                      <span className="qa-k font-label-mono">Framework</span>
                      <span className="qa-v">{previewProject.testMetrics.tool}</span>
                    </div>
                    <div className="modal-qa-item">
                      <span className="qa-k font-label-mono">Coverage</span>
                      <span className="qa-v text-emerald">{previewProject.testMetrics.coverage}</span>
                    </div>
                    <div className="modal-qa-item">
                      <span className="qa-k font-label-mono">Test Scope</span>
                      <span className="qa-v">{previewProject.testMetrics.testType}</span>
                    </div>
                    <div className="modal-qa-item">
                      <span className="qa-k font-label-mono">Automated Specs</span>
                      <span className="qa-v text-cyan">{previewProject.testMetrics.suiteCount}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="clean-modal-footer">
              <a
                href={previewProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary footer-btn-github font-label-mono"
              >
                <GithubIcon size={16} />
                <span>View Source Code on GitHub</span>
                <ArrowUpRight size={16} />
              </a>
              <button
                type="button"
                className="footer-btn-close font-label-mono"
                onClick={closePreview}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
