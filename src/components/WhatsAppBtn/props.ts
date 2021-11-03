import { BoxProps, LinkProps, TextProps } from "@chakra-ui/react";

export const linkProps = {
  display: "block",
  height: "80px",
  width: "90px",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  transition: "width 0.3s",
  role: "group",
  target: "_blank",
  _hover: {
    width: "300px",
  },
  _focus: {
    outline: "none",
  },
} as LinkProps;

export const textProps = {
  display: "inline-block",
  fontSize: "16px",
  lineHeight: "18px",
  fontWeight: "bold",
  textAlign: "right",
  width: "240px",
  height: "45px",
  padding: "5px 64px 0 24px",
  borderRadius: "50px",
  backgroundColor: "white",
  boxShadow: "0 10px 10px rgba(0, 0, 0, 0.1)",
  opacity: "0",
  position: "absolute",
  top: "11px",
  right: "-240px",
  transition: "all 0.3s",
  _groupHover: {
    right: "20px",
    opacity: "1",
  },
} as TextProps;

export const iconBoxProps = {
  display: "inline-block",
  height: "65px",
  width: "65px",
  textAlign: "center",
  lineHeight: "65px",
  borderRadius: "50px",
  boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)",
  backgroundColor: "white",
  position: "absolute",
  right: "8px",
} as BoxProps;
