import { styled } from "../../styles";

export const ToastContainer = styled("div", {
  borderRadius: "$sm",
  padding: "$3 $5",
  background: "$gray800",
  width: "fit-content",
  border: "1px solid $colors$gray600",


  svg: {
    color: "$gray200"
  }
});

export const Title = styled("h3", {

  svg: {
    color: "$gray200"
  }
});