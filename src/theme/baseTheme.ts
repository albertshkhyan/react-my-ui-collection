import { Theme } from '@/types/theme/theme.types.ts';

const baseTheme: Theme = {
  palette: {
    primary: '#007bff',
    secondary: '#ffc107',
    error: '#dc3545',
    background: {
      default: '#ffffff',
      paper: '#f4f5f7',
    },
    text: {
      primary: '#172b4d',
      secondary: '#6b778c',
      disabled: '#afb0b4',
    },
  },

  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: '1rem',
    h1: {
      fontSize: '2.5rem',
    },
    h2: {
      fontSize: '2.0rem',
    },
    body1: {
      fontSize: '1rem',
    },
    // ... more typography styles
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  spacing: (factor) => `${0.25 * factor}rem`,
  // ... other theme properties
};

export default baseTheme;
