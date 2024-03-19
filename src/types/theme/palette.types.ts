export interface ColorScheme {
  main: string;
  light?: string;
  dark?: string;
  contrastText?: string;
}

export interface Palette {
  primary: ColorScheme;
  secondary: ColorScheme;
  error: ColorScheme;
  warning: ColorScheme;
  info: ColorScheme;
  success: ColorScheme;
  grey: {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    A100?: string;
    A200?: string;
    A400?: string;
    A700?: string;
  };
  text: {
    primary: string;
    secondary: string;
    disabled?: string;
    hint?: string;
  };
  background: {
    default: string;
    paper?: string;
  };

  divider: string;
  action: {
    active?: string;
    hover?: string;
    hoverOpacity?: number;
    selected?: string;
    selectedOpacity?: number;
    disabled?: string;
    disabledBackground?: string;
    disabledOpacity?: number;
    focus?: string;
    focusOpacity?: number;
    activatedOpacity?: number;
  };
  // You might want to include any other specific color needs for your application
}
