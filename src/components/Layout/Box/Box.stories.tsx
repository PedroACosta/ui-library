import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Box from "./Box";

export default {
  title: "Layout/Box",
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <Box {...args}>Test</Box>
);

export const Normal = Template.bind({});
Normal.args = {
  isInline: true,
  as: "div",
};
