import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@rxd-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel est numquam, fugit unde molestiae laboriosam et. Porro, minima. Ex quae quisquam corrupti! Aperiam ab dolor laboriosam voluptas eos laborum.",
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  },
};
