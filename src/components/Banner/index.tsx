import { PushChevronDownIcon } from "../PushChevronDownIcon";
import BannerPng from "../../assets/img/Home_IMG.png";

import "./styles.scss";

export function Banner() {
  return (
    <section id="banner">
      <img
        className="banner-img"
        src={BannerPng}
        alt="Mulher olhando para a câmera"
      />
      <div className="text">
        <h1>
          DAMA: <br /> Prevenção inteligente começa <b>aqui</b>
        </h1>
        <p>
          Somos uma ferramenta ágil feita para auxiliar profissionais de saúde
          em exames de mamografia.
        </p>
      </div>
      <a href="#aboutDama">
        <span>Conheça a DAMA</span>{" "}
        <PushChevronDownIcon className="push-chevron-down" />
      </a>
    </section>
  );
}
