import React from 'react';
import { Calendar, Briefcase, GraduationCap, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/experience';

export default function ExperienceTimeline() {
  const getIcon = (type) => {
    switch (type) {
      case 'availability':
        return Sparkles;
      case 'education':
        return GraduationCap;
      case 'academic':
        return Users;
      default:
        return Briefcase;
    }
  };

  return (
    <section id="experience" className="section-spacing scroll-animate">
      <div className="section-header reveal-on-scroll">
        <div className="badge-pill">
          <Calendar size={14} className="badge-icon" />
          <span>Journey & Milestones</span>
        </div>
        <h2 className="font-headline-md section-title">Experience & Education</h2>
        <p className="font-body-md section-subtitle">
          My academic foundation, instructional leadership, and current career trajectory.
        </p>
      </div>

      <div className="timeline-wrapper">
        <div className="timeline-line" />

        {experiences.map((exp, idx) => {
          const Icon = getIcon(exp.type);
          const isLeft = idx % 2 === 0;

          return (
            <div
              key={idx}
              className={`timeline-item ${isLeft ? 'left' : 'right'} reveal-on-scroll stagger-${(idx % 3) + 1}`}
            >
              {/* Timeline Center Node */}
              <div className="timeline-node">
                <Icon size={16} className="node-icon" />
              </div>

              {/* Date Opposite on Desktop */}
              <div className="timeline-date-opposite font-label-mono">
                {exp.period}
              </div>

              {/* Content Card */}
              <div className="timeline-card glass-panel">
                <div className="timeline-card-header">
                  <span className="timeline-date-mobile font-label-mono">{exp.period}</span>
                  <span className="timeline-badge font-label-mono">{exp.badge}</span>
                </div>

                <h3 className="timeline-title font-body-lg">{exp.title}</h3>
                <p className="timeline-role font-label-mono">{exp.role} • {exp.organization}</p>
                <p className="timeline-desc font-body-md">{exp.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
