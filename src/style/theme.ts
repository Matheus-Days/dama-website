import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    black: {
      "900": "#040505",
    },
    red: {
      "500": "#EA3716",
    },
    blue: {
      "500": "#265ca8",
    },
  },
  fonts: {
    heading: "Cairo",
    body: "Raleway",
    navLink: "Sora",
  },
  styles: {
    global: {
      body: {
        bg: "#040505",
      },
    },
  },
});
