import { Palette } from '@/types/theme/palette.types.ts';

const COLORS = {
  WHITE: '#ffffff',
  BLACK: '#000000',
  BLUE: {
    LIGHT: '#42a5f5',
    BASE: '#1976d2',
    DARK: '#1565c0',
  },
  PURPLE: {
    LIGHT: '#ba68c8',
    BASE: '#9c27b0',
    DARK: '#7b1fa2',
  },
  RED: {
    LIGHT: '#ef5350',
    BASE: '#d32f2f',
    DARK: '#c62828',
  },
  ORANGE: {
    LIGHT: '#ff9800',
    BASE: '#ed6c02',
    DARK: '#e65100',
  },
  GREEN: {
    LIGHT: '#4caf50',
    BASE: '#2e7d32',
    DARK: '#1b5e20',
  },
  CYAN: {
    LIGHT: '#03a9f4',
    BASE: '#0288d1',
    DARK: '#01579b',
  },
};

const GREY: { [k: string]: string } = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161',
};

export const palette: Palette = {
  primary: {
    main: COLORS.BLUE.BASE,
    light: COLORS.BLUE.LIGHT,
    dark: COLORS.BLUE.DARK,
    contrastText: COLORS.WHITE,
  },
  secondary: {
    main: COLORS.PURPLE.BASE,
    light: COLORS.PURPLE.LIGHT,
    dark: COLORS.PURPLE.DARK,
    contrastText: COLORS.WHITE,
  },
  error: {
    main: COLORS.RED.BASE,
    light: COLORS.RED.LIGHT,
    dark: COLORS.RED.DARK,
    contrastText: COLORS.WHITE,
  },
  warning: {
    main: COLORS.ORANGE.BASE,
    light: COLORS.ORANGE.LIGHT,
    dark: COLORS.ORANGE.DARK,
    contrastText: COLORS.BLACK,
  },
  info: {
    main: COLORS.CYAN.BASE,
    light: COLORS.CYAN.LIGHT,
    dark: COLORS.CYAN.DARK,
    contrastText: COLORS.WHITE,
  },
  success: {
    main: COLORS.GREEN.BASE,
    light: COLORS.GREEN.LIGHT,
    dark: COLORS.GREEN.DARK,
    contrastText: COLORS.WHITE,
  },
  grey: GREY,
  text: {
    primary: COLORS.BLACK,
    secondary: GREY[600],
    disabled: GREY[500],
    hint: GREY[400],
  },
  background: {
    default: COLORS.WHITE,
    paper: GREY[100],
  },
  divider: GREY[300],
  action: {
    active: COLORS.BLUE.LIGHT,
    hover: COLORS.BLUE.DARK,
    hoverOpacity: 0.08,
    selected: COLORS.BLUE.BASE,
    selectedOpacity: 0.16,
    disabled: GREY[600],
    disabledBackground: GREY[200],
    disabledOpacity: 0.38,
    focus: COLORS.BLUE.LIGHT,
    focusOpacity: 0.24,
    activatedOpacity: 0.12,
  },
};
export default palette;
