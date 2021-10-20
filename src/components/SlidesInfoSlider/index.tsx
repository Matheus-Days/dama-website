import { useEffect } from "react";
import { HStack } from "@chakra-ui/react";

import { SlideInfo } from "../SlideInfo";
import { SummaryDataType } from "../../utils/slideInfoData";

type Props = {
  selectedSlide: number;
  id: string;
  summaryData: SummaryDataType;
  onChapterClick?: (position: number) => void;
};

export function SlidesInfoSlider({ id, selectedSlide, summaryData }: Props) {
  useEffect(() => {
    const summary = document.getElementById(id) as HTMLElement;

    const movement = summary?.clientWidth / summary?.childElementCount;

    const currentSlideInfoElement = summary?.childNodes[
      selectedSlide
    ] as HTMLElement;

    summary.style.left = `calc(${summary.clientWidth / 2}px - ${
      currentSlideInfoElement.clientWidth / 2 + movement * selectedSlide
    }px)`;
  }, [selectedSlide, id]);

  return (
    <HStack
      id={id}
      spacing={{ base: "32px", lg: "40px" }}
      position="relative"
      transition="left 0.5s"
    >
      {summaryData.map((info, i) => (
        <SlideInfo
          key={i}
          number={info.number}
          title={info.title}
          selectedSlide={selectedSlide}
          description={info.description}
        />
      ))}
    </HStack>
  );
}
