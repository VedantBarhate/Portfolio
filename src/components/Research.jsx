import { useState, useEffect } from 'react';
import { ArrowUpRight, X, ExternalLink, BookOpen } from 'lucide-react';
import { researchPapers, researchInterests } from '../data/research';
import './Research.css';

function Research() {
  const [activePaper, setActivePaper] = useState(null);

  // Lock body scroll and listen for Escape key when modal is open
  useEffect(() => {
    if (activePaper) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setActivePaper(null);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [activePaper]);

  return (
    <section className="section research-section" id="research">
      <div className="container">
        {/* Section Header */}
        <div className="section-label">04 / RESEARCH</div>
        <h2 className="section-title">Research &amp; exploration.</h2>
        <p className="section-description">
          Investigating how intelligent systems behave, learn, and adapt through
          experimentation and evaluation. Click any paper card to explore full methodology and findings.
        </p>

        {/* Compact Research Cards Grid (supports multiple papers) */}
        <div className="research-cards-grid">
          {researchPapers.map((paper) => (
            <article
              key={paper.id}
              className="research-summary-card"
              onClick={() => setActivePaper(paper)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActivePaper(paper);
                }
              }}
              aria-label={`View full research details for ${paper.title}`}
            >
              {/* Card Meta Top: Badge + Direct Paper Link */}
              <div className="summary-card-top">
                <span className="research-badge">{paper.status}</span>
                {paper.paperUrl && (
                  <a
                    href={paper.paperUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="research-card-direct-link"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Read paper: ${paper.title}`}
                  >
                    <span>Read paper</span>
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                )}
              </div>

              {/* Card Image */}
              {paper.image && (
                <div className="card-image-wrap">
                  <img
                    src={`/research/${paper.image}`}
                    alt={`${paper.title} preview`}
                    className="card-image"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Title & Short Description */}
              <div className="research-card-content">
                <h3 className="research-card-title">{paper.title}</h3>
                <p className="research-card-desc">{paper.shortDescription}</p>
              </div>

              {/* Card Footer: Model preview tags + Explore CTA */}
              <div className="research-card-footer">
                <div className="research-models-preview">
                  {paper.methodology?.models?.map((model) => (
                    <span key={model} className="research-model-tag">{model}</span>
                  ))}
                </div>

                <div className="research-explore-cta">
                  <span>Explore flashcard</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Full Detail Flashcard Modal */}
        {activePaper && (
          <div
            className="research-modal-backdrop"
            onClick={() => setActivePaper(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${activePaper.title} details`}
          >
            <div
              className="research-modal"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="research-modal-header">
                <div className="research-modal-meta">
                  <span className="paper-status-badge">{activePaper.status}</span>
                  {activePaper.paperUrl && (
                    <a
                      href={activePaper.paperUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="paper-link"
                    >
                      Read full paper on Zenodo <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  className="research-modal-close-btn"
                  onClick={() => setActivePaper(null)}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Scrollable Body */}
              <div className="research-modal-body">
                {/* Modal Title & Overview */}
                <div className="research-modal-title-wrap">
                  <h3 className="research-modal-title">{activePaper.title}</h3>
                  <p className="research-modal-summary">{activePaper.shortDescription}</p>
                </div>

                {/* Modal Image */}
                {activePaper.image && (
                  <div className="modal-image-wrap">
                    <img
                      src={`/research/${activePaper.image}`}
                      alt={`${activePaper.title} preview`}
                      className="modal-image"
                    />
                  </div>
                )}

                {/* Research Question */}
                <div className="research-question-block">
                  <span className="section-subheading">Research Question</span>
                  <blockquote className="research-question-quote">
                    "{activePaper.researchQuestion}"
                  </blockquote>
                </div>

                {/* Experimental Methodology */}
                <div className="methodology-section">
                  <span className="section-subheading">Experimental Methodology</span>

                  <div className="methodology-grid">
                    {/* Models & Precisions */}
                    <div className="methodology-col">
                      <span className="method-col-title">Models Evaluated</span>
                      <ul className="method-pills">
                        {activePaper.methodology?.models?.map((model) => (
                          <li key={model} className="method-pill">{model}</li>
                        ))}
                      </ul>

                      <span className="method-col-title method-col-subhead">Precisions</span>
                      <ul className="method-pills">
                        {activePaper.methodology?.precisions?.map((prec) => (
                          <li key={prec} className="method-pill">{prec}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Design Matrix */}
                    <div className="methodology-col">
                      <span className="method-col-title">Experimental Scope</span>
                      <dl className="method-scope-list">
                        {activePaper.methodology?.design?.map((item) => (
                          <div key={item.label} className="method-scope-row">
                            <dt className="scope-label">{item.label}</dt>
                            <dd className="scope-value">{item.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    {/* Evaluation Dimensions */}
                    <div className="methodology-col">
                      <span className="method-col-title">Evaluation Dimensions</span>
                      <div className="evaluation-dimensions">
                        {activePaper.methodology?.dimensions?.map((dim) => (
                          <div key={dim.name} className="dim-item">
                            <span className="dim-name">{dim.name}</span>
                            <p className="dim-desc">{dim.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Findings */}
                <div className="findings-section">
                  <span className="section-subheading">Key Findings</span>

                  <div className="findings-stats-grid">
                    {activePaper.findings?.stats?.map((stat) => (
                      <div key={stat.label} className="stat-card">
                        <div className="stat-metric">{stat.metric}</div>
                        <div className="stat-label">{stat.label}</div>
                        <p className="stat-detail">{stat.detail}</p>
                      </div>
                    ))}
                  </div>

                  <div className="findings-takeaway-block">
                    <span className="takeaway-tag">Core Takeaway</span>
                    <p className="takeaway-text">"{activePaper.findings?.takeaway}"</p>
                    <span className="takeaway-note">{activePaper.findings?.note}</span>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="research-modal-footer">
                <span className="modal-tip">Press ESC or click outside to close</span>
                <div className="research-modal-actions">
                  {activePaper.paperUrl && (
                    <a
                      href={activePaper.paperUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="primary-button research-modal-paper-btn"
                    >
                      Read Paper <ArrowUpRight size={14} />
                    </a>
                  )}
                  <button
                    type="button"
                    className="secondary-button modal-close-action"
                    onClick={() => setActivePaper(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Research Areas of Interest */}
        <div className="research-interests">
          <h3 className="interests-title">Areas of interest</h3>
          <ul className="interests-tags" aria-label="Research areas of interest">
            {researchInterests.map((interest) => (
              <li key={interest} className="interest-tag">{interest}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Research;
