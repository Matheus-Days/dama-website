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
          DAMA é parte do ecossistema Audo, que tem por objetivo desenvolver
          soluções no Diagnóstico por Imagem que ajudam a transformar e salvar
          vidas através de acesso, inclusão e inovação.
        </Text>
        <Text {...textProps}>
          Acreditamos que tecnologia de ponta e saúde deve ser acessível a
          todos.
        </Text>
        <Text {...textProps}>
          Nossos produtos são concebidos para oferecer aos profissionais da
          radiologia uma experiência focada em processos que garantam
          produtividade e assertividade, garantindo a segurança dos pacientes,
          desde a integridade das informações até a conformidade regulatória.
        </Text>
        <Text {...textProps}>
          <b>A menor distância para o seu melhor laudo.</b>
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
