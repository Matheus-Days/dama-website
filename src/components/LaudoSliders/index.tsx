import { useState } from "react";
import { VStack, Box, Image, useBreakpointValue } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";

import { summaryData } from "../../utils/slideInfoData";
import { SlidesInfoSlider } from "../SlidesInfoSlider";

import slide1Png from "../../assets/img/slide1.png";
import slide2Png from "../../assets/img/slide1.png";
import slide3Png from "../../assets/img/slide3.png";
import slide4Png from "../../assets/img/slide4.png";
import slide5Png from "../../assets/img/slide5.png";
import slide6Png from "../../assets/img/slide6.png";
import slide7Png from "../../assets/img/slide7.png";
import slide8Png from "../../assets/img/slide8.png";

export function LaudoSliders() {
  const [slide, setSlide] = useState(0);
  const showArrows = useBreakpointValue({
    base: false,
    lg: true,
  });

  function handleSlideChange(prevNum: number, nextNum: number) {
    const slideInfoNum = [0, 1, 1, 2, 2, 3, 4, 5]; // Correspondência entre imagens e explicações
    setSlide(slideInfoNum[nextNum]);
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: showArrows,
    prevArrow: <FaArrowLeft className="prev-arrow" />,
    nextArrow: <FaArrowRight className="next-arrow" />,
    beforeChange: handleSlideChange,
  } as Settings;

  return (
    <VStack overflowX="hidden" spacing={{ base: "60px", lg: "66px" }}>
      <Box id="laudo-slider" w={{ base: "80vw", lg: "50vw" }} mx="auto">
        <Slider {...sliderSettings}>
          <Image w="100%" src={slide1Png} />
          <Image w="100%" src={slide2Png} />
          <Image w="100%" src={slide3Png} />
          <Image w="100%" src={slide4Png} />
          <Image w="100%" src={slide5Png} />
          <Image w="100%" src={slide6Png} />
          <Image w="100%" src={slide7Png} />
          <Image w="100%" src={slide8Png} />
        </Slider>
      </Box>
      <SlidesInfoSlider
        id="summary"
        summaryData={summaryData}
        selectedSlide={slide}
      />
    </VStack>
  );
}
