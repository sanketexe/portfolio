import React from 'react';
import { certifications } from '../../data/certifications';

const CertificationsSection = () => {
  return (
    <section id="certifications">
      <h2 className="section-title">Certifications</h2>
      
      <div className="grid grid-2">
        {certifications.map(cert => (
          <div key={cert.id} className="card">
            <a 
              href={cert.image} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'block',
                width: '100%',
                height: '200px',
                borderRadius: 'var(--radius-md)',
                marginBottom: 'var(--space-lg)',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
                border: '2px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: 'var(--space-md)',
                transition: 'var(--transition)',
                cursor: 'pointer',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'var(--primary)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(6, 182, 212, 0.15) 100%)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)';
              }}
            >
              <svg 
                width="64" 
                height="64" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="var(--primary)" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <span style={{
                color: 'var(--primary)',
                fontWeight: 600,
                fontSize: '1rem'
              }}>
                View Certificate
              </span>
            </a>
            <h3>{cert.title}</h3>
            <p style={{ color: 'var(--secondary)', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>
              {cert.issuer}
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 'var(--space-md)' }}>
              Issued: {cert.date} | Status: {cert.status}
            </p>
            <p>{cert.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
