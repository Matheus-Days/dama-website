import { LegacyRef } from "react";
import ReactPlayer from "react-player";
import "./styles.scss";

type Props = {
  setPlayedSeconds: (playedSeconds: number) => void;
  playerRef?: LegacyRef<ReactPlayer>;
};

export function Player({ setPlayedSeconds, playerRef }: Props) {
  return (
    <ReactPlayer
      id="player"
      width={1128}
      height={803}
      url="https://www.youtube.com/watch?v=t0IJiofPR6U"
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
