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
} from "@chakra-ui/react";

import {
  accordionGridItemProps,
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
            <AccordionButton>
              <Text {...buttonTextProps}>Solução de Baixo Custo</Text>
              <AccordionIcon color="white" width="30px" height="30px" />
            </AccordionButton>
            <AccordionPanel>
              <Text {...panelTextProps}>
                Enquanto nossos competidores cobram em dólar, a DAMA possui
                custos mais baixos e acessíveis para todos os mercados.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem {...accordionItemProps}>
            <AccordionButton>
              <Text {...buttonTextProps}>
                Sistema de dispositivo inteligente
              </Text>
              <AccordionIcon color="white" width="30px" height="30px" />
            </AccordionButton>
            <AccordionPanel>
              <Text {...panelTextProps}>
                Nossos produtos não são dependentes de nenhum dispositivo ou
                revendedor e não é necessário possuir hardwares caros para
                operar.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem {...accordionItemProps}>
            <AccordionButton>
              <Text {...buttonTextProps}>Visualizador Web DICON</Text>
              <AccordionIcon color="white" width="30px" height="30px" />
            </AccordionButton>
            <AccordionPanel>
              <Text {...panelTextProps}>
                Sistema interno para visualização eficiente de imagens DICOM
                através de navegadores Chrome. Nós suportamos várias marcas
                avançadas e tecnologias de reconstrução apenas disponíveis para
                desktops.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem {...accordionItemProps}>
            <AccordionButton>
              <Text {...buttonTextProps}>Sistema Cloud First</Text>
              <AccordionIcon color="white" width="30px" height="30px" />
            </AccordionButton>
            <AccordionPanel>
              <Text {...panelTextProps}>
                O sistema completo está integrado na nuvem para melhor
                performance multi-clínica/hospitalar. Nós também fornecemos
                suporte para nuvens privadas ou servidores locais.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem {...accordionItemProps}>
            <AccordionButton>
              <Text {...buttonTextProps}>
                Inteligência Artificial Compreensível
              </Text>
              <AccordionIcon color="white" width="30px" height="30px" />
            </AccordionButton>
            <AccordionPanel>
              <Text {...panelTextProps}>
                Nossa tecnologia de aprendizado contínuo é baseada nos
                princípios de Explainable AI, ou seja, tornar a Inteligência
                Artificial compreensível para humanos. Dessa maneira as decisões
                tomadas pelo programa são baseadas em conhecimentos
                verificáveis.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </GridItem>
      {isLgOrBigger && (
        <GridItem {...imageGridItemProps}>
          <Image height="100%" src={PadlockPng} alt="Padlock" />
        </GridItem>
      )}
      <GridItem {...linkGridItemProps}>
        <Link {...linkProps}>
          Nossos Produtos <PushChevronDownIcon className="push-chevron-down" />
        </Link>
      </GridItem>
    </Grid>
  );
}
