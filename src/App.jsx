import { useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CurrentlyWorking from './components/CurrentlyWorking';
import Projects from './components/Projects';
import Research from './components/Research';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return (
      localStorage.getItem('portfolio-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    );
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(current => (current === 'light' ? 'dark' : 'light'));

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <CurrentlyWorking />
        <Projects />
        <Research />
        <Experience />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
