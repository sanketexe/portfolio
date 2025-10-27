import React from 'react';
import { personalInfo } from '../../data/personalInfo';

const AboutSection = () => {
  return (
    <section id="campaign">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-2">
        <div className="card" style={{ 
          background: 'linear-gradient(135deg, var(--bg-card) 0%, rgba(59, 130, 246, 0.05) 100%)',
        }}>
          <h3 style={{ 
            color: 'var(--primary)',
            fontSize: '1.75rem',
            marginBottom: 'var(--space-lg)',
            fontWeight: 700
          }}>
            Professional Summary
          </h3>
          <p style={{ 
            fontSize: '1.05rem',
            lineHeight: 1.8,
            marginBottom: 'var(--space-xl)'
          }}>
            <span style={{ 
              color: 'var(--primary)',
              fontWeight: 700,
              fontSize: '1.1rem'
            }}>
              {personalInfo.role}
            </span> specializing in machine learning, deep learning, and intelligent systems development. 
            Experienced in building and deploying AI models, data analytics, and creating innovative solutions using cutting-edge technologies.
          </p>
          
          <div style={{ 
            marginTop: 'var(--space-xl)',
            padding: 'var(--space-lg)',
            background: 'rgba(59, 130, 246, 0.08)',
            borderRadius: 'var(--radius-lg)',
            borderLeft: '4px solid var(--primary)'
          }}>
            <div style={{ marginBottom: 'var(--space-md)' }}>
              <span style={{ 
                color: 'var(--secondary)',
                fontWeight: 700,
                fontSize: '0.95rem',
                display: 'inline-block',
                minWidth: '150px'
              }}>
                Education:
              </span>
              <span style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                {personalInfo.education.primary}
              </span>
            </div>
            <div style={{ marginBottom: 'var(--space-md)' }}>
              <span style={{ 
                color: 'var(--secondary)',
                fontWeight: 700,
                fontSize: '0.95rem',
                display: 'inline-block',
                minWidth: '150px'
              }}>
                Additional Studies:
              </span>
              <span style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                {personalInfo.education.additional}
              </span>
            </div>
            <div style={{ marginBottom: 'var(--space-md)' }}>
              <span style={{ 
                color: 'var(--secondary)',
                fontWeight: 700,
                fontSize: '0.95rem',
                display: 'inline-block',
                minWidth: '150px'
              }}>
                Location:
              </span>
              <span style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>
                {personalInfo.location}
              </span>
            </div>
          </div>
        </div>
        
        <div className="card" style={{ 
          background: 'linear-gradient(135deg, var(--bg-card) 0%, rgba(6, 182, 212, 0.05) 100%)',
        }}>
          <h3 style={{ 
            color: 'var(--secondary)',
            fontSize: '1.75rem',
            marginBottom: 'var(--space-lg)',
            fontWeight: 700
          }}>
            Core Competencies
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            {personalInfo.competencies.map((competency, index) => {
              const [title, description] = competency.split(':');
              return (
                <div 
                  key={index} 
                  style={{ 
                    padding: 'var(--space-lg)',
                    background: 'rgba(6, 182, 212, 0.08)',
                    borderRadius: 'var(--radius-md)',
                    borderLeft: '3px solid var(--secondary)',
                    transition: 'var(--transition)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(6, 182, 212, 0.15)';
                    e.currentTarget.style.transform = 'translateX(8px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(6, 182, 212, 0.08)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={{ 
                    color: 'var(--secondary)',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    marginBottom: '0.5rem'
                  }}>
                    {title.trim()}
                  </div>
                  <div style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                    lineHeight: 1.6
                  }}>
                    {description.trim()}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
