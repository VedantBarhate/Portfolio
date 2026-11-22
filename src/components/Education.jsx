import { MapPin, Calendar, Award } from 'lucide-react';
import education from '../data/education';
import './Education.css';

function Education() {
  return (
    <section className="section education-section" id="education">
      <div className="container">
        <div className="section-label">07 / EDUCATION</div>
        <h2 className="section-title">Academic background.</h2>

        <div className="education-list">
          {education.map((item) => (
            <article key={item.id} className="education-card">
              <div className="education-primary">
                <h3 className="education-degree">{item.degree}</h3>
                <div className="education-institution">{item.institution}</div>
                <div className="education-location">
                  <MapPin size={13} className="edu-icon" aria-hidden="true" />
                  <span>{item.location}</span>
                </div>
              </div>

              <div className="education-secondary">
                <div className="education-duration">
                  <Calendar size={13} className="edu-icon" aria-hidden="true" />
                  <span>{item.duration}</span>
                </div>
                <div className="education-performance">
                  <Award size={13} className="edu-icon" aria-hidden="true" />
                  <span>{item.performance}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
