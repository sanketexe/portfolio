/**
 * Accessibility Utility
 * Provides functions for WCAG 2.1 AA compliance and accessibility enhancements
 */

/**
 * Calculate color contrast ratio between two colors
 * @param {string} color1 - First color (hex, rgb, or hsl)
 * @param {string} color2 - Second color (hex, rgb, or hsl)
 * @returns {number} - Contrast ratio (1-21)
 */
export function getContrastRatio(color1, color2) {
  const luminance1 = getLuminance(color1);
  const luminance2 = getLuminance(color2);
  
  const lighter = Math.max(luminance1, luminance2);
  const darker = Math.min(luminance1, luminance2);
  
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Get relative luminance of a color
 * @param {string} color - Color value
 * @returns {number} - Relative luminance (0-1)
 */
function getLuminance(color) {
  const rgb = hexToRgb(color);
  if (!rgb) return 0;
  
  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Convert hex color to RGB
 * @param {string} hex - Hex color value
 * @returns {Object|null} - RGB object or null if invalid
 */
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * Check if color combination meets WCAG AA standards
 * @param {string} foreground - Foreground color
 * @param {string} background - Background color
 * @param {string} level - 'AA' or 'AAA'
 * @param {string} size - 'normal' or 'large'
 * @returns {boolean} - Whether combination meets standards
 */
export function meetsWCAGStandards(foreground, background, level = 'AA', size = 'normal') {
  const ratio = getContrastRatio(foreground, background);
  
  const requirements = {
    'AA': { normal: 4.5, large: 3 },
    'AAA': { normal: 7, large: 4.5 }
  };
  
  return ratio >= requirements[level][size];
}

/**
 * Validate color palette for accessibility
 * @param {Object} palette - Color palette object
 * @returns {Object} - Validation results
 */
export function validateColorPalette(palette) {
  const results = {
    passed: [],
    failed: [],
    warnings: []
  };
  
  // Define color combinations to test based on new Deep Ocean Professional theme
  const combinations = [
    { name: 'Primary text on dark background', fg: '#f8fafc', bg: '#0f172a' },
    { name: 'Secondary text on dark background', fg: '#94a3b8', bg: '#0f172a' },
    { name: 'Muted text on dark background', fg: '#64748b', bg: '#0f172a' },
    { name: 'Accent blue on dark background', fg: '#3b82f6', bg: '#0f172a' },
    { name: 'Accent cyan on dark background', fg: '#06b6d4', bg: '#0f172a' },
    { name: 'Sanskrit gold on dark background', fg: '#fbbf24', bg: '#0f172a' },
    { name: 'Sanskrit copper on dark background', fg: '#ea580c', bg: '#0f172a' },
    { name: 'Success green on dark background', fg: '#10b981', bg: '#0f172a' },
    { name: 'Warning amber on dark background', fg: '#f59e0b', bg: '#0f172a' },
    { name: 'Error red on dark background', fg: '#ef4444', bg: '#0f172a' },
    { name: 'Primary text on card background', fg: '#f8fafc', bg: '#1e293b' },
    { name: 'Secondary text on card background', fg: '#94a3b8', bg: '#1e293b' },
    { name: 'Accent blue on card background', fg: '#3b82f6', bg: '#1e293b' },
    { name: 'Accent cyan on card background', fg: '#06b6d4', bg: '#1e293b' },
    { name: 'Primary text on elevated surface', fg: '#f8fafc', bg: '#334155' },
    { name: 'Secondary text on elevated surface', fg: '#94a3b8', bg: '#334155' }
  ];
  
  combinations.forEach(combo => {
    const ratio = getContrastRatio(combo.fg, combo.bg);
    const meetsAA = meetsWCAGStandards(combo.fg, combo.bg, 'AA', 'normal');
    const meetsAAA = meetsWCAGStandards(combo.fg, combo.bg, 'AAA', 'normal');
    
    const result = {
      name: combo.name,
      ratio: ratio.toFixed(2),
      meetsAA,
      meetsAAA,
      foreground: combo.fg,
      background: combo.bg
    };
    
    if (meetsAA) {
      results.passed.push(result);
    } else {
      results.failed.push(result);
    }
    
    if (ratio < 3) {
      results.warnings.push(`Very low contrast: ${combo.name} (${ratio.toFixed(2)}:1)`);
    }
  });
  
  return results;
}

/**
 * Create screen reader announcement
 * @param {string} message - Message to announce
 * @param {string} priority - 'polite' or 'assertive'
 */
export function announceToScreenReader(message, priority = 'polite') {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  
  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

/**
 * Check if user prefers reduced motion
 * @returns {boolean} - Whether user prefers reduced motion
 */
export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Apply reduced motion preferences
 * @param {HTMLElement} element - Element to apply preferences to
 */
export function applyReducedMotionPreferences(element) {
  if (prefersReducedMotion()) {
    element.classList.add('reduce-motion');
  }
}

/**
 * Ensure proper focus management
 * @param {HTMLElement} element - Element to focus
 * @param {Object} options - Focus options
 */
export function manageFocus(element, options = {}) {
  if (!element) return;
  
  const { preventScroll = false, delay = 0 } = options;
  
  setTimeout(() => {
    element.focus({ preventScroll });
    
    // Ensure focus is visible
    if (!element.matches(':focus-visible')) {
      element.classList.add('force-focus-visible');
    }
  }, delay);
}

/**
 * Create accessible loading announcements
 * @param {string} phase - Current loading phase
 * @returns {string} - Accessible announcement text
 */
export function createLoadingAnnouncement(phase) {
  const announcements = {
    symbol: 'Loading portfolio, displaying cultural symbol',
    sanskrit: 'Showing Sanskrit quote: By Mind, Word, and Deed',
    translation: 'Displaying English translation',
    name: 'Loading Sanket Shende professional portfolio',
    complete: 'Portfolio loaded successfully'
  };
  
  return announcements[phase] || 'Loading portfolio';
}

/**
 * Validate and fix ARIA labels
 * @param {HTMLElement} element - Element to validate
 * @returns {Array} - Array of issues found
 */
export function validateAriaLabels(element) {
  const issues = [];
  
  // Check for missing alt text on images
  const images = element.querySelectorAll('img');
  images.forEach(img => {
    if (!img.alt && !img.getAttribute('aria-label')) {
      issues.push(`Image missing alt text: ${img.src}`);
    }
  });
  
  // Check for buttons without accessible names
  const buttons = element.querySelectorAll('button');
  buttons.forEach(button => {
    const hasAccessibleName = button.textContent.trim() || 
                             button.getAttribute('aria-label') || 
                             button.getAttribute('aria-labelledby');
    if (!hasAccessibleName) {
      issues.push('Button missing accessible name');
    }
  });
  
  // Check for form inputs without labels
  const inputs = element.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    const hasLabel = input.getAttribute('aria-label') || 
                    input.getAttribute('aria-labelledby') ||
                    document.querySelector(`label[for="${input.id}"]`);
    if (!hasLabel) {
      issues.push(`Form input missing label: ${input.type || input.tagName}`);
    }
  });
  
  return issues;
}

/**
 * Color palette validation results for the current theme
 */
export const THEME_VALIDATION = validateColorPalette({});

// Log validation results in development
if (process.env.NODE_ENV === 'development') {
  console.group('🎨 Color Accessibility Validation');
  console.log('✅ Passed combinations:', THEME_VALIDATION.passed.length);
  console.log('❌ Failed combinations:', THEME_VALIDATION.failed.length);
  console.log('⚠️ Warnings:', THEME_VALIDATION.warnings.length);
  
  if (THEME_VALIDATION.failed.length > 0) {
    console.warn('Failed combinations:', THEME_VALIDATION.failed);
  }
  
  if (THEME_VALIDATION.warnings.length > 0) {
    console.warn('Warnings:', THEME_VALIDATION.warnings);
  }
  
  console.groupEnd();
}