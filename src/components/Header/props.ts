import {
  IconButtonProps,
  LinkProps,
  FlexProps,
  StackProps,
} from "@chakra-ui/react";

export const widescreenLinkProps = {
  color: "white",
  fontSize: {
    base: 14,
    lg: 16,
    xl: 20,
    "2xl": 22,
  },
  _hover: {
    textDecoration: "none",
  },
} as LinkProps;

export const menuIconProps = {
  "aria-label": "Botão de menu",
  bg: "transparent",
  color: "white",
  position: "absolute",
  top: "20px",
  right: "20px",
  fontSize: "24px",
  _focusWithin: { backgroundColor: "transparent" },
} as IconButtonProps;

export const mobileLinkProps = {
  color: "white",
  fontSize: "17px",
  fontFamily: "Sora",
  _hover: {
    textDecoration: "none",
  },
} as LinkProps;

export const whatsappLinkProps = {
  bg: "white",
  color: "#040505",
  fontFamily: "Raleway",
  fontWeight: "bold",
  fontSize: "20px",
  lineHeight: "20px",
  textAlign: "right",
  p: "12px 92px 12px 0",
  my: "60px",
  position: "relative",
  _hover: {
    textDecoration: "none",
  },
  borderRadius: "31px",
  h: "62px",
  w: "285px",
} as LinkProps;

export const whatsappIconProps = {
  "aria-label": "WhatsApp da DAMA",
  color: "#040505",
  bg: "white",
  position: "absolute",
  right: "0",
  top: "-8px",
  fontSize: "42px",
  height: "76px",
  width: "76px",
  borderRadius: "76px",
  boxShadow: "0px 3px 6px 5px #0000004D",
  _active: { outline: "none", bg: "none" },
} as IconButtonProps;

export const widescreenHeaderProps = {
  p: { "2xl": "3rem" },
  // spacing: { lg: "40px", xl: "60px", "2xl": "100px" },
  pt: "30px",
  pr: { base: "10px", lg: "20px", xl: "30px", "2xl": "40px" },
  justifyContent: "flex-end",
  alignItems: "center",
  pos: "absolute",
  right: "0",
} as FlexProps;

export const widescreenNavProps = {
  spacing: { lg: "24px", xl: "32px", "2xl": "46px" },
  justifyContent: "flex-end",
  alignItems: "center",
} as StackProps;
