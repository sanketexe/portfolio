import React from 'react';
import { personalInfo } from '../../data/personalInfo';

const ContactSection = () => {
  const contactChannels = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: personalInfo.email,
      url: `mailto:${personalInfo.email}`
    },
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      value: 'github.com/sanketexe',
      url: personalInfo.github
    },
    {
      icon: 'fab fa-linkedin',
      label: 'LinkedIn',
      value: 'Professional Network',
      url: personalInfo.linkedin
    }
  ];

  return (
    <section id="comms">
      <h2 className="section-title">Contact</h2>
      
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <p style={{ textAlign: 'center', marginBottom: 'var(--space-xl)', color: 'var(--text-muted)' }}>
          Feel free to reach out for collaborations, opportunities, or just a friendly chat.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          {contactChannels.map((channel, index) => (
            <a
              key={index}
              href={channel.url}
              className="card"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-md)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem'
              }}>
                <i className={channel.icon}></i>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{channel.label}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{channel.value}</div>
              </div>
              <i className="fas fa-arrow-right" style={{ color: 'var(--primary)' }}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
