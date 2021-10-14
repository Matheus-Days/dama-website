import { TextProps } from "@chakra-ui/react";

export const textConteinerProps = {
  display: "inline-block",
  textAlign: "right",
} as TextProps;

export const signSpanProps = {
  display: "inline-block",
  color: "#707070",
  fontFamily: "Cairo",
  fontWeight: "light",
  fontSize: { base: "120px", lg: "128px", xl: "240px" },
  lineHeight: { base: "128px", lg: "128px", xl: "240px" },
} as TextProps;

export const numberSpanProps = {
  fontSize: { base: "120px", lg: "128px", xl: "240px" },
  lineHeight: { base: "128px", lg: "128px", xl: "240px" },
  color: "white",
  display: "inline-block",
  fontFamily: "Cairo",
  fontWeight: "bold",
} as TextProps;

export const descriptionSpanProps = {
  display: "block",
  color: "white",
  fontSize: { base: "24px", lg: "27px", xl: "48px" },
  textAlign: "right",
} as TextProps;

export const smDescriptionProps = {
  display: "block",
  color: "white",
  fontSize: { base: "14px", xl: "20px", "2xl": "22px" },
  textAlign: "right",
  ml: { base: "30%", lg: "20%" },
} as TextProps;
