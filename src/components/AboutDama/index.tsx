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
  imageItemProps,
  liStackProps,
  liTextProps,
  sectionGridProps,
  textItemProps,
  textProps,
  ulGridItemProps,
  ulHeadingProps,
  ulStackProps,
} from "./props";

import Fold2Png from "../../assets/img/Fold2_IMG.png";
import AimSvg from "../../assets/img/aim.svg";
import ClipboardSvg from "../../assets/img/clipboard.svg";
import ClipboardOutSvg from "../../assets/img/clipboard-out.svg";
import ConnectedDotsSvg from "../../assets/img/connected-dots.svg";

export function AboutDama() {
  return (
    <Grid as="section" {...sectionGridProps} id="aboutDama">
      <GridItem {...textItemProps}>
        <Heading as="h2" {...headingProps}>
          DAMA é a sua nova ferramenta de diagnóstico interativo!
        </Heading>
        <Text my="16px" {...textProps}>
          Utilizamos um <b>avançado algoritmo de aprendizado</b> para conseguir
          detectar e analisar anormalidades em exames de mamografia e assim
          gerar um relatório médico preliminar. O profissional da saúde pode
          então trabalhar a partir dessa base e{" "}
          <b>aprovar, rejeitar ou corrigir o relatório</b> para fechar o{" "}
          <b>diagnóstico de câncer de mama</b>.
        </Text>
        <Text {...textProps}>
          Todo relatório alimenta o algoritmo e faz com que o sistema de
          aprendizado inteligente se <b>aperfeiçoe cada vez mais!</b>
        </Text>
      </GridItem>
      <GridItem {...imageItemProps}>
        <Image src={Fold2Png} alt="Mulher examinando mamografia" />
      </GridItem>
      <GridItem {...ulGridItemProps}>
        <Heading as="h2" {...ulHeadingProps}>
          Com DAMA você tem....
        </Heading>
        <HStack as="ul" {...ulStackProps}>
          <VStack as="li" {...liStackProps}>
            <Image h="90px" src={AimSvg} alt="Detecçao e identificação" />
            <Text {...liTextProps}>
              <b>Detecção e identificação</b> de anomalias em mamografias
              digitais
            </Text>
          </VStack>
          <VStack as="li" {...liStackProps}>
            <Image h="90px" src={ClipboardSvg} alt="Relatório médico" />
            <Text {...liTextProps}>
              Relatório médico <b>preliminar</b> por imagem
            </Text>
          </VStack>
          <VStack as="li" {...liStackProps}>
            <Image
              h="90px"
              src={ClipboardOutSvg}
              alt="sugestão de diagnóstico"
            />
            <Text {...liTextProps}>
              Sugestão de diagnóstico <b>BIRADS</b>
            </Text>
          </VStack>
          <VStack as="li" {...liStackProps}>
            <Image
              h="90px"
              src={ConnectedDotsSvg}
              alt="Aprendizado sistema de inteligência artificial"
            />
            <Text {...liTextProps}>
              <b>Aprendizado contínuo</b> do sistema de inteligência artificial
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
