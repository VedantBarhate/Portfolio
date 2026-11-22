import { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Sparkles, FileText } from 'lucide-react';
import './Hero.css';

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

function Hero() {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section className="hero container">
      <div className="hero-content">
        <div className="availability">
          <span className="status-dot"></span>
          Computer Science Undergraduate
        </div>

        <p className="hero-intro">HELLO, I'M</p>

        <h1 className="hero-name">
          Vedant
          <br />
          <span>Barhate.</span>
        </h1>

        <h2 className="hero-tagline">
          Building intelligent systems through AI &amp; engineering.
        </h2>

        <p className="hero-description">
          I explore the intersection of Artificial Intelligence,
          Generative AI and applied research — turning ideas into
          practical systems.
        </p>

        {/* Location */}
        <div className="hero-location">
          <MapPin size={15} />
          <span>Pune, India</span>
        </div>

        {/* Links right below location with full text */}
        <div className="hero-social-links">
          <a
            href="https://github.com/VedantBarhate"
            target="_blank"
            rel="noreferrer"
            className="hero-social-link"
            aria-label="GitHub profile"
          >
            <GithubIcon size={15} />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/vedant-barhate-63b94025a"
            target="_blank"
            rel="noreferrer"
            className="hero-social-link"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon size={15} />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:vedant.barhate27@gmail.com"
            className="hero-social-link"
            aria-label="Email vedant.barhate27@gmail.com"
          >
            <Mail size={15} />
            <span>vedant.barhate27@gmail.com</span>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="hero-buttons">
          <a href="#work" className="primary-button">
            Explore my work <ArrowUpRight size={17} />
          </a>
          <a href="#contact" className="secondary-button">
            Get in touch
          </a>
        </div>
      </div>

      {/* Profile Photo & Resume Area */}
      <div className="hero-image-area">
        <div className="hero-image-wrapper">
          {!photoError ? (
            <img
              src="/profile.jpg"
              alt="Vedant Barhate"
              className="hero-profile-img"
              onError={() => setPhotoError(true)}
            />
          ) : (
            <div className="image-placeholder-content">
              <Sparkles size={27} />
              <p>Photograph</p>
            </div>
          )}
        </div>

        <span className="image-caption">VEDANT BARHATE · 2026</span>

        {/* Single Resume Button */}
        <div className="hero-resume-actions">
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hero-resume-btn"
            title="Open Resume in new tab"
            aria-label="Open Resume in a new tab"
          >
            <FileText size={14} aria-hidden="true" />
            <span>Resume</span>
            <ArrowUpRight size={13} className="resume-ext-icon" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
