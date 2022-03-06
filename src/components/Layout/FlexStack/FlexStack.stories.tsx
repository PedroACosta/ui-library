import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FlexStack from "./FlexStack";

export default {
  title: "Layout/FlexStack",
  component: FlexStack,
} as ComponentMeta<typeof FlexStack>;

const Template: ComponentStory<typeof FlexStack> = (args) => (
  <FlexStack {...args}>Test</FlexStack>
);

export const Normal = Template.bind({});
Normal.args = {
  isInline: true,
  as: "div",
  wrap: "wrap",
};
