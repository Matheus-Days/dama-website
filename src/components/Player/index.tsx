import { LegacyRef } from "react";
import ReactPlayer from "react-player";
import { useBreakpointValue } from "@chakra-ui/react";

import "./styles.scss";

type Props = {
  setPlayedSeconds: (playedSeconds: number) => void;
  playerRef?: LegacyRef<ReactPlayer>;
};

export function Player({ setPlayedSeconds, playerRef }: Props) {
  const width = useBreakpointValue({
    base: "90vw",
    lg: "60vw",
  });
  const height = useBreakpointValue({
    base: "calc(90vw / 1.4)",
    lg: "calc(60vw / 1.4)",
  });

  return (
    <ReactPlayer
      id="player"
      width={width}
      height={height}
      url="https://youtu.be/jNQXAC9IVRw"
      // playing
      light
      ref={playerRef}
      muted
      loop
      onProgress={(progress) => {
        setPlayedSeconds(Math.floor(progress.playedSeconds));
      }}
    />
  );
}
