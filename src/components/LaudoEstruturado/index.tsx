import { useRef } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

import { containerProps, headingProps, textProps } from "./props";

import { VideoWithSummary } from "../VideoWithSummary";
import { ResultadosInteligencia } from "../ResultadosInteligencia";
import { Benefits } from "../Benefits";

export function LaudoEstruturado() {
  const titleAndVideoRef = useRef<HTMLDivElement>(null);

  return (
    <Flex as="section" direction="column" id="laudo-estruturado">
      <Flex ref={titleAndVideoRef} {...containerProps}>
        <Heading as="h2" {...headingProps}>
          Laudo estruturado
        </Heading>
        <Text {...textProps}>
          Acompanhe o processo rápido, intuitivo e dinâmico que a DAMA oferece
        </Text>
        <VideoWithSummary />
      </Flex>
      <ResultadosInteligencia />
      <Benefits />
    </Flex>
  );
}
