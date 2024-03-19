export type Breakpoints = {
  values: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  up: (breakpoint: keyof Breakpoints['values']) => string;
  down: (breakpoint: keyof Breakpoints['values']) => string;
  between: (
    start: keyof Breakpoints['values'],
    end: keyof Breakpoints['values'],
  ) => string;
  only: (breakpoint: keyof Breakpoints['values']) => string;
};

// theme.types.ts
export interface Theme {
  palette: {
    primary: string;
    secondary: string;
    error: string;
    warning: string;
    info: string;
    success: string;
    background: {
      default: string;
      paper: string;
    };
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    };
  };
  typography: {
    fontFamily: string;
    fontSize: string;
    h1: {
      fontSize: string;
    };
    h2: {
      fontSize: string;
    };
    h3: {
      fontSize: string;
    };
    body1: {
      fontSize: string;
    };
    button: {
      fontSize: string;
    };
    // ... more typography definitions
  };
  breakpoints: Breakpoints;
  spacing: {
    unit: number; // You can define spacing as a single unit or a function
  };
  shape: {
    borderRadius: string;
  };
  shadows: string[];
  transitions: {
    // Define your transitions here
  };
  zIndex: {
    appBar: number;
    drawer: number;
    modal: number;
    // ... more zIndex layers
  };
  // ... other theme properties such as mixins, shadows, etc.
}

// Export the type if you want it to be used elsewhere
export default Theme;
