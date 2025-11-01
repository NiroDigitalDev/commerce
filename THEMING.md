# Theming Guide

This project uses a comprehensive CSS-driven theming system built with Tailwind v4. All design decisions are configurable via CSS files with minimal component changes needed.

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Quick Start](#quick-start)
- [Design Tokens](#design-tokens)
- [Creating a New Theme](#creating-a-new-theme)
- [Theme Configuration](#theme-configuration)
- [Component Styling](#component-styling)
- [Animation System](#animation-system)
- [Best Practices](#best-practices)

## Architecture Overview

The theming system is built on three layers:

1. **Design Tokens** (`app/design-tokens.css`) - Core variables for spacing, typography, colors, animations
2. **Theme Files** (`app/themes/*.css`) - Theme-specific overrides and configurations
3. **Component Styles** (`components/styles/*.css`) - Component-level styles that consume tokens

This separation allows for complete theme customization by only editing CSS files.

## Quick Start

### Using the Default Theme

The default theme is already active. No configuration needed!

### Switching to Brutalist Theme

1. Open `app/globals.css`
2. Comment out the default theme and uncomment brutalist:

```css
@import './themes/default.css';
/* @import './themes/brutalist.css'; */  /* Remove comment to enable */
```

3. Restart your development server

### Creating a Custom Theme

Create a new file: `app/themes/custom.css`

```css
[data-theme="custom"] {
  /* Override any design tokens */
  --button-radius: 0;
  --card-hover-scale: 1.05;
  
  /* Define custom gradients */
  --gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

Import it in `app/globals.css`:

```css
@import './themes/custom.css';
```

## Design Tokens

All design tokens are defined in `app/design-tokens.css`. These are the building blocks of the design system.

### Spacing Scale

```css
--spacing-1: 0.25rem;    /* 4px */
--spacing-2: 0.5rem;     /* 8px */
--spacing-4: 1rem;       /* 16px */
--spacing-8: 2rem;       /* 32px */
/* ... and more */
```

Usage in CSS:
```css
padding: var(--spacing-4);
gap: var(--spacing-6);
```

### Typography

```css
/* Font Sizes */
--font-size-sm: 0.875rem;
--font-size-base: 1rem;
--font-size-xl: 1.25rem;
/* ... and more */

/* Font Weights */
--font-weight-normal: 400;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Animation Tokens

```css
/* Durations */
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;

/* Easing Functions */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Border Radius

```css
--radius-sm: 0.125rem;    /* 2px */
--radius-lg: 0.5rem;      /* 8px */
--radius-3xl: 1.5rem;     /* 24px */
--radius-full: 9999px;
```

### Shadows (Elevation System)

```css
--shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1);
--shadow-md: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-lg: 0 20px 25px -5px rgb(0 0 0 / 0.1);
```

## Creating a New Theme

### Step 1: Create Theme File

Create `app/themes/[your-theme].css`:

```css
[data-theme="your-theme"] {
  /* ===== Component Overrides ===== */
  
  /* Buttons */
  --button-radius: var(--radius-lg);
  --button-shadow: var(--shadow-md);
  --button-hover-shadow: var(--shadow-xl);
  
  /* Cards */
  --card-radius: var(--radius-2xl);
  --card-hover-scale: 1.05;
  
  /* Sections */
  --section-title-size: var(--font-size-6xl);
  
  /* ===== Animation Overrides ===== */
  --animation-reveal-distance: 40px;
  --animation-hover-scale: 1.03;
  
  /* ===== Custom Colors/Gradients ===== */
  --gradient-1: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
  --gradient-2: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
}

/* ===== Theme-Specific Component Styles ===== */
[data-theme="your-theme"] {
  /* Custom hover effects */
  .button-link:hover {
    transform: translateY(-4px);
  }
  
  /* Custom typography */
  h1, h2, h3 {
    font-family: 'Your Custom Font', sans-serif;
  }
}
```

### Step 2: Register Theme

Update `lib/theme-config.ts`:

```typescript
export const themeRegistry: Record<ThemeName, ThemeConfig> = {
  // ... existing themes
  yourtheme: {
    id: 'yourtheme',
    name: 'Your Theme Name',
    description: 'Description of your theme',
    cssFile: './app/themes/your-theme.css',
  },
};
```

### Step 3: Import Theme

Add to `app/globals.css`:

```css
@import './themes/your-theme.css';
```

## Theme Configuration

### Available Theme Variables

#### Button Variables
```css
--button-radius: var(--radius-full);
--button-shadow: var(--shadow-base);
--button-hover-shadow: var(--shadow-lg);
--button-border-width: 1px;
--button-transition: var(--transition-all);
```

#### Card Variables
```css
--card-radius: var(--radius-3xl);
--card-padding: var(--spacing-6);
--card-shadow: var(--shadow-base);
--card-hover-shadow: var(--shadow-xl);
--card-hover-scale: 1.02;
```

#### Product Card Variables
```css
--product-card-radius: var(--radius-3xl);
--product-card-image-radius: var(--radius-3xl);
--product-card-hover-scale: 1.02;
--product-card-image-hover-scale: 1.05;
```

#### Section Variables
```css
--section-header-align: center;
--section-title-size: var(--font-size-5xl);
--section-spacing-y: var(--section-y);
```

#### Animation Variables
```css
--animation-reveal-distance: 60px;
--animation-reveal-blur: 16px;
--animation-hover-lift: -2px;
--animation-hover-scale: 1.02;
```

## Component Styling

### Using CSS Classes

All components use standardized CSS classes that consume design tokens:

```tsx
// Section structure
<section className="section-wrapper section-bg-gray">
  <div className="section-container">
    <div className="section-header">
      <h2 className="section-title">
        Title <span className="section-title-highlight">Highlight</span>
      </h2>
      <p className="section-description">Description text</p>
    </div>
  </div>
</section>
```

### Section Classes

- `section-wrapper` - Outer section container with spacing
- `section-container` - Inner content container (max-width)
- `section-header` - Standardized header layout
- `section-title` - Section heading
- `section-title-highlight` - Highlighted text (uses primary color)
- `section-description` - Description paragraph
- `section-actions` - Action button container
- `section-grid` - Grid layout for content
- `section-grid-2`, `section-grid-3`, `section-grid-4` - Column counts

### Background Variants

```css
.section-bg-white { /* White background */ }
.section-bg-gray { /* Gray background */ }
.section-bg-primary { /* Primary color background */ }
.section-bg-transparent { /* Transparent background */ }
```

## Animation System

The project uses Framer Motion with theme-aware configurations.

### Animation Components

```tsx
import { Reveal, ScrollReveal, MotionWrapper } from '@/components/animations';

// Reveal animation (scroll-triggered)
<Reveal delay={0.3} direction="up" distance={60}>
  <div>Content</div>
</Reveal>

// Scroll reveal with type
<ScrollReveal type="fade" delay={0.2} once>
  <div>Content</div>
</ScrollReveal>

// Motion wrapper with presets
<MotionWrapper preset="slideUp" delay={0.1}>
  <div>Content</div>
</MotionWrapper>
```

### Animation Configuration

Edit `lib/animation-config.ts` to customize:

```typescript
export const themeAnimations: Record<ThemeName, ThemeAnimationConfig> = {
  yourtheme: {
    duration: 0.4,        // Animation duration
    distance: 80,         // Movement distance
    blur: 20,             // Initial blur amount
    useSpring: true,      // Use spring physics
    hoverScale: 1.05,     // Hover scale factor
    hoverLift: -4,        // Hover lift distance
  },
};
```

### Reduced Motion

Animations automatically respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-fast: 0ms;
    --duration-normal: 0ms;
    --animation-duration: 0ms;
  }
}
```

## Best Practices

### 1. Use Design Tokens

❌ **Don't** use hard-coded values:
```css
.my-component {
  padding: 16px;
  border-radius: 8px;
}
```

✅ **Do** use design tokens:
```css
.my-component {
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
}
```

### 2. Follow Naming Conventions

Component-specific variables should follow this pattern:
```css
--[component]-[property]: value;
--button-radius: var(--radius-full);
--card-shadow: var(--shadow-base);
```

### 3. Provide Fallbacks

Always provide fallback values:
```css
border-radius: var(--button-radius, var(--radius-full));
```

### 4. Theme Isolation

Keep theme-specific styles within the `[data-theme]` selector:

```css
[data-theme="brutalist"] {
  --button-radius: 0;
  
  .button-link {
    border-width: 3px;
  }
}
```

### 5. Minimize Component Changes

When changing themes, aim to only modify CSS files. Components should remain theme-agnostic.

### 6. Test Responsiveness

Always test themes across different screen sizes:

```css
@media (max-width: 768px) {
  [data-theme="your-theme"] {
    --section-title-size: var(--font-size-4xl);
  }
}
```

## Example: Brutalist Theme

The included brutalist theme demonstrates extreme customization:

```css
[data-theme="brutalist"] {
  /* Remove all rounded corners */
  --button-radius: 0;
  --card-radius: 0;
  
  /* Heavy borders */
  --button-border-width: 3px;
  --card-border-width: 3px;
  
  /* No animations */
  --duration-fast: 0ms;
  --duration-normal: 0ms;
  
  /* Solid colors instead of gradients */
  --gradient-1: #000000;
  --gradient-2: #FFFFFF;
}

[data-theme="brutalist"] {
  /* Remove all transitions */
  * {
    transition: none !important;
  }
  
  /* Box shadows for depth */
  .button-link {
    box-shadow: 4px 4px 0 0 currentColor;
  }
}
```

## Troubleshooting

### Theme Not Applying

1. Check that the theme file is imported in `globals.css`
2. Verify the `data-theme` attribute is set correctly
3. Clear your browser cache and restart the dev server

### Styles Not Updating

1. Make sure you're editing the correct theme file
2. Check CSS specificity - theme styles may be overridden
3. Use browser DevTools to inspect computed styles

### Animations Not Working

1. Verify Framer Motion is installed
2. Check `prefers-reduced-motion` setting
3. Ensure animation config is properly imported

## Resources

- **Design Tokens**: `app/design-tokens.css`
- **Theme Files**: `app/themes/*.css`
- **Animation Config**: `lib/animation-config.ts`
- **Theme Config**: `lib/theme-config.ts`
- **Component Styles**: `components/styles/*.css`

## Support

For questions or issues with theming, please refer to the project documentation or open an issue on GitHub.

