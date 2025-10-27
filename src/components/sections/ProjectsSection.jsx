import React from 'react';
import { projects } from '../../data/projects';
import ProjectCard from '../common/ProjectCard';

const ProjectsSection = () => {
  return (
    <section id="operations">
      <h2 className="section-title">Projects</h2>
      
      <div className="projects-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
