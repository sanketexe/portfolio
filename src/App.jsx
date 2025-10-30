import React, { useEffect } from 'react';
import './styles/index.css';

// Layout Components
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';

// Section Components
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import EducationTimeline from './components/sections/EducationTimeline';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import InterestsSection from './components/sections/InterestsSection';
import CertificationsSection from './components/sections/CertificationsSection';
import ServiceRecordSection from './components/sections/ServiceRecordSection';
import ContactSection from './components/sections/ContactSection';

// Hooks and Utils
import { useScrollEffects, useSkillBarAnimation } from './hooks/useScrollEffects';
import { validateAriaLabels } from './utils/accessibility';

function App() {
  // Initialize scroll effects
  useScrollEffects();
  useSkillBarAnimation();

  useEffect(() => {
    // Accessibility validation in development
    if (process.env.NODE_ENV === 'development') {
      setTimeout(() => {
        const appElement = document.querySelector('.App');
        if (appElement) {
          const ariaIssues = validateAriaLabels(appElement);
          if (ariaIssues.length > 0) {
            console.warn('🔍 Accessibility Issues Found:', ariaIssues);
          } else {
            console.log('✅ No ARIA label issues found');
          }
        }
      }, 2000);
    }
  }, []);

  return (
    <div className="App" lang="en">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      <Navigation />
      
      <main id="main-content" role="main">
        <HeroSection />
        <AboutSection />
        <EducationTimeline />
        <ProjectsSection />
        <SkillsSection />
        <InterestsSection />
        <CertificationsSection />
        <ServiceRecordSection />
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* Background Pattern */}
      <div className="background-pattern" aria-hidden="true"></div>
    </div>
  );
}

export default App;