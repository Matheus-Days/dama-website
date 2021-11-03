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

export const textContainerGridItemProps = {
  py: { base: "64px", md: "96px", lg: "130px" },
  paddingLeft: {
    base: "38px",
    md: "88px",
    lg: "80px",
    xl: "112px",
    "2xl": "142px",
  },
  paddingRight: {
    base: "38px",
    md: "88px",
    lg: "96px",
    xl: "144px",
    "2xl": "234px",
  },
} as GridItemProps;

export const textGridItemProps = {
  gridColumn: "1",
  gridRow: "2",
  py: { base: "40px" },
} as GridItemProps;

export const headingProps = {
  color: "white",
  fontSize: { base: "32px", sm: "43px", lg: "35px", xl: "42px", "2xl": "55px" },
  lineHeight: { base: "47px", lg: "40px", xl: "50px", "2xl": "60px" },
  zIndex: "10",
} as HeadingProps;

export const textProps = {
  color: "white",
  fontSize: { base: "16px", sm: "17px", lg: "17px", xl: "18px", "2xl": "20px" },
  lineHeight: {
    base: "16px",
    sm: "22px",
    lg: "22px",
    xl: "23px",
    "2xl": "25px",
  },
  mt: "24px",
  zIndex: "10",
} as TextProps;

export const formStackProps = {
  h: "100%",
  spacing: { base: "64px", "2xl": "88px" },
  paddingLeft: { base: "55px", lg: "55px", xl: "96px", "2xl": "140px" },
  paddingRight: { base: "55px", lg: "112px", xl: "176px", "2xl": "240px" },
  justifyContent: "center",
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
  fontFamily: "Raleway",
  fontSize: { base: "22px", lg: "18px" },
  lineHeight: "25px",
  fontWeight: "normal",
  borderRadius: "0",
  alignSelf: "center",
  transition: "all 0.5s",
  _disabled: {
    opacity: "1",
  },
} as ButtonProps;
