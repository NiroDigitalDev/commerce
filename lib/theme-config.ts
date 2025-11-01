/* =========================
   Theme Configuration
   =========================
   
   Theme switching and registry system.
   Manages available themes and provides utilities for theme management.
   ========================= */

export const THEMES = {
  DEFAULT: 'default',
  BRUTALIST: 'brutalist',
  CUSTOM: 'custom',
} as const;

export type ThemeName = typeof THEMES[keyof typeof THEMES];

export interface ThemeConfig {
  id: ThemeName;
  name: string;
  description: string;
  cssFile: string;
  preview?: string;
}

/**
 * Registry of available themes
 */
export const themeRegistry: Record<ThemeName, ThemeConfig> = {
  default: {
    id: 'default',
    name: 'Default',
    description: 'Modern, clean design with soft rounded corners and smooth transitions',
    cssFile: './app/themes/default.css',
  },
  brutalist: {
    id: 'brutalist',
    name: 'Brutalist',
    description: 'Bold, raw design with sharp edges, high contrast, and minimal animations',
    cssFile: './app/themes/brutalist.css',
  },
  custom: {
    id: 'custom',
    name: 'Custom',
    description: 'Your custom theme configuration',
    cssFile: './app/themes/custom.css',
  },
};

/**
 * Get theme configuration by name
 */
export function getThemeConfig(themeName: ThemeName = 'default'): ThemeConfig {
  return themeRegistry[themeName] || themeRegistry.default;
}

/**
 * Get all available themes
 */
export function getAllThemes(): ThemeConfig[] {
  return Object.values(themeRegistry);
}

/**
 * Check if a theme exists
 */
export function isValidTheme(themeName: string): themeName is ThemeName {
  return themeName in themeRegistry;
}

/**
 * Apply theme to document
 * This function should be called client-side to apply the theme
 */
export function applyTheme(themeName: ThemeName): void {
  if (typeof document === 'undefined') return;
  
  const config = getThemeConfig(themeName);
  document.documentElement.setAttribute('data-theme', config.id);
  
  // Store theme preference
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('theme', config.id);
  }
}

/**
 * Get stored theme preference
 */
export function getStoredTheme(): ThemeName | null {
  if (typeof localStorage === 'undefined') return null;
  
  const stored = localStorage.getItem('theme');
  return stored && isValidTheme(stored) ? stored : null;
}

/**
 * Initialize theme from stored preference or default
 */
export function initializeTheme(): ThemeName {
  const stored = getStoredTheme();
  const theme = stored || 'default';
  
  if (typeof document !== 'undefined') {
    applyTheme(theme);
  }
  
  return theme;
}

/**
 * Theme hook for React components (client-side only)
 */
export function useTheme() {
  if (typeof window === 'undefined') {
    return {
      theme: 'default' as ThemeName,
      setTheme: () => {},
      themes: getAllThemes(),
    };
  }

  const [currentTheme, setCurrentTheme] = React.useState<ThemeName>(() => {
    return getStoredTheme() || 'default';
  });

  const setTheme = React.useCallback((newTheme: ThemeName) => {
    applyTheme(newTheme);
    setCurrentTheme(newTheme);
  }, []);

  return {
    theme: currentTheme,
    setTheme,
    themes: getAllThemes(),
  };
}

// For server components, we just need the React import for the hook
import * as React from 'react';

export default {
  THEMES,
  themeRegistry,
  getThemeConfig,
  getAllThemes,
  isValidTheme,
  applyTheme,
  getStoredTheme,
  initializeTheme,
  useTheme,
};

