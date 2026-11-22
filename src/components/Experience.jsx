import { MapPin, Calendar } from 'lucide-react';
import experience from '../data/experience';
import './Experience.css';

function ExperienceItem({ item }) {
  return (
    <article className="experience-item">
      {/* Left Column: Role, Company & Context */}
      <div className="experience-meta-col">
        <div className="experience-period">
          <Calendar size={13} className="experience-icon" aria-hidden="true" />
          <span>{item.period}</span>
        </div>

        <h3 className="experience-role">{item.role}</h3>
        <div className="experience-company">{item.company}</div>

        <div className="experience-details-meta">
          <span className="experience-type">{item.employmentType}</span>
          <span className="meta-sep" aria-hidden="true">·</span>
          <span className="experience-location">
            <MapPin size={12} className="experience-icon" aria-hidden="true" />
            <span>{item.location}</span>
          </span>
        </div>
      </div>

      {/* Right Column: Contributions, Description & Tech */}
      <div className="experience-content-col">
        {item.project && (
          <div className="experience-project-badge">
            <span className="project-badge-label">Project</span>
            <span className="project-badge-name">{item.project}</span>
          </div>
        )}

        <p className="experience-summary">{item.description}</p>

        <ul className="experience-contributions" aria-label="Key contributions">
          {item.contributions.map((contribution, idx) => (
            <li key={idx}>{contribution}</li>
          ))}
        </ul>

        <ul className="experience-tech-list" aria-label="Technologies and work areas">
          {item.technologies.map((tech) => (
            <li key={tech} className="experience-tech-tag">{tech}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-label">05 / EXPERIENCE</div>
        <h2 className="section-title">Where I've contributed.</h2>
        <p className="section-description">
          Industry experience, collaborative development, and practical software engineering.
        </p>

        {/* Experience List */}
        <div className="experience-list">
          {experience.map((item) => (
            <ExperienceItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
