import {
  LinkProps,
  GridProps,
  GridItemProps,
  HeadingProps,
  TextProps,
} from "@chakra-ui/react";

export const sectionGridProps = {
  templateRows: {
    base: "1fr 351px 44px ",
    sm: "1fr, 407px 44px",
    md: "1fr 652px 44px",
    lg: "1fr 48px",
  },
  templateColumns: { base: "1fr", lg: "3fr 2fr" },
  bg: "#040505",
  position: "relative",
  zIndex: "20",
  maxH: { lg: "100vh" },
} as GridProps;

export const textItemProps = {
  gridColumn: { base: "1/2", lg: "2/3" },
  gridRow: { base: "2/3", lg: "1/2" },
  pl: { base: "2rem", lg: "2rem" },
  pr: { base: "4rem", lg: "6rem" },
  py: { base: "50px", lg: "0" },
} as GridItemProps;

export const headingProps = {
  fontWeight: "normal",
  color: "white",
  fontSize: { base: "43px", lg: "36px", xl: "43px", "2xl": "55px" },
} as HeadingProps;

export const textProps = {
  color: "white",
  mt: { base: "1rem", lg: "1rem" },
  fontSize: { base: "17px", lg: "16px", xl: "16px", "2xl": "22px" },
} as TextProps;

export const linkProps = {
  color: "white",
  fontSize: {
    base: 22,
    lg: 16,
    xl: 18,
    "2xl": 22,
  },
  h: "100%",
  w: { base: "100%", lg: "80%" },
  ml: { base: "0", lg: "-1px" },
  mt: { base: "-1px", lg: "0" },
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  bgColor: "blue.500",
  _hover: {
    textDecoration: "none",
  },
} as LinkProps;
