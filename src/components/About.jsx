import { useState } from 'react';
import { User } from 'lucide-react';
import './About.css';

const focusAreas = [
  'Artificial Intelligence & Machine Learning',
  'Large Language Models',
  'Generative AI & RAG',
  'Computer Vision',
  'Applied ML Research',
  'AI Systems Engineering',
];

function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="section" id="about">
      <div className="container">
        {/* Header */}
        <div className="section-label">01 / ABOUT</div>
        <h2 className="section-title">A little about me.</h2>

        {/* Two-column body */}
        <div className="about-body">
          <div className="about-image-card">
            {!imgError ? (
              <img
                src="/about.jpg"
                alt="Vedant Barhate"
                className="about-image"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="about-image-placeholder">
                <User size={28} className="about-placeholder-icon" />
                <span className="about-placeholder-text">Photo · about.jpg</span>
              </div>
            )}
          </div>

          <div className="about-copy">
            <p className="about-statement">
              I'm a Computer Science undergraduate interested in building
              intelligent systems that connect machine learning research with
              practical engineering.
            </p>
            <div className="about-detail">
              <p>
                Currently pursuing my B.Tech in Computer Science and Engineering
                at MIT Art, Design and Technology University, Pune.
              </p>
              <p>
                My work primarily revolves around Artificial Intelligence and
                Machine Learning, with interests spanning Large Language Models,
                Generative AI, Computer Vision, and applied research.
              </p>
              <p>
                I enjoy exploring how models work, experimenting with different
                approaches, and turning those experiments into functional systems.
                My projects range from offline retrieval-augmented generation
                systems to vision-based applications and research-oriented
                evaluation frameworks.
              </p>
            </div>
          </div>
        </div>

        {/* Focus areas */}
        <div className="about-focus">
          <h3 className="about-focus-title">Areas I work around</h3>
          <ul className="about-tags" aria-label="Focus areas">
            {focusAreas.map((area) => (
              <li key={area} className="about-tag">{area}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
