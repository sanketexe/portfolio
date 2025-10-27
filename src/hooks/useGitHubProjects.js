import React, { useState, useEffect } from 'react';

export const useGitHubProjects = (username = 'sanketexe') => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Transform GitHub data to match our project format
        const transformedProjects = data.map(repo => ({
          id: repo.name,
          code: repo.name.toUpperCase().replace(/-/g, ' '),
          title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          threatLevel: repo.stargazers_count > 5 ? 'HIGH IMPACT' : 'ACTIVE PROJECT',
          status: repo.fork ? 'FORKED' : 'ACTIVE',
          projectCode: `PROJECT ${repo.name.toUpperCase().slice(0, 3)}`,
          description: repo.description || 'GitHub repository project',
          technicalAchievement: `Developed using ${repo.language || 'Multiple languages'}. ${repo.description || 'Open source project'}`,
          businessImpact: `Contributed to open source community with ${repo.stargazers_count} stars and ${repo.forks_count} forks`,
          technologies: [
            repo.language || 'JavaScript',
            'Git',
            'Open Source',
            repo.fork ? 'Forked Project' : 'Original Project'
          ],
          result: repo.fork ? 'FORKED PROJECT' : 'ACTIVE DEVELOPMENT',
          gradient: getGradientForLanguage(repo.language),
          githubUrl: repo.html_url,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          language: repo.language,
          updatedAt: repo.updated_at
        }));
        
        setProjects(transformedProjects);
        setError(null);
      } catch (err) {
        console.error('Error fetching GitHub projects:', err);
        setError(err.message);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProjects();
  }, [username]);

  return { projects, loading, error };
};

// Helper function to get gradient based on programming language
const getGradientForLanguage = (language) => {
  const gradients = {
    'JavaScript': 'linear-gradient(135deg, #f7df1e 0%, #f0db4f 50%, #f7df1e 100%)',
    'Python': 'linear-gradient(135deg, #3776ab 0%, #4b8bbe 50%, #3776ab 100%)',
    'C++': 'linear-gradient(135deg, #00599c 0%, #004482 50%, #00599c 100%)',
    'HTML': 'linear-gradient(135deg, #e34c26 0%, #f06529 50%, #e34c26 100%)',
    'CSS': 'linear-gradient(135deg, #1572b6 0%, #33a9dc 50%, #1572b6 100%)',
    'PHP': 'linear-gradient(135deg, #777bb4 0%, #8892be 50%, #777bb4 100%)',
    'Java': 'linear-gradient(135deg, #ed8b00 0%, #f89820 50%, #ed8b00 100%)',
    'TypeScript': 'linear-gradient(135deg, #3178c6 0%, #2d79c7 50%, #3178c6 100%)',
    'Go': 'linear-gradient(135deg, #00add8 0%, #00a8cc 50%, #00add8 100%)',
    'Rust': 'linear-gradient(135deg, #ce422b 0%, #d73c49 50%, #ce422b 100%)'
  };
  
  return gradients[language] || 'linear-gradient(135deg, #39FF14 0%, #7FFF00 50%, #39FF14 100%)';
};
