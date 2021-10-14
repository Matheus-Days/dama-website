import {
  ButtonProps,
  GridProps,
  GridItemProps,
  HeadingProps,
  InputProps,
  StackProps,
  TextProps,
} from "@chakra-ui/react";

export const gridProps = {
  templateColumns: { base: "1fr", lg: "1fr 1fr" },
  templateRows: { base: "1fr 1fr", lg: "1fr" },
} as GridProps;

export const textGridItemProps = {
  gridColumn: "1",
  gridRow: "1",
  paddingLeft: { base: "38px", lg: "80px", xl: "112px", "2xl": "142px" },
  paddingRight: { base: "38px", lg: "96px", xl: "144px", "2xl": "234px" },
  paddingY: { base: "220px", "2xl": "300px" },
} as GridItemProps;

export const headingProps = {
  color: "white",
  fontSize: { base: "43px", lg: "35px", xl: "45px", "2xl": "55px" },
  lineHeight: { base: "47px", lg: "40px", xl: "50px", "2xl": "60px" },
} as HeadingProps;

export const textProps = {
  color: "white",
  fontSize: { base: "17px", lg: "17px", xl: "20px" },
  lineHeight: { base: "22px", lg: "22px", xl: "25px" },
  mt: "24px",
} as TextProps;

export const formStackProps = {
  spacing: { base: "64px", "2xl": "88px" },
  paddingLeft: { base: "55px", lg: "55px", xl: "96px", "2xl": "140px" },
  paddingRight: { base: "55px", lg: "112px", xl: "176px", "2xl": "420px" },
  paddingY: { base: "173px", "2xl": "140px" },
} as StackProps;

export const inputProps = {
  variant: "flushed",
  color: "white",
  fontSize: { base: "18px", lg: "16px", xl: "18px" },
  lineHeight: { base: "25px", lg: "23px", xl: "25px" },
  focusBorderColor: "white",
  _placeholder: {
    color: "white",
  },
} as InputProps;

export const buttonProps = {
  fontSize: { base: "22px", lg: "18px" },
  lineHeight: "25px",
  fontWeight: "normal",
  color: "#040505",
  borderRadius: "0",
} as ButtonProps;
