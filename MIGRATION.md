# Migration Guide

This document tracks the migration from GSAP to Framer Motion and the implementation of the CSS-driven theming system.

## Overview

This project has been refactored to use:
- **Tailwind v4** with comprehensive design tokens
- **Framer Motion** for animations (replacing GSAP)
- **CSS-driven theming** for easy customization
- **TypeScript** with proper typing (`as const`)
- **Modern React patterns** (async/await, Suspense)

## Breaking Changes

### 1. Animation System

#### Old (GSAP):
```tsx
import RevealAnimation from 'components/reveal-animation';

<RevealAnimation delay={0.3} direction="up">
  <div>Content</div>
</RevealAnimation>
```

#### New (Framer Motion):
```tsx
import { Reveal } from '@/components/animations';

<Reveal delay={0.3} direction="up">
  <div>Content</div>
</Reveal>
```

**What Changed:**
- `RevealAnimation` component deleted
- New `Reveal`, `ScrollReveal`, and `MotionWrapper` components
- Automatic `prefers-reduced-motion` support
- Theme-aware animation configurations

### 2. Section Headers

#### Old:
```tsx
<div className="mb-14 text-center md:mb-[70px]">
  <RevealAnimation delay={0.3}>
    <Badge variant="secondary" className="mb-3.5 md:mb-5">
      Badge Text
    </Badge>
  </RevealAnimation>
  <RevealAnimation delay={0.4}>
    <h2 className="mb-3 text-3xl font-bold md:text-4xl lg:text-5xl">
      Title <span className="text-primary">Highlight</span>
    </h2>
  </RevealAnimation>
  <RevealAnimation delay={0.5}>
    <p className="mx-auto max-w-[738px] text-neutral-600">
      Description
    </p>
  </RevealAnimation>
</div>
```

#### New:
```tsx
import { SectionHeader } from '@/components/shared';

<SectionHeader
  badge="Badge Text"
  title="Title"
  titleHighlight="Highlight"
  description="Description"
  delay={0.3}
/>
```

**What Changed:**
- Reusable `SectionHeader` component
- Consistent styling via CSS classes
- Built-in animation support
- Cleaner, more maintainable code

### 3. Button Links

#### Old:
```tsx
const sizeClass = size === 'lg' 
  ? 'button-link-lg' 
  : variant === 'accent' 
    ? 'button-link-accent' 
    : variant === 'primary' 
      ? 'button-link-primary' 
      : 'button-link';
```

#### New:
```tsx
const BUTTON_CLASSES = {
  'default-default': 'button-link',
  'default-accent': 'button-link-accent',
  'default-primary': 'button-link-primary',
  'lg-default': 'button-link-lg',
} as const;

const key = `${size}-${variant}` as keyof typeof BUTTON_CLASSES;
const buttonClass = BUTTON_CLASSES[key] || 'button-link';
```

**What Changed:**
- Cleaner object lookup pattern
- Better TypeScript inference
- More maintainable

### 4. Data Fetching

#### Old:
```tsx
export default function HomePage() {
  const productsPromise = getCollectionProducts({
    collection: "hidden-homepage-featured-items",
  });
  
  return (
    <ProductsSection productsPromise={productsPromise} />
  );
}
```

#### New:
```tsx
import { COLLECTION_HANDLES } from 'lib/constants';

export default async function HomePage() {
  const [products, collections] = await Promise.all([
    getCollectionProducts({
      collection: COLLECTION_HANDLES.HOMEPAGE_FEATURED,
    }),
    getCollections(),
  ]);
  
  return (
    <Suspense fallback={<div className="section-spacing" />}>
      <ProductsSection products={products} />
    </Suspense>
  );
}
```

**What Changed:**
- Server component with async/await
- Proper error handling
- Suspense boundaries
- Constants instead of hard-coded strings
- Resolved data instead of promises

### 5. Layout Structure

#### Old:
```tsx
// app/page.tsx
<>
  <PageContent />
  <Footer />
</>
```

#### New:
```tsx
// app/layout.tsx
<body>
  <Navbar />
  <main>{children}</main>
  <Footer />
</body>
```

**What Changed:**
- Footer moved to layout (consistent across all pages)
- Better semantic HTML structure
- Cleaner page components

### 6. Constants

#### Old:
```tsx
export const TAGS = {
  collections: 'collections',
  products: 'products',
  cart: 'cart'
};

const collectionHandle = "hidden-homepage-featured-items";
```

