import { HeadingProps, ButtonProps } from "@chakra-ui/react";

export const headingProps = {
  color: "#fff",
  fontSize: { lg: "48px", xl: "50px", "2xl": "55px" },
  my: { lg: "96px", xl: "128px", "2xl": "160px" },
} as HeadingProps;

export const buttonProps = {
  right: "0",
  variant: "unstyled",
  _focus: { outline: "none", WebkitTapHighlightColor: "#f5f5f522" },
  position: "absolute",
  fontSize: { lg: "24px", xl: "32px" },
} as ButtonProps;
