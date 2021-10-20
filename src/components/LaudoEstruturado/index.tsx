import { Flex, Heading, Text } from "@chakra-ui/react";

import {
  containerProps,
  headingProps,
  subtitleProps,
  textProps,
} from "./props";

import { LaudoSliders } from "../LaudoSliders";
import { Benefits } from "../Benefits";

export function LaudoEstruturado() {
  return (
    <Flex as="section" direction="column" id="laudo-estruturado">
      <Flex {...containerProps}>
        <Heading as="h2" {...headingProps}>
          Laudo estruturado interativo
        </Heading>
        <Text {...subtitleProps}>seu laudo mais inteligente!</Text>
        <Text {...textProps}>
          Construímos o laudo automaticamente enquanto você descreve suas
          impressões diagnósticas.
        </Text>
        <LaudoSliders />
      </Flex>
      <Benefits />
    </Flex>
  );
}
