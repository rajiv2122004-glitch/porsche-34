// ============================================================
// Porsche 3D Experience — Design Tokens
// ============================================================

export const colors = {
  obsidian: '#08090B',
  graphite: '#17191D',
  graphiteLight: '#1E2127',
  graphiteMid: '#252830',
  porcelain: '#F4F3EF',
  porcelainDim: '#D8D7D3',
  silver: '#AEB4BC',
  silverDark: '#7A8290',
  racingRed: '#D71920',
  racingRedHover: '#E62B32',
  racingRedDark: '#B5151B',
  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',
} as const;

export const typography = {
  fontDisplay: "'Inter', 'Helvetica Neue', sans-serif",
  fontBody: "'Inter', 'Helvetica Neue', sans-serif",
  fontMono: "'JetBrains Mono', 'Fira Code', monospace",
  sizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    hero: 'clamp(2.5rem, 6vw, 5rem)',
  },
  weights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.05em',
    wider: '0.1em',
    widest: '0.2em',
  },
} as const;

export const spacing = {
  section: 'clamp(4rem, 10vw, 8rem)',
  container: 'clamp(1rem, 5vw, 6rem)',
  maxWidth: '1440px',
  contentWidth: '1200px',
} as const;

export const shadows = {
  sm: '0 1px 2px rgba(0,0,0,0.4)',
  md: '0 4px 6px -1px rgba(0,0,0,0.4)',
  lg: '0 10px 15px -3px rgba(0,0,0,0.5)',
  xl: '0 20px 25px -5px rgba(0,0,0,0.6)',
  glow: '0 0 30px rgba(215,25,32,0.15)',
  card: '0 4px 30px rgba(0,0,0,0.3)',
} as const;

export const animation = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
  slower: '700ms',
  spring: { type: 'spring', stiffness: 100, damping: 20 },
  easeOut: [0.16, 1, 0.3, 1] as [number, number, number, number],
  easeInOut: [0.4, 0, 0.2, 1] as [number, number, number, number],
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;