#### New:
```tsx
export const TAGS = {
  collections: 'collections',
  products: 'products',
  cart: 'cart'
} as const;

export type TagValue = typeof TAGS[keyof typeof TAGS];

export const COLLECTION_HANDLES = {
  HOMEPAGE_FEATURED: 'hidden-homepage-featured-items',
  ALL: '',
} as const;
```

**What Changed:**
- Proper TypeScript typing with `as const`
- Type extraction for better inference
- Organized constants

## Migration Checklist

### Completed ✅

- [x] Create design token system (`app/design-tokens.css`)
- [x] Create default and brutalist themes
- [x] Install Framer Motion, remove GSAP
- [x] Create Framer Motion animation components
- [x] Refactor `buttons.css` to use design tokens
- [x] Refactor `product-card.css` to use design tokens
- [x] Create `sections.css` for standardized patterns
- [x] Create reusable `SectionHeader` component
- [x] Simplify `button-link.tsx` logic
- [x] Update `lib/constants.ts` with proper typing
- [x] Create theme configuration system
- [x] Move Footer to layout, add Suspense boundaries
- [x] Update `ProductsSection` to use new patterns
- [x] Update `CollectionsSection` to use new patterns
- [x] Delete old `reveal-animation.tsx` and `springer.ts`

### Partially Completed ⚠️

- [ ] Migrate all components to use new animation components
  - ✅ ProductsSection
  - ✅ CollectionsSection
  - ⚠️ HeroSection (needs refactor)
  - ⚠️ PageBackgroundWrapper (needs refactor)
  - ⚠️ FeaturesLeft (needs migration)
  - ⚠️ OurMission (needs migration)
  - ⚠️ ServicesV2 (needs migration)
  - ⚠️ AboutStore (needs migration)
  - ⚠️ Blog (needs migration)
  - ⚠️ Faq (needs migration)
  - ⚠️ NewsletterSection (needs migration)
  - ⚠️ Footer (needs migration)

### Component-Specific Migrations

#### HeroSection

**TODO:**
1. Replace GSAP scroll logic with Framer Motion
2. Extract styles to `components/styles/hero.css`
3. Use design tokens for all values
4. Replace `useEffect` scroll handler with Framer Motion hooks

#### PageBackgroundWrapper

**TODO:**
1. Simplify scroll calculations
2. Use Framer Motion for transitions
3. Extract colors to CSS variables
4. Make configurable via theme CSS

#### CollectionsSection

**TODO:**
1. Move gradient array to `components/styles/collections.css`
2. Use CSS variables for gradients
3. Make themeable

## CSS Architecture Changes

### Old Structure:
```
app/
  globals.css (everything mixed together)
components/
  styles/
    buttons.css
    product-card.css
```

### New Structure:
```
app/
  design-tokens.css      # Core tokens
  themes/
    default.css          # Default theme
    brutalist.css        # Brutalist theme
    custom.css           # Your custom theme
  globals.css           # Imports and base styles
components/
  styles/
    buttons.css         # Button styles
    product-card.css    # Product card styles
    sections.css        # Section patterns
    inputs.css          # Input styles
    hero.css            # Hero styles (TODO)
    collections.css     # Collections styles (TODO)
    effects.css         # Effects styles (TODO)
```

## Styling Patterns

### Before:
```tsx
<section className="bg-neutral-50 dark:bg-neutral-900 section-spacing">
  <div className="mx-auto max-w-7xl px-5">
    <div className="mb-14 text-center md:mb-[70px]">
      {/* header content */}
    </div>
    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
      {/* content */}
    </div>
  </div>
</section>
```

### After:
```tsx
<section className="section-wrapper section-bg-gray">
  <div className="section-container">
    <SectionHeader {...props} />
    <div className="section-grid section-grid-3">
      {/* content */}
    </div>
  </div>
</section>
```

**Benefits:**
- Consistent spacing via design tokens
- Theme-aware backgrounds
- Reusable grid patterns
- Less code duplication

## Animation Patterns

### Before (GSAP):
```tsx
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

useGSAP(() => {
  gsap.from(element, {
    opacity: 0,
    y: 60,
    duration: 0.6,
    scrollTrigger: {
      trigger: element,
      start: 'top 90%',
    },
  });
}, []);
```

### After (Framer Motion):
```tsx
import { Reveal } from '@/components/animations';

<Reveal delay={0.3} direction="up" distance={60}>
  <div>Content</div>
</Reveal>
```

