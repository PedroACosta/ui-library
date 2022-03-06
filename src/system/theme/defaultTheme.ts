import { ITheme } from "../system.types";
import radius from "./tokens/radius";
import colors from "./tokens/colors";
import palette from "./tokens/palette";
import sizes from "./tokens/sizes";
import space from "./tokens/space";
import typography from "./tokens/typography";
import zIndex from "./tokens/zIndex";

const theme: ITheme = {
  light: {
		...typography,
		space,
		sizes,
		radius,
		palette,
		colors,
		zIndex,
  },
  // dark: {
	// 	...typography,
  //   ...space,
  //   ...sizes,
  //   ...borderRadius,
  //   ...zIndex,
	// 	...colors,
  //   primary: palette.emerald[500],
  // },
};

export default theme;
