import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "on-tertiary-fixed-variant": "#464747",
        "on-surface": "#1a1c1c",
        "surface-container": "#eeeeee",
        "surface-container-highest": "#e2e2e2",
        "on-background": "#1a1c1c",
        "secondary-fixed": "#e2e2e2",
        "surface-variant": "#e2e2e2",
        "error-container": "#ffdad6",
        "surface-container-low": "#f3f3f3",
        "surface": "#f9f9f9",
        "primary-fixed": "#e2e2e2",
        "on-secondary": "#ffffff",
        "on-tertiary-fixed": "#1b1c1c",
        "on-tertiary": "#ffffff",
        "on-secondary-fixed-variant": "#454747",
        "secondary-fixed-dim": "#c6c6c7",
        "inverse-on-surface": "#f1f1f1",
        "on-primary-fixed": "#1b1b1b",
        "surface-dim": "#dadada",
        "tertiary": "#000000",
        "tertiary-container": "#1b1c1c",
        "surface-container-lowest": "#ffffff",
        "on-primary-container": "#848484",
        "secondary": "#5d5f5f",
        "inverse-primary": "#c6c6c6",
        "on-primary-fixed-variant": "#474747",
        "surface-container-high": "#e8e8e8",
        "secondary-container": "#dfe0e0",
        "surface-tint": "#5e5e5e",
        "inverse-surface": "#2f3131",
        "on-error": "#ffffff",
        "outline": "#7e7576",
        "background": "#f9f9f9",
        "outline-variant": "#cfc4c5",
        "error": "#ba1a1a",
        "primary-fixed-dim": "#c6c6c6",
        "tertiary-fixed-dim": "#c7c6c6",
        "on-primary": "#ffffff",
        "surface-bright": "#f9f9f9",
        "on-tertiary-container": "#848484",
        "tertiary-fixed": "#e4e2e2",
        "on-secondary-fixed": "#1a1c1c",
        "on-surface-variant": "#4c4546",
        "on-secondary-container": "#616363",
        "primary-container": "#1b1b1b",
        "primary": "#000000",
        "on-error-container": "#93000a"
      },
      "borderRadius": {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      "spacing": {
        "margin": "48px",
        "gutter": "24px",
        "stack-sm": "16px",
        "container-max": "1200px",
        "unit": "8px",
        "stack-md": "32px",
        "stack-lg": "64px"
      },
      "fontFamily": {
        "h2": ["Inter"],
        "h1": ["Inter"],
        "label-sm": ["Inter"],
        "h3": ["Inter"],
        "body-md": ["Inter"],
        "body-lg": ["Inter"]
      },
      "fontSize": {
        "h2": ["2.5rem", { "lineHeight": "1.2", "letterSpacing": "-0.03em", "fontWeight": "600" }],
        "h1": ["4rem", { "lineHeight": "1.1", "letterSpacing": "-0.04em", "fontWeight": "600" }],
        "label-sm": ["0.75rem", { "lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600" }],
        "h3": ["1.5rem", { "lineHeight": "1.3", "letterSpacing": "-0.02em", "fontWeight": "500" }],
        "body-md": ["1rem", { "lineHeight": "1.7", "letterSpacing": "0em", "fontWeight": "400" }],
        "body-lg": ["1.125rem", { "lineHeight": "1.8", "letterSpacing": "0em", "fontWeight": "400" }]
      }
    },
  },
  plugins: [forms, containerQueries],
}
