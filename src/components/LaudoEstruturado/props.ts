import { FlexProps, HeadingProps, TextProps } from "@chakra-ui/react";

export const containerProps = {
  direction: "column",
  alignItems: "center",
  mt: { base: "-480px", lg: "calc(50vw * 0.71 * -1)" },
} as FlexProps;

export const headingProps = {
  color: "#040505",
  fontSize: { base: "60px", lg: "60px", xl: "70px", "2xl": "110px" },
  lineHeight: {
    base: "60px",
    lg: "80px",
    xl: "90px",
    "2xl": "130px",
  },
  px: { base: "320px", md: "100px", lg: "0", xl: "220px" },
  textAlign: "center",
} as HeadingProps;

export const subtitleProps = {
  fontFamily: "Cairo",
  color: "#040505",
  fontSize: { base: "17px", lg: "24px", xl: "28px", "2xl": "30px" },
  lineHeight: { base: "22px", lg: "33px", "2xl": "65px" },
  fontWeight: "bold",
} as TextProps;

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
