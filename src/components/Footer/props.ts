import {
  GridProps,
  GridItemProps,
  ImageProps,
  LinkProps,
} from "@chakra-ui/react";

export const gridProps = {
  templateColumns: {
    base: "1fr 1fr 1fr 1fr",
    md: "98px 98px 1fr 196px",
    lg: "123px 123px 1fr 246px",
    xl: "164px 164px 1fr 328px",
    "2xl": "246px 246px 1fr 492px",
  },
  templateRows: {
    base: "1fr 1fr 1.5fr 1fr 1fr",
    md: "1fr 1fr 1.5fr 1fr 0.5fr",
    lg: "1fr 1fr",
  },
  backgroundColor: "white",
} as GridProps;

export const img1GridItemProps = {
  gridColumn: { base: "1", md: "1" },
  gridRow: { base: "1/3", md: "1/3" },
} as GridItemProps;

export const img2GridItemProps = {
  gridColumn: { base: "2", md: "2" },
  gridRow: { base: "2", md: "2" },
} as GridItemProps;

export const infoGridItemProps = {
  gridColumn: { base: "1/5", md: "3" },
  gridRow: { base: "3/6", md: "1/3" },
  display: "flex",
  flexDir: "column",
  alignItems: "center",
  justifyContent: "center",
} as GridItemProps;

export const infoGridProps = {
  w: { base: "264px", md: "95%", lg: "300px", xl: "417px" },
  templateColumns: { base: "1fr", md: "1fr 1fr" },
  templateRows: {
    base: "60px repeat(4, 23px)",
    md: "72px 23px 23px",
    lg: "72px 23px 23px",
    xl: "101px 27px 27px",
  },
  rowGap: { base: "8px", md: "12px", lg: "16px" },
} as GridProps;

export const logoGridItemProps = {
  gridColumn: { md: "1/3" },
  gridRow: { md: "1" },
  display: "flex",
  justifyContent: "center",
} as GridItemProps;

export const iconImgProps = {
  display: "inline",
  w: { base: "23px", lg: "18px", xl: "27px" },
  mr: { base: "12px", lg: "4px", xl: "12px" },
} as ImageProps;

export const linkProps = {
  color: "#040505",
  fontSize: { base: "13px", lg: "12px", xl: "16px" },
  display: "inline",
  _hover: {
    textDecor: "none",
  },
} as LinkProps;

export const img3GridItemProps = {
  gridColumn: { base: "3/5", md: "4" },
  gridRow: { base: "6", md: "1/3" },
} as GridItemProps;
