import { FlexProps, HeadingProps, TextProps } from "@chakra-ui/react";

export const containerProps = {
  direction: "column",
  alignItems: "center",
  mt: {
    base: "calc(-1 * (201px + 90vw / 2.8))",
    lg: "calc(-1 * (80vw / 2.8))",
  },
} as FlexProps;

export const headingProps = {
  color: "#040505",
  fontSize: { base: "60px", lg: "90px", xl: "100px", "2xl": "110px" },
  lineHeight: {
    base: "60px",
    lg: "110px",
    xl: "120px",
    "2xl": "130px",
  },
  px: { base: "320px", lg: "0", xl: "220px" },
  textAlign: "center",
} as HeadingProps;

export const textProps = {
  fontFamily: "Cairo",
  color: "#040505",
  fontSize: { base: "17px", lg: "24px", xl: "28px", "2xl": "30px" },
  lineHeight: { base: "22px", lg: "33px", "2xl": "65px" },
  mb: "46px",
  mt: "16px",
  textAlign: "center",
  px: { base: "36px", lg: "0", xl: "220px" },
} as TextProps;
