// Shadow depth definitions

import { ShadowLevels } from '@/types/theme/shadows.types.ts';

export const shadows: ShadowLevels = {
  1: {
    xOffset: 0,
    yOffset: 1,
    blurRadius: 3,
    spreadRadius: 0,
    color: 'rgba(0, 0, 0, 0.2)',
  },
  2: {
    xOffset: 0,
    yOffset: 2,
    blurRadius: 6,
    spreadRadius: -1,
    color: 'rgba(0, 0, 0, 0.23)',
  },
  // Continue defining shadows for each level you need...
};

export default shadows;
