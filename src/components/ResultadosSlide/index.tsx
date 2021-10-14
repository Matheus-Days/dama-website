import { Box, Text } from "@chakra-ui/react";
import { useRef } from "react";

import {
  descriptionSpanProps,
  numberSpanProps,
  signSpanProps,
  smDescriptionProps,
  textConteinerProps,
} from "./props";

type Props = {
  sign?: string;
  number: string;
  description: string;
  children: string;
  py?: {
    base?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    "2xl"?: string;
  };
};

export function ResultadosSlide({
  children,
  description,
  number,
  sign,
  py,
}: Props) {
  const slideRef = useRef<HTMLDivElement>(null);

  return (
    <Box ref={slideRef} py={py}>
      <Text {...textConteinerProps}>
        <Text display="block" as="span">
          <Text as="span" {...signSpanProps}>
            {sign}
          </Text>
          <Text as="span" {...numberSpanProps}>
            {number}
          </Text>
        </Text>
        <Text as="span" {...descriptionSpanProps}>
          {description}
        </Text>
        <Text as="span" {...smDescriptionProps}>
          {children}
        </Text>
      </Text>
    </Box>
  );
}
