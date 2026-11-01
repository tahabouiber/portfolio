// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Include all your JS, JSX, TS, and TSX files
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          background: 'var(--color-background)',
          surface: 'var(--color-surface)',
          text: 'var(--color-text)',
          muted: 'var(--color-muted)',
          accent: 'var(--color-accent)',
          border: 'var(--color-border)',
        },
      },
      spacing: { section: 'var(--section-space)' },
    },
  },
  plugins: [],
};
