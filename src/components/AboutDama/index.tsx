import {
  Box,
  Heading,
  HStack,
  VStack,
  Grid,
  GridItem,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

import {
  contactLinkProps,
  headingProps,
  photoItemProps,
  vectorItemProps,
  liStackProps,
  liTextProps,
  sectionGridProps,
  textItemProps,
  textProps,
  ulGridItemProps,
  ulHeadingProps,
  ulStackProps,
} from "./props";

import mamografiaPng from "../../assets/img/mamografia.png";
import mamografiaVetorSvg from "../../assets/img/vetor-mamografia.svg";
import AimSvg from "../../assets/img/aim.svg";
import ClipboardSvg from "../../assets/img/clipboard.svg";
import ClipboardOutSvg from "../../assets/img/clipboard-out.svg";
import ConnectedDotsSvg from "../../assets/img/connected-dots.svg";

export function AboutDama() {
  return (
    <Grid as="section" {...sectionGridProps} id="aboutDama">
      <GridItem {...textItemProps}>
        <Heading as="h2" {...headingProps}>
          DAMA é a nova geração de CAD interativo!
        </Heading>
        <Text my="16px" {...textProps}>
          Utiliza algoritmos de <b>deep learning</b> para avaliar as{" "}
          <b>imagens</b> e a <b>anamnese</b> da mamografia de rastreio. Durante
          esse processo, anomalias são detectadas para dar suporte à decisão e
          ao diagnóstico do médico radiologista na detecção do câncer de mama.
        </Text>
        <Text {...textProps}>
          Combinando a varredura das imagens e a elaboração dos laudos, os
          achados geram um <b>laudo estruturado</b> de forma <b>automática</b> e{" "}
          <b>interativa</b>. Os relatórios podem ser aprovados, rejeitados ou
          corrigidos pelo profissional, retroalimentando os algoritmos e fazendo
          com que o sistema se{" "}
          <i>
            <b>aperfeiçoe</b>
          </i>{" "}
          cada vez mais.
        </Text>
      </GridItem>
      <GridItem {...photoItemProps}>
        <Image
          h="100%"
          src={mamografiaPng}
          alt="Mulher examinando mamografia"
        />
      </GridItem>
      <GridItem {...vectorItemProps}>
        <Image h="100%" src={mamografiaVetorSvg} alt="" />
      </GridItem>
      <GridItem {...ulGridItemProps}>
        <Heading as="h2" {...ulHeadingProps}>
          Com DAMA você tem....
        </Heading>
        <HStack as="ul" {...ulStackProps}>
          <VStack as="li" {...liStackProps}>
            <Image h="90px" src={AimSvg} alt="" />
            <Text {...liTextProps}>
              <b>Detecção e identificação</b> de anomalias na mamografia de
              rastreio como segunda leitura
            </Text>
          </VStack>
          <VStack as="li" {...liStackProps}>
            <Image h="90px" src={ClipboardSvg} alt="" />
            <Text {...liTextProps}>
              <b>Laudo estruturado</b> gerado a partir dos achados anotados nas
              imagens
            </Text>
          </VStack>
          <VStack as="li" {...liStackProps}>
            <Image h="90px" src={ClipboardOutSvg} alt="" />
            <Text {...liTextProps}>
              Sugestão da avaliação e conduta segundo <b>BIRADS</b>
            </Text>
          </VStack>
          <VStack as="li" {...liStackProps}>
            <Image h="90px" src={ConnectedDotsSvg} alt="" />
            <Text {...liTextProps}>
              <b>Aprendizado contínuo</b> dos algoritmos de IA com uso do
              sistema
            </Text>
          </VStack>
        </HStack>
        <Box display="flex" justifyContent="center">
          <Link href="#contact" {...contactLinkProps}>
            Quero entrar em contato
          </Link>
        </Box>
      </GridItem>
    </Grid>
  );
}
