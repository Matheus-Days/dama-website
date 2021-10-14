import {
  Grid,
  GridItem,
  Image,
  Heading,
  Text,
  Center,
  Link,
} from "@chakra-ui/react";

import {
  sectionGridProps,
  textItemProps,
  linkProps,
  headingProps,
  textProps,
} from "./props";
import "./styles.scss";

import { PushChevronDownIcon } from "../PushChevronDownIcon";
import BannerPng from "../../assets/img/Home_IMG.png";

export function Banner() {
  return (
    <Grid as="section" id="banner" {...sectionGridProps}>
      <Center>
        <GridItem {...textItemProps}>
          {/* grid start and end on props.ts */}
          <Heading as="h1" {...headingProps}>
            DAMA:
            <br /> Prevenção inteligente começa <b>aqui.</b>
          </Heading>
          <Text as="p" {...textProps}>
            Somos uma ferramenta ágil feita para auxiliar profissionais de saúde
            em exames de mamografia.
          </Text>
        </GridItem>
      </Center>
      <GridItem gridRow={{ base: "2/3", lg: "1/3" }}>
        <Image
          h="100%"
          w="100%"
          src={BannerPng}
          alt="Mulher olhando para a câmera"
        />
      </GridItem>
      <GridItem gridColumn={{ lg: "2/3" }} gridRow={{ base: "3/4", lg: "2/3" }}>
        <Link {...linkProps} href="#aboutDama">
          <span>Conheça a DAMA</span>{" "}
          <PushChevronDownIcon className="push-chevron-down" />
        </Link>
      </GridItem>
    </Grid>
  );
}
