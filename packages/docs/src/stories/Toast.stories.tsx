import type { StoryObj, Meta } from "@storybook/react";
import { Heading, Text, Toast, ToastProps } from "@rxd-ui/react";

export default {
  title: "Form/Toast",
  component: Toast,
  tags: ["autodocs"],
  args: {
    title: <Heading>Agendamento realizado</Heading>
  },
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {};
export const Unavalaible: StoryObj<ToastProps> = {};
