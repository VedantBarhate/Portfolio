import { useState, useEffect } from 'react';
import { ArrowUpRight, X, ExternalLink } from 'lucide-react';
import projects from '../data/projects';
import './Projects.css';

const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
  </svg>
);

// Helper to consolidate links from both `project.links` and legacy `githubUrl`/`liveUrl`
const getProjectLinks = (project) => {
  const links = [...(project.links || [])];
  if (project.githubUrl && !links.some((l) => l.url === project.githubUrl)) {
    links.push({ label: 'GitHub', url: project.githubUrl, type: 'github' });
  }
  if (project.liveUrl && !links.some((l) => l.url === project.liveUrl)) {
    links.push({ label: 'Live Demo', url: project.liveUrl, type: 'demo' });
  }
  return links;
};

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setActiveProject(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [activeProject]);

  const activeLinks = activeProject ? getProjectLinks(activeProject) : [];

  return (
    <section className="section projects-section" id="work">
      <div className="container">
        {/* Section Header */}
        <div className="section-label">03 / SELECTED WORK</div>
        <h2 className="section-title">Things I've built.</h2>
        <p className="section-description">
          A collection of systems, experiments, and engineering projects exploring
          practical applications of AI and software development. Click any card to explore full technical details.
        </p>

        {/* 2-Column Projects Cards Grid */}
        <div className="projects-grid">
          {projects.map((project) => {
            const projectLinks = getProjectLinks(project);

            return (
              <article
                key={project.id}
                className="project-summary-card"
                onClick={() => setActiveProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveProject(project);
                  }
                }}
                aria-label={`View full details for ${project.title}`}
              >
                {/* Card Top: Index, Title, and Status Badge */}
                <div className="project-card-top">
                  <div className="project-card-index-title">
                    <span className="project-card-index">{project.index}</span>
                    <h3 className="project-card-name">{project.title}</h3>
                  </div>

                  <div className="project-card-top-right">
                    {project.status && (
                      <span className={`project-badge project-badge--${project.statusKind || 'default'}`}>
                        {project.statusKind === 'ongoing' && (
                          <span className="badge-dot" aria-hidden="true"></span>
                        )}
                        {project.status}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Image */}
                {project.image && (
                  <div className="card-image-wrap">
                    <img
                      src={`/projects/${project.image}`}
                      alt={`${project.title} preview`}
                      className="card-image"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Subtitle & Short Description */}
                <div className="project-card-body">
                  <span className="project-card-full-title">{project.fullTitle}</span>
                  <p className="project-card-desc">{project.description}</p>
                </div>

                {/* Card Footer: Tech tags preview, quick links, and explore CTA */}
                <div className="project-card-footer">
                  <div className="project-tech-preview">
                    {project.technologies.slice(0, 3).map((t) => (
                      <span key={t} className="project-tech-pill">{t}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="project-tech-more">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="project-card-actions">
                    {projectLinks.length > 0 && (
                      <div
                        className="project-card-quick-links"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {projectLinks.slice(0, 2).map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="project-quick-link"
                            aria-label={`${project.title} ${link.label}`}
                          >
                            <span>{link.label}</span>
                            <ArrowUpRight size={12} aria-hidden="true" />
                          </a>
                        ))}
                      </div>
                    )}

                    <div className="project-explore-btn">
                      <span>Details</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Full Detail Flashcard Modal */}
        {activeProject && (
          <div
            className="project-modal-backdrop"
            onClick={() => setActiveProject(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeProject.title} details`}
          >
            <div
              className="project-modal"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="project-modal-header">
                <div className="project-modal-header-left">
                  <span className="project-modal-index">{activeProject.index}</span>
                  <div className="project-modal-titles">
                    <h3 className="project-modal-title">{activeProject.title}</h3>
                    <span className="project-modal-full-title">{activeProject.fullTitle}</span>
                  </div>

                  {activeProject.status && (
                    <span className={`project-badge project-badge--${activeProject.statusKind || 'default'}`}>
                      {activeProject.statusKind === 'ongoing' && (
                        <span className="badge-dot" aria-hidden="true"></span>
                      )}
                      {activeProject.status}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  className="project-modal-close-btn"
                  onClick={() => setActiveProject(null)}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="project-modal-body">
                {/* Modal Image */}
                {activeProject.image && (
                  <div className="modal-image-wrap">
                    <img
                      src={`/projects/${activeProject.image}`}
                      alt={`${activeProject.title} preview`}
                      className="modal-image"
                    />
                  </div>
                )}

                {/* Overview Description */}
                <div className="project-modal-section">
                  <span className="project-modal-subheading">Overview</span>
                  <p className="project-modal-description">{activeProject.description}</p>
                </div>

                {/* Project Links (if any exist) */}
                {activeLinks.length > 0 && (
                  <div className="project-modal-section">
                    <span className="project-modal-subheading">Project Links &amp; Resources</span>
                    <div className="project-modal-links-list">
                      {activeLinks.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="project-modal-link-item"
                        >
                          {link.type === 'github' ? (
                            <GithubIcon size={14} />
                          ) : (
                            <ExternalLink size={14} />
                          )}
                          <span>{link.label}</span>
                          <ArrowUpRight size={13} aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technical Highlights / Bullet Details */}
                <div className="project-modal-section">
                  <span className="project-modal-subheading">Technical Details &amp; Contributions</span>
                  <ul className="project-modal-bullets">
                    {activeProject.details.map((detail, idx) => (
                      <li key={idx} className="project-modal-bullet-item">
                        <span className="bullet-dot" aria-hidden="true">·</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Stack */}
                <div className="project-modal-section">
                  <span className="project-modal-subheading">Technologies Used</span>
                  <ul className="project-modal-tech-list" aria-label="Technologies used">
                    {activeProject.technologies.map((t) => (
                      <li key={t} className="project-modal-tech-tag">{t}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="project-modal-footer">
                <span className="modal-tip">Press ESC or click outside to close</span>
                <div className="project-modal-footer-actions">
                  {activeLinks.length > 0 && (
                    <a
                      href={activeLinks[0].url}
                      target="_blank"
                      rel="noreferrer"
                      className="primary-button project-modal-primary-action"
                    >
                      <span>Open {activeLinks[0].label}</span>
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                  <button
                    type="button"
                    className="secondary-button modal-close-action"
                    onClick={() => setActiveProject(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
