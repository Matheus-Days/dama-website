import {
  BoxProps,
  GridProps,
  GridItemProps,
  HeadingProps,
  ImageProps,
  StackProps,
  TextProps,
} from "@chakra-ui/react";
import { Settings } from "react-slick";

export const gridProps = {
  backgroundColor: "white",
  h: { lg: "614px", xl: "786px", "2xl": "961px" },
  w: "100vw",
  templateColumns: { base: "100%", lg: "55% 45%" },
  templateRows: { base: "1fr 0.9fr", md: "1fr 0.7fr", lg: "100%" },
} as GridProps;

export const imgGridItemProps = {
  gridColumn: "1",
  gridRow: "1",
  display: "flex",
  justifyContent: { base: "center", lg: "flex-end" },
  alignItems: "center",
  pt: { base: "64px", md: "", lg: "0" },
} as GridItemProps;

export const imgBoxProps = {
  w: { base: "350px", md: "437px", lg: "547px", xl: "684px", "2xl": "855px" },
  h: { base: "294px", md: "368px", lg: "460px", xl: "576px", "2xl": "720px" },
} as BoxProps;

export const imgProps = {
  maxW: {
    base: "350px",
    md: "437px",
    lg: "547px",
    xl: "684px",
    "2xl": "855px",
  },
  maxH: {
    base: "294px",
    md: "368px",
    lg: "460px",
    xl: "576px",
    "2xl": "720px",
  },
  fit: "contain",
} as ImageProps;

export const imgSliderSettings = {
  arrows: false,
  dots: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "-32px",
} as Settings;

export const textGridItemProps = {
  gridColumn: { base: "1", lg: "2" },
  gridRow: { base: "2", lg: "1" },
  display: "flex",
  justifyContent: { base: "center", lg: "flex-start" },
  alignItems: { base: "flex-start", lg: "center" },
  pt: { base: "64px", lg: "0" },
  pb: { base: "32px", md: "0" },
  pl: { lg: "51px", xl: "64px", "2xl": "80px" },
} as GridItemProps;

export const textBoxProps = {
  w: { base: "278px", md: "432px", lg: "345px", xl: "432px", "2xl": "541px" },
  h: { base: "104px", md: "131px", lg: "164px", xl: "205px", "2xl": "257px" },
} as BoxProps;

export const textStackProps = {
  pl: "1px",
} as StackProps;

export const slideHeadingProps = {
  color: "#040505",
  fontSize: { base: "27px", md: "28px", lg: "35px", xl: "44px", "2xl": "55px" },
  textAlign: { base: "center", lg: "left" },
} as HeadingProps;

export const slideTextProps = {
  color: "#040505",
  fontSize: { base: "16px", xl: "18px", "2xl": "20px" },
  textAlign: { base: "center", lg: "left" },
} as TextProps;
