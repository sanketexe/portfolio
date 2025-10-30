import React from 'react';
import { educationTimeline } from '../../data/education';

const EducationTimeline = () => {
  return (
    <section id="timeline">
      <h2 className="section-title">Timeline</h2>
      <p className="section-subtitle" style={{ 
        textAlign: 'center', 
        maxWidth: '700px', 
        margin: '0 auto var(--space-2xl)', 
        color: 'var(--text-secondary)' 
      }}>
        My academic journey from school to specialized technical education
      </p>
      
      <div className="timeline-container" style={{
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        padding: '0 var(--space-lg)'
      }}>
        {/* Timeline Line */}
        <div style={{
          position: 'absolute',
          left: '50%',
          top: '0',
          bottom: '0',
          width: '3px',
          background: 'linear-gradient(180deg, var(--primary) 0%, var(--secondary) 100%)',
          transform: 'translateX(-50%)',
          opacity: '0.3'
        }} className="timeline-line" />
        
        {educationTimeline.map((edu, index) => (
          <div 
            key={edu.id} 
            className="timeline-item"
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 'var(--space-2xl)',
              position: 'relative',
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
            }}
          >
            {/* Timeline Dot */}
            <div style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '20px',
              height: '20px',
              background: 'var(--primary)',
              borderRadius: '50%',
              border: '4px solid var(--bg-primary)',
              boxShadow: '0 0 0 4px var(--primary)',
              zIndex: 2,
              transition: 'var(--transition)'
            }} 
            className="timeline-dot"
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateX(-50%) scale(1.3)';
              e.currentTarget.style.boxShadow = '0 0 0 8px rgba(59, 130, 246, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateX(-50%) scale(1)';
              e.currentTarget.style.boxShadow = '0 0 0 4px var(--primary)';
            }}
            />
            
            {/* Content Card */}
            <div 
              className="card"
              style={{
                width: 'calc(50% - 50px)',
                marginLeft: index % 2 === 0 ? '0' : 'auto',
                marginRight: index % 2 === 0 ? 'auto' : '0',
                transition: 'var(--transition)',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              {/* Icon and Year */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 'var(--space-md)'
              }}>
                <span style={{ fontSize: '2rem' }}>{edu.icon}</span>
                <span style={{
                  background: edu.status ? 'rgba(16, 185, 129, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                  color: edu.status ? 'var(--secondary)' : 'var(--primary)',
                  padding: '0.375rem 0.75rem',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  border: `1px solid ${edu.status ? 'var(--secondary)' : 'var(--primary)'}`
                }}>
                  {edu.status || edu.year}
                </span>
              </div>
              
              {/* Degree */}
              <h3 style={{
                fontSize: '1.25rem',
                marginBottom: 'var(--space-sm)',
                color: 'var(--text-primary)'
              }}>
                {edu.degree}
              </h3>
              
              {/* Institution */}
              <p style={{
                color: 'var(--primary)',
                fontWeight: 600,
                marginBottom: 'var(--space-xs)',
                fontSize: '1rem'
              }}>
                {edu.institution}
              </p>
              
              {/* Location & Duration */}
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.875rem',
                marginBottom: 'var(--space-md)'
              }}>
                📍 {edu.location} • 📅 {edu.duration}
              </p>
              
              {/* Description */}
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                marginBottom: edu.highlights ? 'var(--space-md)' : '0'
              }}>
                {edu.description}
              </p>
              
              {/* Highlights */}
              {edu.highlights && (
                <div style={{
                  background: 'rgba(59, 130, 246, 0.05)',
                  padding: 'var(--space-md)',
                  borderRadius: 'var(--radius-md)',
                  borderLeft: '3px solid var(--primary)'
                }}>
                  <h4 style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--primary)',
                    marginBottom: 'var(--space-sm)'
                  }}>
                    Key Highlights:
                  </h4>
                  <ul style={{
                    margin: 0,
                    paddingLeft: 'var(--space-lg)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.875rem',
                    lineHeight: '1.8'
                  }}>
                    {edu.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .timeline-line {
            left: 30px !important;
          }
          
          .timeline-item {
            flex-direction: row !important;
            padding-left: 60px;
          }
          
          .timeline-dot {
            left: 30px !important;
          }
          
          .timeline-item .card {
            width: 100% !important;
            margin: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default EducationTimeline;
