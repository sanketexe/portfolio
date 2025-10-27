import React from 'react';
import { skills } from '../../data/skills';

const SkillsSection = () => {
  return (
    <section id="loadout">
      <h2 className="section-title">Skills</h2>
      
      <div className="skills-grid">
        {skills.primary.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-name">
              <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{skill.name}</span>
              <span style={{ color: 'var(--secondary)', fontWeight: 700 }}>{skill.proficiency}%</span>
            </div>
            <div className="skill-bar">
              <div 
                className="skill-progress" 
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {skills.equipment && skills.equipment.length > 0 && (
        <div style={{ marginTop: 'var(--space-3xl)' }}>
          <h3 style={{ 
            textAlign: 'center', 
            marginBottom: 'var(--space-2xl)', 
            color: 'var(--secondary)', 
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: 700
          }}>
            Tools & Technologies
          </h3>
          <div className="skills-grid">
            {skills.equipment.map((equipment, index) => (
              <div 
                key={index} 
                className="skill-card"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)',
                  borderColor: 'rgba(59, 130, 246, 0.3)'
                }}
              >
                <div className="skill-name" style={{ justifyContent: 'center' }}>
                  <span style={{ 
                    color: 'var(--primary)', 
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    textAlign: 'center'
                  }}>
                    {equipment}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SkillsSection;
