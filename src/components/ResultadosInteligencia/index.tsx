import {
  Button,
  Icon,
  Image,
  Heading,
  VStack,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

import WhiteDotsSvg from "../../assets/img/white-dots.svg";

import { ResultadosSlide } from "../ResultadosSlide";
import { buttonProps, headingProps } from "./props";

export function ResultadosInteligencia() {
  const [slidecount, setslidecount] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const isLgOrBigger = useBreakpointValue({
    base: false,
    lg: true,
  });

  const slideImages = [WhiteDotsSvg, WhiteDotsSvg];

  useEffect(() => {
    const slides = [] as HTMLDivElement[];

    sliderRef.current?.childNodes.forEach((slide) => {
      slides.push(slide as HTMLDivElement);
    });

    slides.forEach((slide) => {
      slide.style.transition = "transform 0.5s ease-in-out";
      slide.style.transform = `translateY(${
        -1 * slide.clientHeight * slidecount
      }px)`;
    });
  }, [slidecount]);

  const sliderLength = sliderRef.current?.childNodes.length || 0;

  const nextSlide = () => {
    if (slidecount + 1 < sliderLength && slidecount >= 0)
      setslidecount(slidecount + 1);
    else setslidecount(0);
  };

  const prevSlide = () => {
    if (slidecount - 1 >= 0 && slidecount >= 0) setslidecount(slidecount - 1);
    else setslidecount(sliderLength - 1);
  };

  return (
    <VStack mt={!isLgOrBigger ? "144px" : ""} pr={!isLgOrBigger ? "21px" : ""}>
      {isLgOrBigger && (
        <Heading as="h3" {...headingProps}>
          Nossa inteligência já proporcionou...
        </Heading>
      )}
      <HStack>
        <HStack alignItems="center">
          {isLgOrBigger && (
            <Image
              src={slideImages[slidecount]}
              h={{ lg: "240px", xl: "360px", "2xl": "max-content" }}
              alt="Pontos brancos e coloridos"
            />
          )}
          <VStack
            ref={sliderRef}
            maxW={{ lg: "432px", xl: "800px" }}
            maxH={{ base: "236px", lg: "236px", xl: "360px" }}
            overflow="hidden"
            alignItems="flex-end"
          >
            <ResultadosSlide
              sign="+"
              number="500"
              description="Exames revisados"
            >
              Detectando mais de 120 falsos negativos
            </ResultadosSlide>
            <ResultadosSlide
              sign="+"
              number="2899"
              description="Horas de trabalho economizadas"
            >
              Possibilitando que profissionais da saúde tenha mais tempo para
              cuidar do que realmente importa.
            </ResultadosSlide>
          </VStack>
        </HStack>
        <VStack alignItems="center" position="relative">
          <Button
            {...buttonProps}
            bottom={{ base: "96px", lg: "96px", xl: "192px" }}
            onClick={prevSlide}
          >
            <Icon aria-label="Botão para cima" color="#575757" as={FaArrowUp} />
          </Button>
          <Button
            {...buttonProps}
            top={{ base: "80px", lg: "88px", xl: "176px" }}
            onClick={nextSlide}
          >
            <Icon
              aria-label="Botão para baixo"
              color="#575757"
              as={FaArrowDown}
            />
          </Button>
        </VStack>
      </HStack>
    </VStack>
  );
}
