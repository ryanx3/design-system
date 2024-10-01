import type { StoryObj, Meta } from "@storybook/react";
import { Box, Text, TextArea, TextAreaProps } from "@rxd-ui/react";

export default {
  title: "Form/TextArea ",
  component: TextArea,
  args: {},
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size={"md"}> Observations</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: "Add any observations",
  },
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
};
