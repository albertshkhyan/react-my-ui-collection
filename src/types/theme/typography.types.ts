interface FontStyle {
  fontFamily?: string;
  fontSize: string;
  fontWeight?: number | string;
  lineHeight?: string;
  letterSpacing?: string;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
}

// Extend the FontStyle for more specific text elements
interface Typography {
  htmlFontSize: number; // The default font size for the root element (usually 16px)
  fontFamily: string; // The default font family
  fontSize: string; // The default font size
  fontWeightLight: number;
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightBold: number;
  h1: FontStyle;
  h2: FontStyle;
  h3: FontStyle;
  h4: FontStyle;
  h5: FontStyle;
  h6: FontStyle;
  subtitle1: FontStyle;
  subtitle2: FontStyle;
  body1: FontStyle;
  body2: FontStyle;
  button: FontStyle;
  caption: FontStyle;
  overline: FontStyle;
}
