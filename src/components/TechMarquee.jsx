import React from 'react';

const marqueeItems = [
  { name: 'Cypress E2E', tag: 'Automated Testing' },
  { name: 'FastAPI', tag: 'Python Backend' },
  { name: 'Vue.js 3', tag: 'Reactive Frontend' },
  { name: 'WebSockets', tag: 'Real-Time Telemetry' },
  { name: 'Laravel', tag: 'Full-Stack PHP' },
  { name: 'Nest.js', tag: 'Enterprise Node.js' },
  { name: 'Postman', tag: 'API Contract Tests' },
  { name: 'Docker', tag: 'Containerization' },
  { name: 'TypeScript', tag: 'Type-Safe Architecture' },
  { name: 'MySQL & PostgreSQL', tag: 'Relational DB' },
  { name: 'Swagger / OpenAPI', tag: 'Documentation' }
];

export default function TechMarquee() {
  return (
    <div className="marquee-container" aria-label="Core Technology Highlights">
      <div className="marquee-fade-left" />
      <div className="marquee-track">
        {/* First copy */}
        <div className="marquee-group">
          {marqueeItems.map((item, idx) => (
            <div key={`m1-${idx}`} className="marquee-item glass-panel">
              <span className="marquee-name font-label-mono">{item.name}</span>
              <span className="marquee-tag">{item.tag}</span>
            </div>
          ))}
        </div>

        {/* Second copy for seamless infinite loop */}
        <div className="marquee-group" aria-hidden="true">
          {marqueeItems.map((item, idx) => (
            <div key={`m2-${idx}`} className="marquee-item glass-panel">
              <span className="marquee-name font-label-mono">{item.name}</span>
              <span className="marquee-tag">{item.tag}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="marquee-fade-right" />
    </div>
  );
}
