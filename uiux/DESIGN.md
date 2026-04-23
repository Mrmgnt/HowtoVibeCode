---
name: Zenith Tech
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dfe0e0'
  on-secondary-container: '#616363'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1c1c'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e4e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  h1:
    fontFamily: Inter
    fontSize: 4rem
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  h2:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.03em
  h3:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: '500'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.8'
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.7'
    letterSpacing: 0em
  label-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin: 48px
  stack-sm: 16px
  stack-md: 32px
  stack-lg: 64px
---

## Brand & Style

This design system embodies the "Korean Minimalist" aesthetic—a philosophy of intentional emptiness (Yeobaek-ui-mi) where whitespace is a functional element rather than a void. The brand personality is ultra-premium, silent, and highly organized, catering to users who value cognitive clarity and technical precision.

The style merges the sharp utility of a premium tech brand with the ethereal quality of glassmorphism. By prioritizing a monochromatic palette and removing unnecessary decorative elements, the UI evokes a sense of calm sophistication. It is a "quiet" interface that speaks through exceptional typography and precise structural alignment, echoing the refinement of brands like Linear and Apple.

## Colors

The color strategy is strictly monochromatic to maintain a high-end, gallery-like feel. 

- **Foundation:** Pure White (#FFFFFF) serves as the primary canvas, providing maximum "breathing room."
- **Typography & Key Elements:** Deep Black (#000000) is used for maximum contrast on headlines and primary CTAs.
- **Sub-surfaces:** Soft Slate Grays (#F2F2F2, #E0E0E0) define containment and structural separation without introducing visual noise.
- **Accents:** High-contrast interactions rely on the inversion of black and white. For specific functional alerts, a muted neutral scale is preferred over chromatic colors unless absolutely necessary for system status.

## Typography

The typography system relies on **Inter** for its neutral, systematic clarity. The hierarchy is built on extreme contrast between size and weight.

- **Headings:** Oversized with tight negative tracking to create a "block" of text that feels architectural. 
- **Body Text:** Ample line-height (1.7–1.8) is critical to ensure legibility and contribute to the "airy" feel of the interface. 
- **Labels:** Small caps or bold weights at reduced sizes are used for metadata, ensuring they don't compete with primary content.

## Layout & Spacing

This design system utilizes a **fixed grid** model for desktop and a fluid model for smaller breakpoints. The layout philosophy is "Centric and Spacious."

- **Grid:** A 12-column grid with generous 48px outer margins.
- **Rhythm:** An 8px linear scale governs all padding and margins. 
- **Whitespace:** Elements should be grouped with significant vertical "stack" spacing (up to 64px or 128px between sections) to emphasize the premium nature of the content. Vertical alignment should be prioritized over horizontal density.

## Elevation & Depth

Depth is achieved through **Glassmorphism** and **Tonal Layering** rather than traditional heavy shadows.

- **Frosted Glass:** Navigation bars and floating panels use a `backdrop-filter: blur(20px)` with a highly transparent white fill (e.g., `rgba(255, 255, 255, 0.7)`).
- **Thin Borders:** 1px solid borders in #E0E0E0 or #F2F2F2 define boundaries. For interactive states, borders may transition to Black.
- **Shadows:** Use only one level of elevation for floating cards: a very large, ultra-soft shadow with 2-4% opacity (`0 20px 40px rgba(0,0,0,0.04)`).

## Shapes

The shape language is "Soft-Modern." We avoid sharp, aggressive corners in favor of subtle rounding that feels approachable yet professional.

- **Standard Elements:** Buttons and input fields use a 0.25rem (4px) radius.
- **Large Containers:** Cards and modals use a 0.5rem (8px) radius.
- **Exceptions:** Pill shapes (rounded-full) are strictly reserved for status indicators or specific tag styles to provide a visual break from the rectilinear grid.

## Components

- **Buttons:** Primary buttons are solid Black with White text. Secondary buttons are White with a thin 1px #E0E0E0 border. No gradients or heavy rounding.
- **Inputs:** Minimalist fields with a bottom-border-only or a very subtle light gray background. Focus states shift the border to Black.
- **Cards:** White background with a 1px #F2F2F2 border. No shadow in rest state; subtle shadow on hover to indicate interactivity.
- **Chips/Tags:** Small, light gray backgrounds (#F2F2F2) with small-cap text. Rectangular with minimal rounding.
- **Lists:** High-density text with thin horizontal dividers (#F2F2F2). Use generous vertical padding (16px+) for each list item.
- **Navigation:** Top-aligned, frosted glass bar with simple text links. Active states indicated by a subtle weight change or a 2px bottom bar.