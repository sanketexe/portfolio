import React from 'react';

const MissionCard = ({ project }) => {
  // Project image mapping
  const projectImages = {
    'legal-chatbot': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&h=300&fit=crop',
    'civiceye': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&h=300&fit=crop',
    'ai-cloud-scheduler': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop',
    'linkedin-powerbi': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop'
  };

  return (
    <div className="project-card">
      <div className="project-image" style={{ background: project.gradient || 'linear-gradient(135deg, #60a5fa, #14b8a6)' }}>
        {projectImages[project.id] && (
          <img 
            src={projectImages[project.id]} 
            alt={project.title}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        )}
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tags">
          {project.technologies && project.technologies.slice(0, 4).map((tech, index) => (
            <span key={index} className="project-tag">{tech}</span>
          ))}
          {project.technologies && project.technologies.length > 4 && (
            <span className="project-tag">+{project.technologies.length - 4}</span>
          )}
        </div>
        
        <div className="project-links">
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub →
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              Live →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MissionCard;
