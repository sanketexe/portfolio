import React from 'react';
import { interests } from '../../data/certifications';

const InterestsSection = () => {
  return (
    <section id="intel">
      <h2 className="section-title">Interests</h2>
      
      <div className="grid grid-2">
        {interests.map(interest => (
          <div key={interest.id} className="card" style={{ padding: 0, overflow: 'hidden' }}>
            {/* Image */}
            {interest.image && (
              <div style={{
                width: '100%',
                height: '200px',
                overflow: 'hidden'
              }}>
                <img 
                  src={interest.image} 
                  alt={interest.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            )}
            
            {/* Content */}
            <div style={{ padding: 'var(--space-xl)' }}>
              <h3 style={{ marginBottom: 'var(--space-md)' }}>{interest.title}</h3>
              <p style={{ marginBottom: 'var(--space-lg)' }}>{interest.description}</p>
            
            {interest.helpOffered && (
              <div style={{ 
                background: 'rgba(59, 130, 246, 0.1)', 
                padding: 'var(--space-md)', 
                borderRadius: 'var(--radius-md)',
                marginBottom: 'var(--space-lg)',
                borderLeft: '3px solid var(--primary)'
              }}>
                <p style={{ 
                  color: 'var(--primary)', 
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  margin: 0
                }}>
                  💡 {interest.helpOffered}
                </p>
              </div>
            )}

            {interest.channels && interest.channels.length > 0 && (
              <div style={{ marginBottom: 'var(--space-lg)' }}>
                <h4 style={{ 
                  fontSize: '1rem', 
                  color: 'var(--secondary)',
                  marginBottom: 'var(--space-md)',
                  fontWeight: 600
                }}>
                  📺 Recommended Channels:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {interest.channels.map((channel, index) => (
                    <a
                      key={index}
                      href={channel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--primary)',
                        textDecoration: 'none',
                        padding: '0.5rem 0.75rem',
                        background: 'rgba(59, 130, 246, 0.05)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        transition: 'var(--transition)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.9rem',
                        fontWeight: 500
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = 'rgba(59, 130, 246, 0.15)';
                        e.currentTarget.style.borderColor = 'var(--primary)';
                        e.currentTarget.style.transform = 'translateX(5px)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'rgba(59, 130, 246, 0.05)';
                        e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.2)';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <span>▶</span>
                      <span>{channel.name}</span>
                      <span style={{ marginLeft: 'auto', fontSize: '0.8rem' }}>→</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {interest.books && interest.books.length > 0 && (
              <div style={{ marginBottom: 'var(--space-lg)' }}>
                <h4 style={{ 
                  fontSize: '1rem', 
                  color: 'var(--secondary)',
                  marginBottom: 'var(--space-md)',
                  fontWeight: 600
                }}>
                  📚 Recommended Books:
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {interest.books.map((book, index) => (
                    <div
                      key={index}
                      style={{
                        color: 'var(--text-primary)',
                        padding: '0.5rem 0.75rem',
                        background: 'rgba(6, 182, 212, 0.1)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid rgba(6, 182, 212, 0.3)',
                        fontSize: '0.875rem',
                        fontWeight: 500,
                        transition: 'var(--transition)'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = 'rgba(6, 182, 212, 0.2)';
                        e.currentTarget.style.borderColor = 'var(--secondary)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.3)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      📖 {book}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {interest.topics && interest.topics.length > 0 && (
              <div className="project-tags" style={{ marginTop: 'auto' }}>
                {interest.topics.map((topic, index) => (
                  <span key={index} className="project-tag">{topic}</span>
                ))}
              </div>
            )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InterestsSection;
