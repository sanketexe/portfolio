import React from 'react';
import { experienceTimeline } from '../../data/education';

const ExperienceSection = () => {
  return (
    <section id="experience">
      <h2 className="section-title">Experience</h2>
      <p className="section-subtitle" style={{ 
        textAlign: 'center', 
        maxWidth: '700px', 
        margin: '0 auto var(--space-2xl)', 
        color: 'var(--text-secondary)' 
      }}>
        Leadership roles and contributions in student organizations
      </p>
      
      <div className="grid grid-2" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {experienceTimeline.map((exp) => (
          <div 
            key={exp.id} 
            className="card"
            style={{
              transition: 'var(--transition)',
              cursor: 'pointer',
              height: '100%'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            {/* Header with Icon and Status */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: 'var(--space-lg)'
            }}>
              <span style={{ 
                fontSize: '3rem',
                lineHeight: 1
              }}>
                {exp.icon}
              </span>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: 'var(--space-xs)'
              }}>
                {exp.status && (
                  <span style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    color: 'var(--secondary)',
                    padding: '0.375rem 0.75rem',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    border: '1px solid var(--secondary)',
                    textTransform: 'uppercase'
                  }}>
                    {exp.status}
                  </span>
                )}
                <span style={{
                  background: 'rgba(59, 130, 246, 0.1)',
                  color: 'var(--primary)',
                  padding: '0.375rem 0.75rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  border: '1px solid var(--primary)',
                  textTransform: 'uppercase'
                }}>
                  {exp.type}
                </span>
              </div>
            </div>
            
            {/* Role Title */}
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: 'var(--space-sm)',
              color: 'var(--text-primary)',
              lineHeight: 1.3
            }}>
              {exp.role}
            </h3>
            
            {/* Organization */}
            <p style={{
              color: 'var(--primary)',
              fontWeight: 600,
              fontSize: '1.1rem',
              marginBottom: 'var(--space-xs)'
            }}>
              {exp.organization}
            </p>
            
            {/* Location & Duration */}
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '0.875rem',
              marginBottom: 'var(--space-lg)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-sm)',
              flexWrap: 'wrap'
            }}>
              <span>📍 {exp.location}</span>
              <span>•</span>
              <span>📅 {exp.duration}</span>
            </p>
            
            {/* Description */}
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: 'var(--space-lg)',
              fontSize: '0.95rem'
            }}>
              {exp.description}
            </p>
            
            {/* Highlights */}
            {exp.highlights && (
              <div style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)',
                padding: 'var(--space-lg)',
                borderRadius: 'var(--radius-md)',
                borderLeft: '4px solid var(--primary)',
                marginTop: 'auto'
              }}>
                <h4 style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: 'var(--primary)',
                  marginBottom: 'var(--space-md)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  ⭐ Key Achievements:
                </h4>
                <ul style={{
                  margin: 0,
                  paddingLeft: 'var(--space-lg)',
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem',
                  lineHeight: '1.8'
                }}>
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} style={{ marginBottom: 'var(--space-xs)' }}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
