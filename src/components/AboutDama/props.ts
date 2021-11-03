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
    base: "1fr 355px",
    md: "1fr 632px",
    lg: "1fr 437px",
    xl: "1fr 632px",
    "2xl": "1fr 843px",
  },
  gridTemplateRows: {
    base: "288px 273px 416px 1fr",
    md: "512px 487px 1fr",
    lg: "384px 365px 1fr",
    xl: "512px 487px 1fr",
    "2xl": "650px 683px 1fr",
  },
  bg: "#F9F5F5",
  mt: "-1px",
} as GridProps;

export const textItemProps = {
  pl: { base: "40px", md: "40px", lg: "32px", xl: "96px", "2xl": "142px" },
  pr: { base: "40px", md: "160px", lg: "32px", xl: "64px", "2xl": "112px" },
  pt: { base: "48px", md: "64px", lg: "32px", xl: "96px", "2xl": "142px" },
  gridColumn: { base: "1/3", lg: "1/2" },
  gridRow: { base: "2/4", lg: "1" },
  display: "flex",
  flexDir: "column",
  justifyContent: { base: "flex-start", lg: "flex-start" },
  zIndex: "10",
} as GridItemProps;

export const headingProps = {
  fontSize: { base: "36px", sm: "43px", lg: "32px", xl: "48px", "2xl": "55px" },
  pr: { base: "32px", sm: "80px", lg: "0" },
  pt: { base: "24px", sm: "" },
  color: "#040505",
} as HeadingProps;

export const textProps = {
  fontSize: { base: "17px", xl: "20px" },
  lineHeight: { base: "22px", md: "25px" },
  color: "#040505",
} as TextProps;

export const photoItemProps = {
  gridRow: "1",
  gridColumn: "2",
  display: "flex",
  justifyContent: "flex-end",
} as GridItemProps;

export const vectorItemProps = {
  gridRow: "2",
  gridColumn: "2",
  display: "flex",
  justifyContent: "flex-end",
} as GridItemProps;

export const ulGridItemProps = {
  gridRow: { base: "4", md: "3", lg: "2/4" },
  gridColumn: "1/3",
  zIndex: "10",
  px: { base: "40px", md: "40px", lg: "32px", xl: "96px", "2xl": "142px" },
  mt: { lg: "112px" },
} as GridItemProps;

export const ulHeadingProps = {
  fontSize: { base: "43px", lg: "32x", xl: "50px", "2xl": "55px" },
  color: "#040505",
  pr: { base: "64px", lg: "0" },
} as HeadingProps;

export const ulStackProps = {
  wrap: "wrap",
  justifyContent: "center",
  alignItems: "self-start",
  mt: { base: "23px", lg: "48px" },
} as StackProps;

export const liStackProps = {
  spacing: { base: "20px", lg: "30px" },
  pt: { base: "60px" },
  mx: { lg: "32px" },
} as StackProps;

export const liTextProps = {
  color: "#040505",
  maxW: { base: "154px", lg: "246px" },
  textAlign: "center",
  fontSize: { base: "17px", xl: "20px" },
} as TextProps;

export const contactLinkProps = {
  bg: "#265CA8",
  color: "#ffffff",
  fontFamily: "Raleway",
  fontWeight: "normal",
  fontSize: { base: "16px", lg: "18px", "2xl": "22px" },
  h: { base: "45px", lg: "57px" },
  w: { base: "342px", lg: "385px" },
  py: { base: "12px", lg: "16px", "2xl": "13px" },
  textAlign: "center",
  mt: { base: "70px", xl: "100px" },
  mb: { base: "32px" },
  transition: "box-shadow 0.3s ease-in-out",
  _hover: {
    textDecoration: "none",
    fontWeight: "600",
    boxShadow: "0px 5px 7px -1px rgba(0, 0, 0, 0.33)",
  },
} as LinkProps;
