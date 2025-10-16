// Dynamic Theme Generator for Multi-School Reunion Platform
// Applies school colors, mascot, and branding based on URL parameters

export class ThemeGenerator {
  constructor(schoolConfig) {
    this.config = schoolConfig;
  }

  // Get school and year from URL
  static getSchoolYearFromURL() {
    const params = new URLSearchParams(window.location.search);
    const pathParts = window.location.pathname.split('/').filter(p => p);

    return {
      school: params.get('school') || pathParts[1] || null,
      year: params.get('year') || pathParts[2] || null
    };
  }

  // Apply theme to the page
  applyTheme(schoolId) {
    const school = this.config[schoolId];
    if (!school) {
      console.error(`School ${schoolId} not found in config`);
      return false;
    }

    // Set CSS custom properties for colors
    const root = document.documentElement;
    root.style.setProperty('--primary-color', school.colors.primary);
    root.style.setProperty('--secondary-color', school.colors.secondary);
    root.style.setProperty('--accent-color', school.colors.accent);

    // Update page title
    document.title = `${school.name} Reunion Voting`;

    // Update meta theme color for mobile browsers
    let metaTheme = document.querySelector('meta[name="theme-color"]');
    if (!metaTheme) {
      metaTheme = document.createElement('meta');
      metaTheme.name = 'theme-color';
      document.head.appendChild(metaTheme);
    }
    metaTheme.content = school.colors.primary;

    return true;
  }

  // Get school data
  getSchool(schoolId) {
    return this.config[schoolId] || null;
  }

  // Get all schools
  getAllSchools() {
    return Object.entries(this.config).map(([id, data]) => ({
      id,
      ...data
    }));
  }

  // Validate school and year combination
  isValidSchoolYear(schoolId, year) {
    const school = this.config[schoolId];
    if (!school) return false;
    return school.graduationYears.includes(parseInt(year));
  }

  // Generate gradient background based on school colors
  getGradientBackground(schoolId) {
    const school = this.config[schoolId];
    if (!school) return 'linear-gradient(135deg, #000 0%, #333 100%)';
    return `linear-gradient(135deg, ${school.colors.primary} 0%, ${school.colors.secondary} 100%)`;
  }

  // Get formatted school name with year
  getFullTitle(schoolId, year) {
    const school = this.config[schoolId];
    if (!school) return 'Reunion Voting';
    return `${school.name} - Class of ${year}`;
  }
}

// Store selected school and year in localStorage
export function saveSchoolYear(schoolId, year) {
  localStorage.setItem('reunionSchool', schoolId);
  localStorage.setItem('reunionYear', year);
}

// Retrieve stored school and year
export function getStoredSchoolYear() {
  return {
    school: localStorage.getItem('reunionSchool'),
    year: localStorage.getItem('reunionYear')
  };
}

// Clear stored school and year
export function clearSchoolYear() {
  localStorage.removeItem('reunionSchool');
  localStorage.removeItem('reunionYear');
}
