/**
 * Font Loading Utility
 * Optimizes font loading performance and provides fallback handling
 */

class FontLoader {
  constructor() {
    this.loadedFonts = new Set();
    this.fontLoadPromises = new Map();
  }

  /**
   * Check if a font is available
   * @param {string} fontFamily - Font family name
   * @returns {boolean} - Whether font is available
   */
  isFontAvailable(fontFamily) {
    // Create a test element to check font availability
    const testElement = document.createElement('div');
    testElement.style.fontFamily = fontFamily;
    testElement.style.fontSize = '12px';
    testElement.style.position = 'absolute';
    testElement.style.visibility = 'hidden';
    testElement.style.width = 'auto';
    testElement.style.height = 'auto';
    testElement.textContent = 'Test';
    
    document.body.appendChild(testElement);
    const width = testElement.offsetWidth;
    document.body.removeChild(testElement);
    
    // Compare with fallback font width
    testElement.style.fontFamily = 'monospace';
    document.body.appendChild(testElement);
    const fallbackWidth = testElement.offsetWidth;
    document.body.removeChild(testElement);
    
    return width !== fallbackWidth;
  }

  /**
   * Load a font with timeout and fallback handling
   * @param {string} fontFamily - Font family name
   * @param {number} timeout - Timeout in milliseconds (default: 3000)
   * @returns {Promise<boolean>} - Whether font loaded successfully
   */
  async loadFont(fontFamily, timeout = 3000) {
    if (this.loadedFonts.has(fontFamily)) {
      return true;
    }

    if (this.fontLoadPromises.has(fontFamily)) {
      return this.fontLoadPromises.get(fontFamily);
    }

    const loadPromise = new Promise((resolve) => {
      // Check if font is already available
      if (this.isFontAvailable(fontFamily)) {
        this.loadedFonts.add(fontFamily);
        resolve(true);
        return;
      }

      // Use Font Loading API if available
      if ('fonts' in document) {
        const fontFace = new FontFace(fontFamily, `url(https://fonts.googleapis.com/css2?family=${encodeURIComponent(fontFamily)}&display=swap)`);
        
        const timeoutId = setTimeout(() => {
          console.warn(`Font loading timeout for ${fontFamily}, using fallback`);
          resolve(false);
        }, timeout);

        fontFace.load()
          .then(() => {
            clearTimeout(timeoutId);
            document.fonts.add(fontFace);
            this.loadedFonts.add(fontFamily);
            resolve(true);
          })
          .catch(() => {
            clearTimeout(timeoutId);
            console.warn(`Failed to load font ${fontFamily}, using fallback`);
            resolve(false);
          });
      } else {
        // Fallback for browsers without Font Loading API
        setTimeout(() => {
          const isLoaded = this.isFontAvailable(fontFamily);
          if (isLoaded) {
            this.loadedFonts.add(fontFamily);
          }
          resolve(isLoaded);
        }, timeout);
      }
    });

    this.fontLoadPromises.set(fontFamily, loadPromise);
    return loadPromise;
  }

  /**
   * Load Sanskrit fonts with specific handling
   * @returns {Promise<boolean>} - Whether Sanskrit fonts loaded successfully
   */
  async loadSanskritFonts() {
    const sanskritFonts = [
      'Noto Sans Devanagari',
      'Devanagari Sangam MN',
      'Kohinoor Devanagari'
    ];

    const loadPromises = sanskritFonts.map(font => this.loadFont(font, 2000));
    const results = await Promise.all(loadPromises);
    
    // Return true if at least one Sanskrit font loaded
    return results.some(result => result);
  }

  /**
   * Preload critical fonts
   * @returns {Promise<void>}
   */
  async preloadCriticalFonts() {
    const criticalFonts = [
      'Inter',
      'Poppins',
      'JetBrains Mono',
      'Noto Sans Devanagari'
    ];

    const loadPromises = criticalFonts.map(font => this.loadFont(font, 1500));
    await Promise.allSettled(loadPromises);
  }

  /**
   * Apply font loading classes based on load status
   * @param {HTMLElement} element - Element to apply classes to
   * @param {string} fontFamily - Font family being loaded
   */
  async applyFontLoadingClass(element, fontFamily) {
    const loaded = await this.loadFont(fontFamily);
    
    if (loaded) {
      element.classList.add('font-loaded');
      element.classList.remove('font-loading', 'font-fallback');
    } else {
      element.classList.add('font-fallback');
      element.classList.remove('font-loading', 'font-loaded');
    }
  }

  /**
   * Get font loading status
   * @param {string} fontFamily - Font family name
   * @returns {string} - 'loaded', 'loading', or 'fallback'
   */
  getFontStatus(fontFamily) {
    if (this.loadedFonts.has(fontFamily)) {
      return 'loaded';
    }
    if (this.fontLoadPromises.has(fontFamily)) {
      return 'loading';
    }
    return 'fallback';
  }
}

// Create singleton instance
const fontLoader = new FontLoader();

export default fontLoader;

// Export utility functions
export const loadSanskritFonts = () => fontLoader.loadSanskritFonts();
export const preloadCriticalFonts = () => fontLoader.preloadCriticalFonts();
export const applyFontLoadingClass = (element, fontFamily) => fontLoader.applyFontLoadingClass(element, fontFamily);
export const getFontStatus = (fontFamily) => fontLoader.getFontStatus(fontFamily);