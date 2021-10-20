import {
  AccordionItemProps,
  HeadingProps,
  GridProps,
  GridItemProps,
  LinkProps,
  TextProps,
} from "@chakra-ui/react";

export const gridProps = {
  gridTemplateColumns: { base: "1fr", lg: "75% 25%" },
  gridTemplateRows: { base: "20% 70% 10%", lg: "10% 80% 10%" },
  mt: { base: "112px" },
} as GridProps;

export const headingGridItemProps = {
  gridColumn: { base: "1", lg: "1/3" },
  gridRow: { base: "1" },
  pl: { base: "36px", lg: "96px" },
} as GridItemProps;

export const accordionGridItemProps = {
  gridColumn: { base: "1", lg: "1/2" },
  gridRow: { base: "2" },
  pl: { base: "36px", lg: "96px" },
  pr: { base: "36px", lg: "0" },
  pt: { lg: "32px" },
} as GridItemProps;

export const imageGridItemProps = {
  gridColumn: "2",
  gridRow: "1/4",
  display: "flex",
  justifyContent: "flex-end",
} as GridItemProps;

export const linkGridItemProps = {
  gridColumn: { base: "1", lg: "1/3" },
  gridRow: "3",
  pl: { base: "36px", lg: "96px" },
  pt: { base: "32px", md: "64px", lg: "32px" },
  display: "flex",
  alignItems: "flex-end",
} as GridItemProps;

export const headingProps = {
  color: "white",
  fontSize: { base: "43px", lg: "48px", xl: "50px", "2xl": "55px" },
  lineHeight: { base: "51px", lg: "57px", "2xl": "65px" },
  mb: { base: "53px", lg: "36px" },
} as HeadingProps;

export const accordionItemProps = {
  border: "none",
  pt: { base: "30px" },
} as AccordionItemProps;

export const buttonTextProps = {
  color: "white",
  fontStyle: "italic",
  fontWeight: "light",
  fontSize: { base: "14px", md: "20px", lg: "20px", xl: "24px", "2xl": "40px" },
  lineHeight: { base: "30px", lg: "34px", xl: "34px", "2xl": "60px" },
  borderBottom: "2px solid #fff;",
  textAlign: { base: "left" },
} as TextProps;

export const panelTextProps = {
  color: "white",
  fontSize: { base: "17px", lg: "20px", xl: "22px" },
} as TextProps;

export const linkProps = {
  color: "white",
  fontSize: { base: "17px", lg: "22px" },
  h: { base: "44px", xl: "50px", "2xl": "57px" },
  w: { base: "300px", xl: "340px", "2xl": "385px" },
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  bgColor: "blue.500",
  _hover: {
    textDecoration: "none",
  },
} as LinkProps;
