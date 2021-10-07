import { useEffect } from "react";
import { VideoChapter } from "../VideoChapter";

import "./styles.scss";
import { SummaryDataType } from "../../utils/summaryData";

type Props = {
  selectedChapter: number;
  id: string;
  summaryData: SummaryDataType;
  setChapter: (number: number) => void;
  onChapterClick?: (position: number) => void;
};

export function Summary({
  id,
  selectedChapter,
  summaryData,
  onChapterClick = (position: number) => {},
  setChapter,
}: Props) {
  useEffect(() => {
    const summary = document.getElementById(id) as HTMLElement;

    const movement = summary?.clientWidth / summary?.childElementCount;

    const currentChapterElement = summary?.childNodes[
      selectedChapter
    ] as HTMLElement;

    summary.style.left = `calc(50% - ${
      currentChapterElement.clientWidth / 2 + movement * selectedChapter
    }px)`;
  }, [selectedChapter, id]);

  return (
    <div id={id}>
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
    </div>
  );
}
