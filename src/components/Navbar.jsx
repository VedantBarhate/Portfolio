import { useState } from 'react';
import { Sun, Moon, ArrowUpRight, Menu, X } from 'lucide-react';
import './Navbar.css';

const navigation = [
  { label: 'About',      href: '#about' },
  { label: 'Work',       href: '#work' },
  { label: 'Research',   href: '#research' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills' },
];

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#" className="logo" aria-label="VB.007 Portfolio">
          VB<span>.007</span>
        </a>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navigation.map(item => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle colour theme"
            title="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <a href="#contact" className="nav-contact">
            Let's talk <ArrowUpRight size={15} />
          </a>

          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
