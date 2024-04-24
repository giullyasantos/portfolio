import React, { useState, useEffect, useRef} from 'react';
import './App.css';

import giullya from './images/giullya.jpg';

const App = () => {
  const [currentSection, setCurrentSection] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true); 

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    const sectionIds = ['home', 'about', 'projects', 'contact'];
    sectionIds.forEach(id => {
      observer.observe(document.getElementById(id));
    });

    return () => {
      sectionIds.forEach(id => {
        observer.unobserve(document.getElementById(id));
      });
    };
  }, []);

  const handleNavigation = (id) => {
    const offset = 0; 
    const element = document.getElementById(id);
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClass = isDarkMode ? 'darkMode' : 'lightMode';

  return (
    <div className={`app ${themeClass}`}>
    <div className= "navBar">
           <label class="toggle" for="switch">
        <input onClick={toggleTheme} id="switch" className="input" type="checkbox"/>
        <div className="icon icon--moon">
          <svg height="32" width="32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" fill-rule="evenodd"></path>
          </svg>
        </div>
        <div className="icon icon--sun">
          <svg height="32" width="32" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
          </svg>
        </div>
      </label>
    </div>
    <div className="sidebar">
      <div className= "sidebarLine">
        <button onClick={() => handleNavigation('home')} className={currentSection === 'home' ? 'active' : ''}></button>
        <button onClick={() => handleNavigation('about')} className={currentSection === 'about' ? 'active aboutActive' : ''}></button>
        <button onClick={() => handleNavigation('projects')} className={currentSection === 'projects' ? 'active' : ''}></button>
        <button onClick={() => handleNavigation('contact')} className={currentSection === 'contact' ? 'active contactActive' : ''}></button>
      </div>
    </div>
      <div className="content">
        <div id="home" className="section homeSection">
          <h1 style={{ color: "var(--accent-color)" }}>GIULLYA VITÓRIA</h1>
          <p>hey! i am a frontend developer and web designer!</p>
        </div>
        <div id="about" className="section">
          <h1>A bit about me</h1>
          <p>Learn more about our team and the history of our company.</p>
        </div>
        <div id="projects" className="section">
          <div>
            <h1>My Work</h1>
            <p>Here are some of the projects that I've made.</p>
          </div>
          <div className="projects">
            <button id="pwmd" className="project">
              <h3>People Who Make A Difference</h3>
              <p>Web Design</p>
            </button>
            <button id="rainbow" className="project">
              <h3>Rainbow Real Painting</h3>
              <p>Web Design</p>
            </button>
            <button id="heavenTheWay" className="project">
              <h3>Heaven The Way</h3>
              <p>Web Design</p>
            </button>
            <button id="bibleChurch" className="project">
              <h3>Bible Church</h3>
              <p>Web Design and Development</p>
            </button>
            <button id="wedding" className="project">
              <h3>Damaris And Sidiclei</h3>
              <p>Web Design and Development</p>
            </button>
          </div>
        </div>
        <div id="contact" className="section">
          <h1>Get in touch!</h1>
          <p>Get in touch with us through the following contact details or send us a message using our contact form.</p>
        </div>
      </div>
        <footer className="footer">
          <p>© 2024 Giullya Santos. Loosely designed in my head and coded in the notepad and VS Code by yours truly. Built with React, raw CSS, and open-source items.</p> 
      </footer>
    </div>
  );
}

export default App;
