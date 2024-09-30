import type { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps } from "@rxd-ui/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: <></>,
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
