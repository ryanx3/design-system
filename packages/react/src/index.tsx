import { VariantProps } from "@stitches/react";
import { styled } from "./styles";

export type ButtonProps = VariantProps<typeof Button> ;

export const Button = styled("button", {
  fontFamily: "$default",
  backgroundColor: "$rxd300",
  borderRadius: "$sm",
  border: 0,
  fontWeight: "$bold",
  color: "$white",
  cursor: "pointer",

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: "$2 $4",
      },
      big: {
        fontSize: 16,
        padding: "$3 $6",
      },
    },
  },

  defaultVariants: {
    size: "small",
  },
});
