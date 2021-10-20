import { useEffect, useRef, useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import {
  gridProps,
  imgGridItemProps,
  imgSliderSettings,
  imgProps,
  slideHeadingProps,
  slideTextProps,
  textGridItemProps,
  textStackProps,
  imgBoxProps,
  textBoxProps,
} from "./props";

import "./styles.scss";

import prodSlide1 from "../../assets/img/prodslide1.png";
import prodSlide2 from "../../assets/img/prodslide2.png";
import prodSlide3 from "../../assets/img/prodslide3.png";
import prodSlide4 from "../../assets/img/prodslide4.png";

export function Product() {
  const imgSliderRef = useRef<Slider>(null);
  const textSliderRef = useRef<Slider>(null);
  const [imgSlider, setImgSlider] = useState();
  const [textSlider, setTextSlider] = useState();
  const showArrows = useBreakpointValue({
    base: false,
    lg: true,
  });

  useEffect(() => {
    //@ts-ignore
    setImgSlider(imgSliderRef.current);
    //@ts-ignore
    setTextSlider(textSliderRef.current);
  }, []);

  return (
    <Grid as="section" id="product" {...gridProps}>
      <GridItem {...imgGridItemProps}>
        <Box {...imgBoxProps}>
          <Slider
            ref={imgSliderRef}
            asNavFor={textSlider}
            {...imgSliderSettings}
          >
            <Image src={prodSlide1} {...imgProps} />
            <Image src={prodSlide2} {...imgProps} />
            <Image src={prodSlide3} {...imgProps} />
            <Image src={prodSlide4} {...imgProps} />
          </Slider>
        </Box>
      </GridItem>
      <GridItem {...textGridItemProps}>
        <Box {...textBoxProps}>
          <Slider
            ref={textSliderRef}
            asNavFor={imgSlider}
            arrows={showArrows}
            prevArrow={<FaArrowLeft />}
            nextArrow={<FaArrowRight />}
            dots={true}
          >
            <VStack {...textStackProps}>
              <Heading {...slideHeadingProps}>
                Avaliação do serviço de mamografia
              </Heading>
              <Text {...slideTextProps}>
                Através do laudo estruturado, conseguimos mapear e buscar as
                informações dos laudos de forma fácil e confiável. Conheça as
                métricas do seu serviço de mamografia.
              </Text>
            </VStack>
            <VStack {...textStackProps}>
              <Heading {...slideHeadingProps}>Processos eficientes</Heading>
              <Text {...slideTextProps}>
                Os processos de DAMA são desenhados para aumentar a
                produtividade, qualidade e segurança dos serviços de imagem.
              </Text>
            </VStack>
            <VStack {...textStackProps}>
              <Heading {...slideHeadingProps}>App para técnica</Heading>
              <Text {...slideTextProps}>
                O app para técnica permite a coleta da anamnese diretamente pelo
                celular no momento da entrevista.
              </Text>
            </VStack>
            <VStack {...textStackProps}>
              <Heading {...slideHeadingProps}>
                SISCAN - diminua o retrabalho
              </Heading>
              <Text {...slideTextProps}>
                Os laudos estruturados podem gerar relatórios para preenchimento
                no sistema do SISCAN.
              </Text>
            </VStack>
          </Slider>
        </Box>
      </GridItem>
    </Grid>
  );
}
