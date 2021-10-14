import { useEffect } from "react";
import { HStack } from "@chakra-ui/react";

import { VideoChapter } from "../VideoChapter";
import { SummaryDataType } from "../../utils/summaryData";

type Props = {
  selectedChapter: number;
  id: string;
  summaryData: SummaryDataType;
  onChapterClick?: (position: number) => void;
};

export function Summary({
  id,
  selectedChapter,
  summaryData,
  onChapterClick = (position: number) => {},
}: Props) {
  useEffect(() => {
    const summary = document.getElementById(id) as HTMLElement;

    const movement = summary?.clientWidth / summary?.childElementCount;

    const currentChapterElement = summary?.childNodes[
      selectedChapter
    ] as HTMLElement;

    summary.style.left = `calc(${summary.clientWidth / 2}px - ${
      currentChapterElement.clientWidth / 2 + movement * selectedChapter
    }px)`;
  }, [selectedChapter, id]);

  return (
    <HStack
      id={id}
      spacing={{ base: "4px", sm: "8px" }}
      position="relative"
      transition="left 0.5s ease-in-out"
    >
      {summaryData.map((chapter, i) => (
        <VideoChapter
          key={i}
          number={chapter.number}
          title={chapter.title}
          videoPosition={chapter.videoPosition}
          onChapterClick={onChapterClick}
          selectedChapter={selectedChapter}
        >
          {chapter.description}
        </VideoChapter>
      ))}
    </HStack>
  );
}
