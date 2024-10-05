import type { StoryObj, Meta } from "@storybook/react";
import { Text, Tooltip, TooltipProps } from "@rxd-ui/react";

export default {
  title: "Form/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: {
    children: (
      <Text css={{ color: "$gray100", fontWeight: "bold" }} size={"sm"}>
        28 June - Available
      </Text>
    ),
  },
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {};
export const Unavalaible: StoryObj<TooltipProps> = {
  args: {
    children: (
      <Text css={{ color: "$gray100", fontWeight: "bold" }} size={"sm"}>
        21 October - Unavalaible
      </Text>
    ),
  },
};
