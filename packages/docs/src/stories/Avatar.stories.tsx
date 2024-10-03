import type { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@rxd-ui/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    src: "https://github.com/ryanx3.png",
    alt: "Ryan Martins",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const Fallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
