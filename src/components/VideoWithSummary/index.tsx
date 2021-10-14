import { useEffect, useRef, useState } from "react";
import { VStack } from "@chakra-ui/react";
import ReactPlayer from "react-player";

import { summaryData } from "../../utils/summaryData";

import { Player } from "../Player";
import { Summary } from "../Summary";

export function VideoWithSummary() {
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [chapter, setChapter] = useState(0);
  const [chaptersPositions] = useState(
    summaryData.map((chapter) => chapter.videoPosition)
  );
  const player = useRef<ReactPlayer>(null);

  const handleChapterClick = (position: number) => {
    player.current?.seekTo(position);
  };

  useEffect(() => {
    let newChapter = chaptersPositions.length - 1;
    let found = false;

    while (!found && newChapter >= 0) {
      if (chaptersPositions[newChapter] > playedSeconds) newChapter--;
      else found = true;
    }

    setChapter(newChapter);
  }, [playedSeconds, chaptersPositions]);

  return (
    <VStack overflowX="hidden" spacing={{ base: "60px", lg: "66px" }}>
      <Player playerRef={player} setPlayedSeconds={setPlayedSeconds} />
      <Summary
        id="summary"
        summaryData={summaryData}
        selectedChapter={chapter}
        onChapterClick={handleChapterClick}
      />
    </VStack>
  );
}
