import { ComponentProps } from "react";
import { styled } from "../styles";

export const Tooltip = styled("div", {
  background: "$gray900",
  padding: "$3 $4",
  borderRadius: "$sm",

  textAlign: "center",
  width: "max-content",
  position: "relative",
  fontWeight: "$medium",
  transition: "opacity 0.2s ease-in-out",
  lineHeight: 0,

  "&:hover": {
    opacity: 1,
    visibility: "visible",
  },

  "&::before": {
    content: "",
    width: 0,
    height: 0,
    position: "absolute",
    borderLeft: "10px solid transparent",
    borderRight: "10px solid transparent",
    borderTop: "10px solid $colors$gray900",
    bottom: "-10px",
    left: "50%",
    transform: "translateX(-50%)",
  },
});

export interface TooltipProps extends ComponentProps<typeof Tooltip> {}

Tooltip.displayName = "Tooltip";
