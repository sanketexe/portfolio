// Smooth scroll utility
export const smoothScrollTo = (elementId, offset = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Get active section based on scroll position
export const getActiveSection = () => {
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  return current;
};

// Format date utility
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Format GitHub date
export const formatGitHubDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 1) return '1 day ago';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.ceil(diffDays / 30)} months ago`;
  return `${Math.ceil(diffDays / 365)} years ago`;
};

// Console easter egg
export const initConsoleEasterEgg = () => {
  console.log('%c🚀 Professional Portfolio Loaded', 'color: #3b82f6; font-size: 18px; font-weight: bold;');
  console.log('%cSanket Shende - AI Solutions Architect', 'color: #06b6d4; font-size: 14px; font-weight: 600;');
  console.log('%cमनसा वाचा कर्मणा - By Mind, Word, and Deed', 'color: #fbbf24; font-size: 12px; font-style: italic;');
  console.log('%cBuilding the future with AI-driven solutions.', 'color: #94a3b8; font-size: 12px;');
  console.log('%cExplore the code: https://github.com/sanketshende', 'color: #10b981; font-size: 11px;');
};
