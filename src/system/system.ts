export const withSystemStyles = (props: any) => {
  const systemStyles: any = {};

  console.log(props.wrap);
  if (props.direction) systemStyles.flexDirection = props.direction;
  if (props.wrap) systemStyles.flexWrap = props.wrap;
  if (props.basis) systemStyles.flexBasis = props.basis;
  if (props.grow) systemStyles.flexGrow = props.grow;
  if (props.shrink) systemStyles.flexShrink = props.shrink;
  if (props.align) systemStyles.alignItems = props.align;
  if (props.alignSelf) systemStyles.alignSelf = props.alignSleft;
  if (props.justify) systemStyles.justifyContent = props.justify;
  if (props.spacing) systemStyles.gap = props.spacing;

  if (props.display) systemStyles.display = props.display;
  if (props.bg) systemStyles.backgroundColor = props.bg;

  if (props.p) systemStyles.padding = props.p;
  if (props.pTop) systemStyles.paddingBlockStart = props.pTop;
  if (props.pBottom) systemStyles.paddingBlockEnd = props.pBottom;
  if (props.pStart) systemStyles.paddingInlineStart = props.pStart;
  if (props.pEnd) systemStyles.paddingInlineEnd = props.pEnd;

  if (props.m) systemStyles.margin = props.m;
  if (props.mTop) systemStyles.marginBlockStart = props.mTop;
  if (props.mBottom) systemStyles.marginBlockEnd = props.mBottom;
  if (props.mStart) systemStyles.marginInlineStart = props.mStart;
  if (props.mEnd) systemStyles.marginInlineEnd = props.mEnd;

  if (props.color) systemStyles.color = props.color;
  if (props.fontFamily) systemStyles.fontFamily = props.fontFamily;
  if (props.textAlign) systemStyles.textAlign = props.textAlign;
  if (props.fontWeight) systemStyles.fontWeight = props.fontWeight;
  if (props.letterSpacing) systemStyles.letterSpacing = props.letterSpacing;
  if (props.fontSize) systemStyles.fontSize = props.fontSize;
  if (props.textTransform) systemStyles.textTransform = props.textTransform;

  return systemStyles;
};
export default {};
