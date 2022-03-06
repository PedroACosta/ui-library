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
const Box = (props: Props) => {
  const { isInline = false, ...rest } = props;
  const Tag = rest.as || "div";

  const ContainerBox = styled(Tag)(() => ({
		...withSystemStyles(props),
		display: isInline ? 'inline-block' : 'block',
 	}));


  return <ContainerBox {...rest} />;
};

export default withTheme(Box);
