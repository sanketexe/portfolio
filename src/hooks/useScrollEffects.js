import React, { useEffect } from 'react';

// Debounce utility function
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const useScrollEffects = () => {
  useEffect(() => {
    // Parallax effect for tactical grid
    const handleScroll = debounce(() => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      const grid = document.querySelector('.tactical-grid');
      
      if (grid) {
        grid.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    }, 16); // 60fps

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};

export const useIntersectionObserver = (callback, options = {}) => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(entry);
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [callback, options]);
};

export const useSkillBarAnimation = () => {
  useEffect(() => {
    const animateSkillBars = () => {
      const skillBars = document.querySelectorAll('.stat-fill');
      
      const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.style.width;
            bar.style.width = '0%';
            
            setTimeout(() => {
              bar.style.transition = 'width 1.5s ease-out';
              bar.style.width = width;
            }, 200);
            
            skillObserver.unobserve(bar);
          }
        });
      });
      
      skillBars.forEach(bar => {
        skillObserver.observe(bar);
      });
    };

    // Delay to ensure DOM is ready
    const timer = setTimeout(animateSkillBars, 1000);
    
    return () => clearTimeout(timer);
  }, []);
};

export const useGlitchEffect = () => {
  useEffect(() => {
    const triggerGlitchEffect = () => {
      const glitchElements = document.querySelectorAll('.operator-name, .callsign');
      
      glitchElements.forEach(element => {
        element.style.animation = 'glitch 0.3s ease-in-out';
        
        setTimeout(() => {
          element.style.animation = '';
        }, 300);
      });
    };

    // Trigger glitch effect every 10 seconds
    const interval = setInterval(triggerGlitchEffect, 10000);
    
    return () => clearInterval(interval);
  }, []);
};
