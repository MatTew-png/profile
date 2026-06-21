import React, { useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Environment, ContactShadows } from '@react-three/drei';
import { Sun, Moon, Menu } from 'lucide-react';
import './App.css';

// 1. Custom Cursor Component
function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const handleMouseOver = (e) => {
      // Add hover effect if targeting clickable elements
      if (e.target.closest('a') || e.target.closest('button') || e.target.closest('.glass-panel')) {
        cursor.classList.add('hovering');
      } else {
        cursor.classList.remove('hovering');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return <div className="custom-cursor" ref={cursorRef} />;
}

// 2. Interactive 3D Model Component
function GlassShape() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[2, 0]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={1}
          chromaticAberration={0.5}
          anisotropy={0.2}
          distortion={0.5}
          distortionScale={0.5}
          temporalDistortion={0.1}
          color="#7dd3fc"
        />
      </mesh>
    </Float>
  );
}

function Hero3D() {
  return (
    <div className="hero-3d-wrapper glass-panel">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Environment preset="city" />
        <GlassShape />
        <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2} far={4} />
      </Canvas>
    </div>
  );
}

// Main App Component
function App() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.body.classList.toggle('light-theme');
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.style.opacity = '1';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      el.style.opacity = '0';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeFilter]); // re-run when filter changes because elements are re-rendered

  const allProjects = [
    {
      title: 'Patient Movement Monitoring System',
      role: 'Backend Developer',
      tech: ['FastAPI', 'WebSocket', 'MySQL', 'Python', 'Postman'],
      description: 'Developed backend APIs and real-time WebSocket alerts for a sensor-based monitoring system. Tested API endpoints using Postman and Swagger UI.'
    },
    {
      title: 'Complaint Management System',
      role: 'Full-Stack Developer',
      tech: ['Laravel', 'Vue.js', 'Cypress', 'PHP'],
      description: 'Built a web system with Role-Based Access Control (RBAC) for handling user complaints. Wrote E2E test scripts using Cypress to verify critical user flows.'
    },
    {
      title: 'Coffee Shop POS System',
      role: 'Full-Stack Developer',
      tech: ['Nest.js', 'Vue.js', 'Cypress', 'TypeScript'],
      description: 'Created a Point-of-Sale system to manage order processing and multi-branch data. Ran basic UI tests using Cypress during development.'
    }
  ];

  const filters = ['All', 'Vue.js', 'FastAPI', 'Laravel', 'Nest.js', 'Cypress'];

  const filteredProjects = activeFilter === 'All'
    ? allProjects
    : allProjects.filter(p => p.tech.includes(activeFilter));

  const techStack = [
    {
      category: 'Frontend',
      items: [
        { name: 'Vue.js', icon: 'https://svgl.app/library/vue.svg' },
        { name: 'React', icon: 'https://svgl.app/library/react_light.svg' },
        { name: 'Quasar', icon: 'https://cdn.simpleicons.org/quasar/1976d2' },
        { name: 'Tailwind CSS', icon: 'https://svgl.app/library/tailwindcss.svg' },
        { name: 'HTML/CSS', icon: 'https://svgl.app/library/html5.svg' }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'FastAPI', icon: 'https://svgl.app/library/fastapi.svg' },
        { name: 'Nest.js', icon: 'https://svgl.app/library/nestjs.svg' },
        { name: 'Laravel', icon: 'https://svgl.app/library/laravel.svg' }
      ]
    },
    {
      category: 'Languages',
      items: [
        { name: 'Python', icon: 'https://svgl.app/library/python.svg' },
        { name: 'TypeScript', icon: 'https://svgl.app/library/typescript.svg' },
        { name: 'JavaScript', icon: 'https://svgl.app/library/javascript.svg' },
        { name: 'PHP', icon: 'https://svgl.app/library/php.svg' },
        { name: 'SQL', icon: 'https://svgl.app/library/postgresql.svg' }
      ]
    },
    {
      category: 'Testing & Tools',
      items: [
        { name: 'Cypress', icon: 'https://svgl.app/library/cypress.svg' },
        { name: 'Postman', icon: 'https://svgl.app/library/postman.svg' },
        { name: 'Swagger', icon: 'https://svgl.app/library/swagger.svg' },
        { name: 'Git', icon: 'https://svgl.app/library/git.svg' },
        { name: 'Docker', icon: 'https://svgl.app/library/docker.svg' }
      ]
    }
  ];

  return (
    <>
      <CustomCursor />

      {/* Header */}
      <header className="header">
        <a href="#" className="font-label-mono header-logo">PHATTHARRAPHON J.</a>

        <button aria-label="Toggle Menu" className="mobile-menu-btn">
          <Menu size={24} />
        </button>

        <nav className="header-nav">
          <a href="#about" className="font-label-mono active">About</a>
          <a href="#experience" className="font-label-mono">Experience</a>
          <a href="#stack" className="font-label-mono">Stack</a>
          <a href="#projects" className="font-label-mono">Projects</a>
          <a href="#contact" className="font-label-mono">Contact</a>

          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </nav>
      </header>

      <main className="main-content container">
        {/* Hero Section */}
        <section id="about" className="section-spacing hero-section scroll-animate">
          <Hero3D />
          <div className="hero-text">
            <h1 className="font-display-lg hero-title animate-fade-in-up">Hello, I am Phattharraphon Jansanga</h1>
            <h2 className="font-headline-md hero-subtitle animate-fade-in-up delay-100">Application Developer | Full-Stack Developer | Automated Tester</h2>
            <p className="font-body-lg hero-description animate-fade-in-up delay-200">
              I am a Computer Science student with a foundation in full-stack web development and a growing interest in Automated Testing. I enjoy solving real-world problems through code and am eager to contribute effectively to QA and development processes.
            </p>
            <div className="hero-actions animate-fade-in-up delay-300">
              <a href="#projects" className="font-label-mono button-primary">View Projects</a>
              <a href="#contact" className="font-label-mono button-secondary">Get in Touch</a>
            </div>
          </div>
        </section>

        {/* Experience Timeline Section */}
        <section id="experience" className="section-spacing scroll-animate">
          <div className="section-header">
            <h2 className="font-headline-md section-title">Experience & Education</h2>
            <p className="font-body-md section-subtitle">My professional and academic journey</p>
          </div>

          <div className="roadmap">
            <div className="roadmap-item left scroll-animate">
              <div className="roadmap-dot"></div>
              <div className="roadmap-date-opposite font-label-mono">CURRENT</div>
              <div className="roadmap-content glass-panel">
                <span className="font-label-mono roadmap-date-mobile">CURRENT</span>
                <h3 className="font-body-lg">Exploring Opportunities</h3>
                <p className="font-body-md">
                  Available to start immediately and ready for Hybrid Work. Exploring opportunities in IT and freelance roles.
                </p>
              </div>
            </div>

            <div className="roadmap-item right scroll-animate delay-100">
              <div className="roadmap-dot"></div>
              <div className="roadmap-date-opposite font-label-mono">EXPECTED APR 2026</div>
              <div className="roadmap-content glass-panel">
                <span className="font-label-mono roadmap-date-mobile">EXPECTED APR 2026</span>
                <h3 className="font-body-lg">B.Sc. in Computer Science</h3>
                <p className="font-body-md">
                  Burapha University. Building a strong foundation in software engineering, algorithms, and full-stack development.
                </p>
              </div>
            </div>

            <div className="roadmap-item left scroll-animate delay-200">
              <div className="roadmap-dot"></div>
              <div className="roadmap-date-opposite font-label-mono">ACADEMIC EXPERIENCE</div>
              <div className="roadmap-content glass-panel">
                <span className="font-label-mono roadmap-date-mobile">ACADEMIC EXPERIENCE</span>
                <h3 className="font-body-lg">Teaching Assistant</h3>
                <p className="font-body-md">
                  Experienced as a Teaching Assistant for courses including Exploratory Data Analysis and Relational Database. Mentored students and assisted in practical labs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="stack" className="section-spacing scroll-animate">
          <div className="section-header">
            <h2 className="font-headline-md section-title">Technical Stack</h2>
            <p className="font-body-md section-subtitle">Tools and technologies I work with</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {techStack.map((category, idx) => (
              <div key={idx} className="scroll-animate" style={{ animationDelay: `${idx * 100}ms` }}>
                <h3 className="font-label-mono section-subtitle" style={{ marginBottom: '16px', color: 'var(--primary)' }}>{category.category}</h3>
                <div className="tech-grid">
                  {category.items.map((tech, i) => (
                    <div key={i} className="tech-item glass-panel">
                      <img src={tech.icon} alt={tech.name} style={{ width: '48px', height: '48px', marginBottom: '16px', objectFit: 'contain' }} />
                      <span className="font-label-mono" style={{ color: 'var(--on-surface)', fontSize: '14px', textAlign: 'center' }}>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-spacing scroll-animate">
          <div className="section-header">
            <h2 className="font-headline-md section-title">Featured Projects</h2>
            <p className="font-body-md section-subtitle">Highlighting my work across full-stack development and testing</p>
          </div>

          {/* Project Filters */}
          <div className="project-filters scroll-animate">
            {filters.map(filter => (
              <button
                key={filter}
                className={`font-label-mono filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="projects-list">
            {filteredProjects.map((project, idx) => (
              <article key={project.title} className="project-card glass-panel scroll-animate" style={{ animationDelay: `${idx * 100}ms` }}>
                <h3 className="font-headline-md project-title">{project.title}</h3>
                <p className="font-label-mono" style={{ color: 'var(--secondary)', marginBottom: '16px' }}>{project.role}</p>
                <p className="font-body-md project-description">
                  {project.description}
                </p>
                <div className="project-tags">
                  {project.tech.map(tech => (
                    <span key={tech} className="font-label-mono project-tag">{tech}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-spacing scroll-animate">
          <div className="section-header">
            <h2 className="font-headline-md section-title">Let's Connect</h2>
            <p className="font-body-md section-subtitle">Ready for opportunities or a quick chat!</p>
          </div>

          <div className="glass-panel" style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p className="font-body-lg" style={{ textAlign: 'center', marginBottom: '32px', color: 'var(--on-surface)' }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `mailto:jansanga.new@gmail.com?subject=Contact from Portfolio`;
              }}
            >
              <div className="form-group">
                <label className="font-label-mono" style={{ color: 'var(--primary)' }}>Name</label>
                <input type="text" className="form-input" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label className="font-label-mono" style={{ color: 'var(--primary)' }}>Email</label>
                <input type="email" className="form-input" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label className="font-label-mono" style={{ color: 'var(--primary)' }}>Message</label>
                <textarea className="form-input" rows="4" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="font-label-mono button-primary" style={{ alignSelf: 'flex-start', marginTop: '16px' }}>
                Send Message via Email
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="footer scroll-animate">
        <p className="font-label-mono">© 2026 PHATTHARRAPHON JANSANGA. ALL RIGHTS RESERVED.</p>
        <div className="footer-socials">
          <a href="mailto:jansanga.new@gmail.com" className="font-label-mono">jansanga.new@gmail.com</a>
          <a href="#" className="font-label-mono">GitHub</a>
          <a href="#" className="font-label-mono">LinkedIn</a>
        </div>
      </footer>
    </>
  );
}

export default App;
