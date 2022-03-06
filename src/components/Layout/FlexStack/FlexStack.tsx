import React from "react";
import styled from "@emotion/styled";
import { withTheme } from "@emotion/react";
import { HTMLElementCSSProperties } from "../../../system/system.types";
import { withSystemStyles } from "../../../system/system";

type Props = HTMLElementCSSProperties & {
  isInline?: boolean;
  [rest: string]: any;
};

/**
 * @param props Definida en type {@link Props}
 * @returns
 */
const FlexStack = (props: Props) => {
  const { isInline = false, ...rest } = props;
  const Tag = rest.as || "div";

  console.log(withSystemStyles)

  const ContainerFlex = styled(Tag)(() => ({
		...withSystemStyles(props),
		display: isInline ? 'inline-flex' : 'flex',
 	}));


  return <ContainerFlex {...rest} />;
};

export default withTheme(FlexStack);
