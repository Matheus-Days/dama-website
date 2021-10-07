import { CSSProperties, useRef } from "react";

import "./styles.scss";
import PadlockPng from "../../assets/img/Vantagens_IMG.png";

import { VideoWithSummary } from "../VideoWithSummary";
import { ResultadosInteligencia } from "../ResultadosInteligencia";
import { Benefits } from "../Benefits";

export function LaudoEstruturado() {
  const titleAndVideoRef = useRef<HTMLDivElement>(null);
  let dynamicStyle = {};

  if (titleAndVideoRef.current) {
    dynamicStyle = {
      left: `calc(50vw - ${titleAndVideoRef.current?.clientWidth / 2}px)`,
    } as CSSProperties;
  }

  return (
    <section id="laudo-estruturado">
      <div
        ref={titleAndVideoRef}
        style={dynamicStyle}
        className="title-and-video"
      >
        <h2>Laudo estruturado</h2>
        <p>
          Acompanhe o processo rápido, intuitivo e dinâmico que a DAMA oferece
        </p>
        <VideoWithSummary />
      </div>
      <div id="results">
        <ResultadosInteligencia />
      </div>
      <div id="benefits">
        <Benefits />
      </div>
      <div id="padlock">
        <img src={PadlockPng} alt="Padlock" />
      </div>
    </section>
  );
}
