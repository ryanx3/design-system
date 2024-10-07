import { styled } from "../../styles";

export const ToastContainer = styled("div", {
  borderRadius: "$sm",
  padding: "$3 $5",
  background: "$gray800",
  width: "22.5rem",
  display: "flex",
  justifyContent: "space-between",

  border: "2px solid $colors$gray500",

  fontFamily: "$default",
  color:"$gray200",
  fontSize: "$sm",
  lineHeight:"$base",
  
  svg: {
    color: "$gray200",
    cursor: "pointer",
  },
});

export const Title = styled("h3", {
  color: "$white",
  fontSize: "$lg",
  fontWeight: "$bold",
  lineHeight: "$base",
  margin: 0
});