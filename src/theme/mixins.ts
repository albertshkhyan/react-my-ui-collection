import { css, CSSObject, CSSProp } from 'styled-components';
import { BoxShadowFunction } from '@/types/theme/shadows.types.ts';
import shadows from '@/theme/shadows.ts';

type AspectRatioMixin = (
  widthRatio: number,
  heightRatio: number,
) => ReturnType<typeof css>;

interface Mixins {
  toolbar: CSSObject;
  flexCenter: CSSProp;
  flexColumn: CSSProp;
  aspectRatio: AspectRatioMixin;
  responsiveFont: (
    minSize: number,
    maxSize: number,
    minScreen?: number, // optional because it has a default value
    maxScreen?: number, // optional because it has a default value
  ) => ReturnType<typeof css>;
}

/*
 * Demonstrating the usage of mixins in your styled components:
 *
 * - Spreading a `toolbar` object into your styled-component:
 *
 *   const StyledToolbar = styled.div({
 *     ...mixins.toolbar,
 *   });
 *
 * - Using template literals to utilize mixins:
 *
 *   const StyledComponent = styled.div`
 *     ${mixins.flexCenter()};
 *     ${mixins.responsiveFont(16, 1.5)};
 *     (Apply other styles as needed)
 *   `;
 *
 * - Using aspectRatioMixin to set an aspect ratio:
 *
 *   import { aspectRatio } from './mixins';
 *   const AspectRatioBox = styled.div`
 *     ${aspectRatio(16, 9)};
 *   `;
 *
 */

export const mixins: Mixins = {
  toolbar: {
    minHeight: '56px',
    // You can use media queries directly in the CSSObject
    '@media (min-width: 0px) and (orientation: landscape)': {
      minHeight: '48px',
    },
    '@media (min-width: 600px)': {
      minHeight: '64px',
    },
  },
  // Flexbox Shortcuts:
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexColumn: css`
    display: flex;
    flex-direction: column;
  `,
  // Responsive Font Size:
  responsiveFont: (
    minSize: number,
    maxSize: number,
    minScreen: number = 320,
    maxScreen: number = 1280,
  ) => css`
    font-size: ${minSize}px;

    @media screen and (min-width: ${minScreen}px) {
      font-size: calc(
        ${minSize}px + (${maxSize} - ${minSize}) *
          ((100vw - ${minScreen}px) / (${maxScreen} - ${minScreen}))
      );
    }

    @media screen and (min-width: ${maxScreen}px) {
      font-size: ${maxSize}px;
    }
  `,
  // Aspect Ratio Box
  aspectRatio,
};

export const boxShadowMixin: BoxShadowFunction = function (level: number) {
  const shadow = shadows[level];
  if (!shadow) {
    throw new Error(`No shadow defined for level ${level}.`);
  }

  return css`
    box-shadow: ${shadow.xOffset}px ${shadow.yOffset}px ${shadow.blurRadius}px
      ${shadow.spreadRadius}px ${shadow.color};
  `;
};

function aspectRatio(
  widthRatio: number,
  heightRatio: number,
): ReturnType<typeof css> {
  return css`
    position: relative;
    &::before {
      content: '';
      width: 1px;
      margin-left: -1px;
      float: left;
      height: 0;
      padding-top: calc(100% / (${widthRatio} / ${heightRatio}));
    }
    &::after {
      content: '';
      display: table;
      clear: both;
    }
    > * {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: auto;
    }
  `;
}

export default mixins;
