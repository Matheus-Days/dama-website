import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
  useBreakpointValue,
  Divider,
} from "@chakra-ui/react";

import {
  accordionGridItemProps,
  accordionIconProps,
  accordionItemProps,
  buttonTextProps,
  gridProps,
  headingGridItemProps,
  headingProps,
  imageGridItemProps,
  linkGridItemProps,
  linkProps,
  panelTextProps,
} from "./props";

import PadlockPng from "../../assets/img/Vantagens_IMG.png";
import { PushChevronDownIcon } from "../PushChevronDownIcon";

export function Benefits() {
  const isLgOrBigger = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Grid id="benefits" {...gridProps}>
      <GridItem {...headingGridItemProps}>
        <Heading as="h3" {...headingProps}>
          Confira nossas vantagens:
        </Heading>
      </GridItem>
      <GridItem {...accordionGridItemProps}>
        <Accordion allowToggle>
          <AccordionItem border="none">
            <AccordionButton
              justifyContent={{ base: "space-between", md: "normal" }}
            >
              <Text {...buttonTextProps}>Solução de Baixo Custo</Text>
              <AccordionIcon {...accordionIconProps} />
            </AccordionButton>
            <AccordionPanel>
              <Text {...panelTextProps}>
                A tecnologia de DAMA é totalmente nacional e acessível ao
                mercado brasileiro.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <Divider />
          <AccordionItem {...accordionItemProps}>
            <AccordionButton
              justifyContent={{ base: "space-between", md: "normal" }}
            >
              <Text {...buttonTextProps}>
                Workstation especializada em mamografia
              </Text>
              <AccordionIcon {...accordionIconProps} />
            </AccordionButton>
            <AccordionPanel>
              <Text {...panelTextProps}>
                A estação de visualização de imagens e elaboração de laudos de
                DAMA foi construída para exames de mamografia, com hanging
                protocols específicos, comparação de imagens anteriores e
                suporte a monitores de diagnóstico.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <Divider />
          <AccordionItem {...accordionItemProps}>
            <AccordionButton
              justifyContent={{ base: "space-between", md: "normal" }}
            >
              <Text {...buttonTextProps}>
                Todas as informações em um só lugar
              </Text>
              <AccordionIcon {...accordionIconProps} />
            </AccordionButton>
            <AccordionPanel>
              <Text {...panelTextProps}>
                Concentramos imagens, laudos e informações clínicas de diversos
                sistemas em uma única estação de trabalho. Podemos conectar a
                qualquer sistema PACS.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <Divider />
          <AccordionItem {...accordionItemProps}>
            <AccordionButton
              justifyContent={{ base: "space-between", md: "normal" }}
            >
              <Text {...buttonTextProps}>
                A melhor experiência web de visualização de imagens DICOM
              </Text>
              <AccordionIcon {...accordionIconProps} />
            </AccordionButton>
            <AccordionPanel>
              <Text {...panelTextProps}>
                Nossa plataforma é totalmente web e tem performance similar às
                tecnologias desktop. Você pode baixar as imagens antes da
                visualização.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <Divider />
          <AccordionItem {...accordionItemProps}>
            <AccordionButton
              justifyContent={{ base: "space-between", md: "normal" }}
            >
              <Text {...buttonTextProps}>
                Inteligência Artificial Compreensível
              </Text>
              <AccordionIcon {...accordionIconProps} />
            </AccordionButton>
            <AccordionPanel>
              <Text {...panelTextProps}>
                Nossa tecnologia de aprendizado contínuo é baseada nos
                princípios de Explanaible AI, ou seja, tomar a Inteligência
                Artificial compreensível para humanos. Dessa maneira as decisões
                tomadas pelos algoritmos são baseadas em conhecimentos
                verificáveis.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <Divider />
          <AccordionItem {...accordionItemProps}>
            <AccordionButton
              justifyContent={{ base: "space-between", md: "normal" }}
            >
              <Text {...buttonTextProps}>
                Interoperabilidade: falamos todas as línguas
              </Text>
              <AccordionIcon {...accordionIconProps} />
            </AccordionButton>
            <AccordionPanel>
              <Text {...panelTextProps}>
                Nossos produtos não são dependentes de nenhum dispositivo ou
                fabricante, nem exigem hardwares caros para operar.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <Divider />
        </Accordion>
      </GridItem>
      {isLgOrBigger && (
        <GridItem {...imageGridItemProps}>
          <Image w="100%" src={PadlockPng} alt="Padlock" />
        </GridItem>
      )}
      <GridItem {...linkGridItemProps}>
        <Link href="#product" {...linkProps}>
          Nossos Produtos <PushChevronDownIcon className="push-chevron-down" />
        </Link>
      </GridItem>
    </Grid>
  );
}
