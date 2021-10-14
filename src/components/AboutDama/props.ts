import {
  GridProps,
  GridItemProps,
  LinkProps,
  TextProps,
  HeadingProps,
  StackProps,
} from "@chakra-ui/react";

export const sectionGridProps = {
  gridTemplateColumns: {
    base: "36px 1fr",
    lg: "1fr 633px",
    xl: "1fr 844px",
  },
  gridTemplateRows: {
    base: "306px 1fr 2fr 0.5fr",
    md: "306px 1fr 1fr 0.3fr",
    lg: "1fr 1fr 0.55fr",
    xl: "1fr 1fr 0.7fr",
    "2xl": "1fr 1fr 1fr",
  },
  bg: "#F9F5F5",
  mt: "-1px",
} as GridProps;

export const textItemProps = {
  px: { base: "40px", lg: "96px" },
  gridColumn: { base: "1/3", lg: "1/2" },
  gridRow: { base: "2/3", lg: "1/2" },
  zIndex: "10",
  display: "flex",
  flexDir: "column",
  justifyContent: "center",
} as GridItemProps;

export const headingProps = {
  fontSize: { base: "43px", lg: "48px" },
  mt: { base: "64px", lg: "0" },
  color: "#040505",
} as HeadingProps;

export const textProps = {
  fontSize: { base: "17px", md: "20px" },
  lineHeight: { base: "22px", md: "25px" },
  color: "#040505",
} as TextProps;

export const imageItemProps = {
  gridRow: "1/3",
  gridColumn: { base: "2/3" },
  h: { lg: "100%" },
  w: { base: "100%", lg: "" },
} as GridItemProps;

export const ulGridItemProps = {
  gridRow: { base: "3/4", lg: "2/3" },
  gridColumn: "1/3",
  zIndex: "10",
  px: { base: "36px", lg: "96px" },
  mt: { base: "70px" },
} as GridItemProps;

export const ulHeadingProps = {
  fontSize: { base: "43px", lg: "48px", xl: "50px", "2xl": "55px" },
  color: "#040505",
  pr: { base: "64px", lg: "0" },
} as HeadingProps;

export const ulStackProps = {
  wrap: "wrap",
  justifyContent: "center",
  alignItems: "self-start",
  mt: { base: "23px", lg: "144px" },
} as StackProps;

export const liStackProps = {
  spacing: { base: "20px", lg: "30px" },
  pt: { base: "60px", lg: "0" },
  mx: { lg: "32px" },
} as StackProps;

export const liTextProps = {
  color: "#040505",
  maxW: { base: "154px", lg: "246px" },
  textAlign: "center",
  fontSize: { base: "17px", lg: "20px" },
} as TextProps;

export const contactLinkProps = {
  bg: "#265CA8",
  color: "#ffffff",
  fontFamily: "Raleway",
  fontWeight: "normal",
  fontSize: { base: "16px", lg: "18px", "2xl": "22px" },
  h: { base: "45px", lg: "57px" },
  w: { base: "342px", lg: "385px" },
  py: { base: "12px", lg: "18px" },
  textAlign: "center",
  mt: { base: "70px", lg: "100px" },
  transition: "box-shadow 0.3s ease-in-out",
  _hover: {
    textDecoration: "none",
    fontWeight: "600",
    boxShadow: "0px 5px 7px -1px rgba(0, 0, 0, 0.33)",
  },
} as LinkProps;