**Benefits:**
- Simpler API
- Automatic reduced motion support
- Theme-aware configurations
- Better TypeScript support
- Smaller bundle size

## TypeScript Improvements

### Before:
```tsx
export const TAGS = {
  collections: 'collections',
  products: 'products',
  cart: 'cart'
};
```

### After:
```tsx
export const TAGS = {
  collections: 'collections',
  products: 'products',
  cart: 'cart'
} as const;

export type TagKey = keyof typeof TAGS;
export type TagValue = typeof TAGS[TagKey];
// TagValue is now: "collections" | "products" | "cart"
```

**Benefits:**
- Literal type inference
- Better autocomplete
- Type safety
- Self-documenting code

## Remaining Work

### High Priority

1. **Refactor HeroSection**
   - Replace GSAP with Framer Motion
   - Extract styles to `hero.css`
   - Use design tokens

2. **Refactor PageBackgroundWrapper**
   - Simplify scroll logic
   - Use Framer Motion
   - Make CSS-configurable

3. **Create CollectionsSection CSS**
   - Extract gradients to CSS file
   - Make themeable

### Medium Priority

4. **Migrate Remaining Components**
   - Replace all `RevealAnimation` with `Reveal`
   - Use `SectionHeader` where applicable
   - Apply section patterns

5. **Extract Component CSS**
   - Create `hero.css`
   - Create `collections.css`
   - Create `effects.css`
   - Create `navigation.css`

### Low Priority

6. **Documentation**
   - Add JSDoc comments to components
   - Create Storybook stories
   - Add usage examples

7. **Testing**
   - Add unit tests
   - Test theme switching
   - Test animations
   - Test accessibility

## Testing Your Migration

### 1. Visual Regression

Check that components still look correct:
- Homepage sections
- Product cards
- Collection cards
- Buttons
- Forms

### 2. Animation Testing

Verify animations work:
- Scroll-triggered reveals
- Hover effects
- Page transitions
- Reduced motion support

### 3. Theme Testing

Test theme switching:
```typescript
import { applyTheme } from '@/lib/theme-config';

// Switch themes
applyTheme('default');
applyTheme('brutalist');
```

### 4. Responsive Testing

Check all breakpoints:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (1024px - 1280px)
- Large Desktop (> 1280px)

### 5. Accessibility Testing

Verify:
- Keyboard navigation
- Screen reader compatibility
- Focus indicators
- Color contrast
- Reduced motion

## Rollback Plan

If issues arise, you can partially rollback:

### Rollback Animations

1. Reinstall GSAP:
```bash
bun add gsap @gsap/react
```

2. Restore old files from git:
```bash
git checkout origin/main -- components/reveal-animation.tsx
git checkout origin/main -- lib/springer.ts
```

### Rollback Styling

1. Remove new CSS imports from `globals.css`
2. Restore old component styles from git

## Performance Impact

### Bundle Size Changes

- **Removed**: GSAP (~50KB)
- **Added**: Framer Motion (~35KB)
- **Net Savings**: ~15KB

### Runtime Performance

- Framer Motion uses native browser APIs
- Scroll listeners properly throttled
- CSS animations offloaded to GPU
- Reduced re-renders with proper memoization

## FAQ

### Q: Can I still use GSAP for specific animations?

A: Yes, but it's not recommended. The new system should handle all animation needs. If you need GSAP for a specific use case, you can install it alongside Framer Motion.

### Q: How do I create a new theme?

A: See [THEMING.md](./THEMING.md) for detailed instructions.

### Q: Will my custom components break?

A: Components using the old `RevealAnimation` will break. Update them to use the new `Reveal` component. Other components should work fine.

### Q: How do I disable animations?

A: Set your system preference to "reduce motion" or override animation duration in your theme:

```css
[data-theme="your-theme"] {
  --duration-fast: 0ms;
  --duration-normal: 0ms;
}
```

### Q: Can I mix old and new animation systems?

A: Not recommended. It will increase bundle size and create inconsistencies. Complete the migration for best results.

## Support

For migration help:
1. Check this guide
2. Review [THEMING.md](./THEMING.md)
3. Check component examples in codebase
4. Open an issue on GitHub

## Version History

- **v2.0.0** - Complete refactor with Tailwind v4, Framer Motion, CSS-driven theming
- **v1.0.0** - Original version with GSAP and inline styles

