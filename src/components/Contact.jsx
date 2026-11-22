import { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';
import './Contact.css';

/* Inline brand icons */
const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const XIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GlobeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const DiscordIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  x: XIcon,
  twitter: XIcon,
  discord: DiscordIcon,
  globe: GlobeIcon,
  website: GlobeIcon,
};

/**
 * Easy to add, remove, or reorder profile links here!
 * Supported types: 'github', 'linkedin', 'instagram', 'x', 'twitter', 'discord', 'globe'
 */
const profileLinks = [
  { label: 'GitHub', href: 'https://github.com/VedantBarhate', type: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vedant-barhate-63b94025a/', type: 'linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/vedantbarhate007', type: 'instagram' },
  // Examples to easily add more:
  // { label: 'X (Twitter)', href: 'https://x.com/...', type: 'x' },
  // { label: 'Discord', href: 'https://discord.gg/...', type: 'discord' },
  // { label: 'Website', href: 'https://...', type: 'globe' },
];

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'vedant.barhate27@gmail.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-label">09 / CONTACT</div>
        <h2 className="section-title">Let's connect.</h2>
        <p className="section-description">
          Interested in AI, machine learning, research, or building something meaningful?
          Feel free to reach out.
        </p>

        {/* Structured 2-column contact card */}
        <div className="contact-card">
          {/* Left Column: Direct Email */}
          <div className="contact-card-col contact-email-col">
            <span className="contact-subheading">Email directly</span>
            <p className="contact-col-desc">
              Have an opportunity, collaboration, or question? Send an email anytime.
            </p>

            <div className="contact-email-row">
              <a
                href={`mailto:${email}`}
                className="contact-email-link"
                aria-label={`Send email to ${email}`}
              >
                <Mail size={18} className="contact-icon" aria-hidden="true" />
                <span className="contact-email-text">{email}</span>
              </a>

              <button
                type="button"
                className="contact-copy-btn"
                onClick={handleCopy}
                aria-label="Copy email address to clipboard"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check size={14} className="copy-icon-success" aria-hidden="true" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} aria-hidden="true" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Online Profiles & Socials */}
          <div className="contact-card-col contact-profiles-col">
            <span className="contact-subheading">Online profiles</span>
            <p className="contact-col-desc">
              Connect or follow along with my work across platforms.
            </p>

            <div className="contact-links-grid">
              {profileLinks.map(({ label, href, type, Icon: CustomIcon }) => {
                const IconComponent = CustomIcon || iconMap[type] || GlobeIcon;

                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-link-item"
                    aria-label={`${label} profile (opens in a new tab)`}
                  >
                    <div className="contact-link-left">
                      <IconComponent size={18} aria-hidden="true" className="contact-profile-icon" />
                      <span className="contact-link-label">{label}</span>
                    </div>
                    <ArrowUpRight size={14} className="external-icon" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
