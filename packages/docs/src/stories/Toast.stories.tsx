import type { StoryObj, Meta } from "@storybook/react";
import { Heading, Toast, ToastProps } from "@rxd-ui/react";

export default {
  title: "Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
  args: {
    title: "Agendamento realizado",
    children: "Quarta-feira, 23 de Outubro às 16h.",
  },
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {};

export const WithLongText: StoryObj<ToastProps> = {
  args: {
    children:
      "Seu agendamento foi confirmado. Verifique todos os detalhes no painel.",
  },
};
