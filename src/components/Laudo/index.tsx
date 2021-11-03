import { Box, Center, Image, useBreakpointValue } from "@chakra-ui/react";
import { useRef, useState } from "react";
import Slider from "react-slick";

import { laudoData } from "../../utils/laudoData";
import { SlideInfo } from "../SlideInfo";
import { laudoSectionProps, stickyWrapperProps } from "./props";
import "./styles.scss";

import { ChevronRight } from "../ChevronRight";
import { ChevronLeft } from "../ChevronLeft";

import laudo1Jpg from "../../assets/img/laudo1.jpg";
import laudo2Jpg from "../../assets/img/laudo2.jpg";
import laudo3Jpg from "../../assets/img/laudo3.jpg";
import laudo4Jpg from "../../assets/img/laudo4.jpg";
import laudo5Jpg from "../../assets/img/laudo5.jpg";

export function Laudo() {
  const [currSlide, setCurrSlide] = useState(0);
  const imgSliderRef = useRef<Slider>(null);
  const textSliderRef = useRef<Slider>(null);

  const showArrows = useBreakpointValue({
    base: false,
    md: true,
  });

  const textSlidesToShow = useBreakpointValue({
    base: 1,
    lg: 3,
  });

  const textCenterPadding = useBreakpointValue({
    base: "16px",
    md: "144px",
    lg: "32px",
    xl: "48px",
    "2xl": "-80px",
  });

  const handleImgWillChange = (prev: number, next: number) => {
    setCurrSlide(next);
  };

  return (
    <Box as="section" id="laudo" {...laudoSectionProps}>
      <Box {...stickyWrapperProps}>
        <Center>
          <Box
            w={{
              base: "80vw",
              md: "55vw",
              lg: "50vw",
              xl: "42vw",
              "2xl": "60vw",
            }}
          >
            <Slider
              ref={imgSliderRef}
              // @ts-ignore
              asNavFor={textSliderRef.current}
              prevArrow={<ChevronLeft />}
              nextArrow={<ChevronRight />}
              arrows={showArrows}
              dots={true}
              beforeChange={handleImgWillChange}
            >
              <Image src={laudo1Jpg} />
              <Image src={laudo2Jpg} />
              <Image src={laudo3Jpg} />
              <Image src={laudo4Jpg} />
              <Image src={laudo5Jpg} />
            </Slider>
          </Box>
        </Center>
        <Box mt={{ base: "64px", md: "32px", "2xl": "64px" }} w="100vw">
          <Slider
            ref={textSliderRef}
            // @ts-ignore
            asNavFor={imgSliderRef.current}
            arrows={false}
            centerMode={true}
            centerPadding={textCenterPadding}
            slidesToShow={textSlidesToShow}
          >
            {laudoData.map((info) => (
              <SlideInfo
                number={info.number}
                title={info.title}
                description={info.description}
                selectedSlide={currSlide}
                onClick={() => {}}
              />
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
}
