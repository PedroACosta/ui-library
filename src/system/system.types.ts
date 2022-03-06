import { Radius } from "./theme/tokens/radius.types";
import Colors from "./theme/tokens/colors.types";
import { Palette } from "./theme/tokens/palette.types";
import { Sizes } from "./theme/tokens/sizes.types";
import { Space } from "./theme/tokens/space.types";
import { Typography } from "./theme/tokens/typography.types";
import { ZIndex } from "./theme/tokens/zIndex.types";

export interface ITheme {
  [theme: string]: Typography & {
    sizes: Sizes;
    space: Space;
    radius: Radius;
    palette: Palette;
    colors: Colors;
		zIndex: ZIndex;
  };
}

export type HTMLElementCSSFlexContainerProperties = {
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  wrap?: "wrap" | "nowrap" | "wrap-reverse" | "inherit";
  basis?:
    | "fill"
    | "max-content"
    | "min-content"
    | "fit-content"
    | "content"
    | "inherit"
    | "initial"
    | "unset"
    | string;
  grow?: "inherit" | "initial" | "unset" | number;
  shrink?: "inherit" | "initial" | "unset" | number;
  align?:
    | "normal"
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "self-start"
    | "self-end"
    | "inherit"
    | "initial"
    | "unset";
  alignSelf?:
    | "normal"
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "self-start"
    | "self-end"
    | "inherit"
    | "initial"
    | "unset";
  justify?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "inherit"
    | "initial"
    | "unset";
  spacing?: string | "inherit" | "initial" | "unset";
};

export type HTMLElementCSSContainerProperties =
  HTMLElementCSSFlexContainerProperties & {
    display?:
      | "block"
      | "inline"
      | "table"
      | "flex"
      | "grid"
      | "subgrid"
      | "contents"
      | "none"
      | "inherit"
      | "initial"
      | "unset"
      | "inline-block"
      | "inline-table"
      | "inline-flex"
      | "inline-grid";

    bg?: string; // TODO: Implementar type Color (ej: gray.500)

    p?: string; // TODO: Implementar type Space
    pTop?: string; // TODO: Implementar type Space
    pBottom?: string; // TODO: Implementar type Space
    pStart?: string; // TODO: Implementar type Space
    pEnd?: string; // TODO: Implementar type Space

    m?: string; // TODO: Implementar type Space
    mTop?: string; // TODO: Implementar type Space
    mBottom?: string; // TODO: Implementar type Space
    mStart?: string; // TODO: Implementar type Space
    mEnd?: string; // TODO: Implementar type Space
  };

export type HTMLElementCSSFontProperties = {
  fontFamily?: string;
  textAlign?: "start" | "center" | "end";
  color?: string; // TODO: Implementar type Color (ej: gray.500)
  fontWeight?: string; // TODO: Implementar type FontWeight (ej: 500)
  letterSpacing?: string; // TODO: Implementar type LetterSpacing (ej: xl)
  fontSize?: string; // TODO: Implementar type FontSize (ej: xl)
  textTransform?:
    | "uppercase"
    | "lowercase"
    | "capitalize"
    | "none"
    | "inherit"
    | "initial"
    | "unset";
};

export type HTMLElementCSSProperties = HTMLElementCSSFontProperties &
  HTMLElementCSSContainerProperties;

export type AsHTMLType = {
  as: keyof HTMLElement;
};

export type SystemElementProperties = AsHTMLType & HTMLElementCSSProperties;

/**
 * ElementProperties para implementar
 *
 * // Sizes
 * maxW: Sizes | string
 * maxH: Sizes | string
 * minW: Sizes | string
 * minH: Sizes | string
 *
 * // Borders
 * borderRadius: Radius | string
 * borderWidth: string
 * borderColor
 *
 * // General
 * opacity
 * zIndex
 *
 */
