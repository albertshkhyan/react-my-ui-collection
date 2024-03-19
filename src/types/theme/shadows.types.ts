// Type definition for a single shadow level
export type ShadowLevel = {
  xOffset: number;
  yOffset: number;
  blurRadius: number;
  spreadRadius: number;
  color: string;
};

// Type definition for the shadows object containing all levels
export type ShadowLevels = Record<number, ShadowLevel>;

// You could also define types for functions that apply these shadows if needed
// For example, a type for a function that returns a CSS string based on a shadow level
export type BoxShadowFunction = (level: number) => string;
