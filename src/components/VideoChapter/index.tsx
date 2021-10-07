import { useEffect, useRef } from "react";
import "./styles.scss";

type Props = {
  number: string;
  title: string;
  children: string;
  selectedChapter?: number;
  videoPosition: number;
  onChapterClick?: (position: number) => void;
};

export function VideoChapter({
  number,
  title,
  children,
  selectedChapter = 0,
  videoPosition = 0,
  onChapterClick = (position: number) => {},
}: Props) {
  const chapterNumber = Number(number);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const distanceFromSelected = Math.abs(selectedChapter + 1 - chapterNumber);

    if (divRef.current) {
      if (distanceFromSelected === 0) divRef.current.style.opacity = "1";
      else if (distanceFromSelected === 1)
        divRef.current.style.opacity = "0.45";
      else divRef.current.style.opacity = "0.15";
    }
  }, [selectedChapter, chapterNumber]);

  return (
    <div
      className="chapter"
      ref={divRef}
      onClick={() => onChapterClick(videoPosition)}
    >
      <span className="chapter-number">{number}</span>
      <span className="chapter-title">{title}</span>
      <span className="chapter-description">{children}</span>
    </div>
  );
}
