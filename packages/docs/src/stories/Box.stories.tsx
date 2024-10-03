import type { StoryObj, Meta } from "@storybook/react";
import { Box, BoxProps, Text } from "@rxd-ui/react";

export default {
  title: "Surfaces/Box",
  component: Box,
  tags: ["autodocs"],
  args: {
    children: (
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo dolor
      </Text>
    ),
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
