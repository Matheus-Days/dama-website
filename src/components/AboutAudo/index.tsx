import { Grid, GridItem, Heading, Image, Link, Text } from "@chakra-ui/react";

import {
  gridProps,
  headingProps,
  imageProps,
  linkProps,
  logoGridItemProps,
  textGridItemProps,
  textProps,
} from "./props";

import LogoAudoSvg from "../../assets/img/logo-audo.svg";

export function AboutAudo() {
  return (
    <Grid {...gridProps}>
      <GridItem {...textGridItemProps}>
        <Heading as="h3" {...headingProps}>
          Somos parte de uma rede de inovação
        </Heading>
        <Text {...textProps}>
          O sistema de diagnóstico DAMA é parte do ecossistema AUDO, que tem por
          objetivo desenvolver e comercializar soluções eficientes para
          diagnósticos por imagem. Acreditamos que tecnologia de ponta deve ser
          acessível para todos.
        </Text>
        <Text {...textProps}>
          Nossos produtos são concebidos entendendo o ecossistema do Diagnóstico
          por Imagem de maneira integrada, buscando oferecer a melhor
          experiência para o radiologista e paciente ao mesmo tempo que otimiza
          a produtividade e a qualidade.
        </Text>
        <Text {...textProps}>
          <b>
            Um mundo de facilidades e tecnologias pensadas para as clínicas,
            hospitias e radiologistas.
          </b>
        </Text>
      </GridItem>
      <GridItem {...logoGridItemProps}>
        <Image src={LogoAudoSvg} alt="Logo da Audo" {...imageProps} />
        <Link href="https://audo.com.br" {...linkProps}>
          Conheça a Audo
        </Link>
      </GridItem>
    </Grid>
  );
}
