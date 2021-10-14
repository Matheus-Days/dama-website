import {
  GridProps,
  GridItemProps,
  HeadingProps,
  ImageProps,
  LinkProps,
  TextProps,
} from "@chakra-ui/react";

import audoPng from "../../assets/img/Audo_IMG.png";

export const gridProps = {
  templateColumns: { base: "1fr", lg: "2fr 1fr", xl: "1fr 1fr" },
  templateRows: { base: "2fr 1fr", lg: "1fr" },
  h: "931px",
  backgroundImage: audoPng,
  backgroundPosition: "left",
} as GridProps;

export const textGridItemProps = {
  gridColumn: "1",
  gridRow: "1",
  display: "flex",
  flexDir: "column",
  justifyContent: "center",
  pl: { base: "36px", lg: "80px", xl: "143px", "2xl": "420px" },
  pr: { base: "36px", lg: "80px", xl: "0" },
  pt: { base: "96px", lg: "0" },
  pb: { base: "0", lg: "0" },
} as GridItemProps;

export const headingProps = {
  color: "white",
  fontSize: { base: "43px", lg: "40px", "2xl": "55px" },
  lineHeight: { base: "47px", "2xl": "60px" },
} as HeadingProps;

export const textProps = {
  color: "white",
  fontSize: { base: "17px", lg: "16px", xl: "20px" },
  lineHeight: { base: "22px", lg: "21px", xl: "25px" },
  mt: { base: "17px", "2xl": "20px" },
} as TextProps;

export const logoGridItemProps = {
  gridColumn: { base: "1", lg: "2" },
  gridRow: { base: "2", lg: "1" },
  display: "flex",
  flexDir: "column",
  justifyContent: { base: "flex-start", lg: "center" },
  alignItems: { base: "center", lg: "flex-start" },
  pl: { xl: "140px", "2xl": "224px" },
  pt: { base: "40px", lg: "0" },
} as GridItemProps;

export const imageProps = {
  w: { base: "217px", xl: "max-content" },
} as ImageProps;

export const linkProps = {
  color: "#040505",
  backgroundColor: "white",
  fontSize: { base: "17px", xl: "22px", "2xl": "22px" },
  lineHeight: { base: "22px", xl: "25px", "2xl": "25px" },
  textAlign: "center",
  w: { base: "217px", xl: "375px" },
  h: { base: "32px", xl: "57px" },
  pt: { base: "6px", xl: "16px" },
  mt: { base: "18px", xl: "30px" },
  cursor: "pointer",
  _hover: {
    fontWeight: "600",
  },
} as LinkProps;
