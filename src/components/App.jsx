import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import About from './About';
import Experience from './Experience'
import Projects from './Projects';
import Skills from './Skills'
import Contact from './Contact';
import { PortfolioProvider } from '../context/context';
import { heroData, aboutData, experienceData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [experience, setExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
    setExperience([ ...experienceData ]);
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer, experience }}>
      <Hero />
      <About />
      <Experience/>
      <Projects />
      <Skills/>
      <Contact />
      {/* <Footer /> */}
    </PortfolioProvider>
  );
}

export default App;
