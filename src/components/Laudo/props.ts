import { FlexProps, BoxProps } from "@chakra-ui/react";

export const laudoSectionProps = {
  h: {
    base: "800px",
    md: "900px",
    lg: "1000px",
    xl: "1200px",
    "2xl": "1800px",
  },
} as BoxProps;

export const stickyWrapperProps = {
  w: "100%",
  overflow: "hidden",
  position: "sticky",
  top: { base: "calc(50vh - 200px)", md: "78px", lg: "24px" },
  mt: {
    base: "calc(-1 * 80vw * (468/615) / 2)",
    md: "calc(-1 * 55vw * (468/615) / 2)",
    lg: "calc(-1 * 50vw * (468/615) / 2)",
    xl: "calc(-1 * 42vw * (468/615) / 2)",
    "2xl": "calc(-1 * 60vw * (468/615) / 2)",
  },
} as BoxProps;

export const elementWrapperProps = {
  position: "relative",
  display: "flex",
} as FlexProps;
