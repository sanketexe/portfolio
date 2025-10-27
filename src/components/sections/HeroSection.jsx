import React from 'react';
import { personalInfo } from '../../data/personalInfo';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80;
      const elementPosition = section.offsetTop;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hq" className="hero-section">
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--space-3xl)',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: 'var(--space-xl)',
        width: '100%'
      }}>
        {/* Photo on Left */}
        <div style={{
          flex: '0 0 auto'
        }}>
          <div style={{
            width: '280px',
            height: '280px',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '4px solid var(--primary)',
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.3)'
          }}>
            <img 
              src="/images/profile.jpg" 
              alt={personalInfo.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>

        {/* Text Content on Right */}
        <div style={{
          flex: '1 1 500px',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-md)',
          textAlign: 'left'
        }}>
          <h1 style={{ 
            marginBottom: '0.5rem',
            background: 'linear-gradient(135deg, #60a5fa, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            {personalInfo.name}
          </h1>
          
          <p style={{ 
            fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', 
            fontWeight: 600, 
            color: 'var(--secondary)',
            margin: 0
          }}>
            {personalInfo.role}
          </p>
          
          <p style={{ 
            fontStyle: 'italic', 
            fontSize: '1.1rem', 
            color: 'var(--primary)',
            fontWeight: 500,
            margin: '0.5rem 0'
          }}>
            "मनसा वाचा कर्मणा" — By thought, word, and deed
          </p>
          
          <p style={{ 
            color: 'var(--text-secondary)',
            lineHeight: '1.8',
            margin: '0.5rem 0',
            fontSize: '1.1rem'
          }}>
            {personalInfo.summary}
          </p>
          
          <div style={{ 
            display: 'flex',
            gap: 'var(--space-md)',
            flexWrap: 'wrap',
            marginTop: 'var(--space-md)' 
          }}>
            <button 
              className="btn btn-primary" 
              onClick={() => scrollToSection('operations')}
            >
              View Projects
            </button>
            <button 
              className="btn btn-outline" 
              onClick={() => scrollToSection('campaign')}
            >
              About Me
            </button>
            <button 
              className="btn btn-outline" 
              onClick={() => scrollToSection('comms')}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
