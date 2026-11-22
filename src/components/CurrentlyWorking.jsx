import { useState, useEffect } from 'react';
import { ArrowUpRight, X, ExternalLink, Layers } from 'lucide-react';
import currentWork from '../data/currentWork';
import './CurrentlyWorking.css';

/* Pipeline step component */
function PipelineStep({ label, index, total }) {
  const isLast = index === total - 1;
  return (
    <>
      <div className="pipeline-step">
        <span className="pipeline-index">0{index + 1}</span>
        <span className="pipeline-label">{label}</span>
      </div>
      {!isLast && (
        <div className="pipeline-arrow" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M3.5 9h11M10 4.5l4.5 4.5L10 13.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </>
  );
}

function CurrentlyWorking() {
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

  return (
    <section className="section working-section" id="working">
      <div className="container">
        {/* Section header */}
        <div className="section-label">02 / CURRENT FOCUS</div>
        <h2 className="section-title">Currently exploring.</h2>
        <p className="section-description">
          A closer look at what I'm building right now. Click any card to explore full technical details.
        </p>

        {/* Compact Cards Grid (supports multiple projects) */}
        <div className="working-cards-grid">
          {currentWork.map((project) => (
            <article
              key={project.id}
              className="working-summary-card"
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
              {/* Card Image */}
              {project.image && (
                <div className="card-image-wrap">
                  <img
                    src={`/currentwork/${project.image}`}
                    alt={`${project.title} preview`}
                    className="card-image"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="summary-card-top">
                <span className="summary-category">{project.category}</span>
                <span className="summary-status">
                  <span className="status-dot" aria-hidden="true"></span>
                  {project.status}
                </span>
              </div>

              <div className="summary-card-header">
                <h3 className="summary-title">{project.title}</h3>
                <span className="summary-full-title">{project.fullTitle}</span>
              </div>

              <p className="summary-description">{project.shortDescription}</p>

              <div className="summary-footer">
                <div className="summary-tech-preview">
                  {project.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="summary-tech-pill">{t}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="summary-tech-more">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="summary-explore-btn">
                  <span>Explore details</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Flashcard Modal Overlay */}
        {activeProject && (
          <div
            className="flashcard-backdrop"
            onClick={() => setActiveProject(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeProject.title} details`}
          >
            <div
              className="flashcard-modal"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="modal-header">
                <div className="modal-meta">
                  <span className="eric-category">{activeProject.category}</span>
                  <span className="eric-status">
                    <span className="status-dot" aria-hidden="true"></span>
                    {activeProject.status}
                  </span>
                </div>

                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={() => setActiveProject(null)}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Title */}
              <h3 className="modal-title">
                <span className="modal-title-abbr">{activeProject.title}</span>
                <span className="modal-title-sep">—</span>
                <span className="modal-title-full">
                  {activeProject.fullTitle.replace(`${activeProject.title} — `, '')}
                </span>
              </h3>

              {/* Modal Scrollable Body */}
              <div className="modal-body">
                {/* Modal Image */}
                {activeProject.image && (
                  <div className="modal-image-wrap">
                    <img
                      src={`/currentwork/${activeProject.image}`}
                      alt={`${activeProject.title} preview`}
                      className="modal-image"
                    />
                  </div>
                )}

                {/* Two Column Section: Descriptions & Highlights */}
                <div className="modal-two-col">
                  {/* Left Column */}
                  <div className="modal-left">
                    <p className="eric-short">{activeProject.shortDescription}</p>
                    <p className="eric-detail">{activeProject.detailedDescription}</p>

                    {/* Technology Stack */}
                    <div className="modal-section-block">
                      <span className="modal-block-label">Technology Stack</span>
                      <ul className="eric-tech-list" aria-label="Technology stack">
                        {activeProject.technologies.map((t) => (
                          <li key={t} className="eric-tech-tag">{t}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Project Links (if any exist) */}
                    {activeProject.links && activeProject.links.length > 0 && (
                      <div className="modal-section-block">
                        <span className="modal-block-label">Project Links</span>
                        <div className="modal-links-list">
                          {activeProject.links.map((link) => (
                            <a
                              key={link.url}
                              href={link.url}
                              target="_blank"
                              rel="noreferrer"
                              className="modal-link-item"
                            >
                              <span>{link.label}</span>
                              <ExternalLink size={13} aria-hidden="true" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Milestones */}
                  <div className="modal-right">
                    <div className="eric-milestones">
                      <h4 className="eric-milestones-title">Progress highlights</h4>
                      <ul className="eric-milestones-list">
                        {activeProject.milestones.map((m) => (
                          <li key={m.label} className="eric-milestone">
                            <span className="milestone-label">{m.label}</span>
                            <span className="milestone-value">{m.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Pipeline Flow */}
                {activeProject.pipeline && activeProject.pipeline.length > 0 && (
                  <div className="modal-pipeline-wrap">
                    <div className="pipeline-header">
                      <Layers size={14} className="pipeline-icon" aria-hidden="true" />
                      <h4 className="eric-pipeline-title">Technical pipeline</h4>
                    </div>
                    <div className="eric-pipeline" role="list" aria-label="Technical pipeline">
                      {activeProject.pipeline.map((step, i) => (
                        <PipelineStep
                          key={step}
                          label={step}
                          index={i}
                          total={activeProject.pipeline.length}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="modal-footer">
                <span className="modal-tip">Press ESC or click outside to close</span>
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
        )}
      </div>
    </section>
  );
}

export default CurrentlyWorking;
