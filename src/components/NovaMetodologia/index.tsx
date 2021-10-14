import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Fundo1Png from "../../assets/img/State1_Fundo_IMG.png";
import Fundo2Png from "../../assets/img/State2_Fundo_IMG.png";
import "./styles.scss";
import { CustomSlide } from "../CustomSlide";
import { CSSProperties } from "react";

type ArrowProps = {
  direction: "right" | "left";
  onClick?: () => void;
};

const Arrow = ({ direction, onClick }: ArrowProps) => {
  const arrowStyle = {
    transform: direction === "right" ? "rotate(90deg)" : "rotate(270deg)",
    display: "inline",
    position: "absolute",
    left: direction === "right" ? "calc(57% + 24px)" : "calc(57% - 24px)",
    bottom: "0",
    height: "21px",
  } as CSSProperties;

  return (
    <svg
      style={arrowStyle}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="25.246"
      height="28.069"
      viewBox="0 0 25.246 28.069"
    >
      <g
        id="Group_378"
        data-name="Group 378"
        transform="translate(3323.446 3291.905) rotate(-90)"
      >
        <g
          id="Group_375"
          data-name="Group 375"
          transform="translate(3276.037 -3323.446)"
        >
          <path
            id="Path_649"
            data-name="Path 649"
            d="M3289.391-3298.2l-3.244-3.244,9.379-9.379-9.379-9.379,3.244-3.244,12.623,12.623Z"
            transform="translate(-3286.147 3323.446)"
            fill="#575757"
          />
        </g>
        <g
          id="Group_376"
          data-name="Group 376"
          transform="translate(3263.835 -3313.117)"
        >
          <rect
            id="Rectangle_71"
            data-name="Rectangle 71"
            width="24.825"
            height="4.589"
            transform="translate(0 0)"
            fill="#575757"
          />
        </g>
      </g>
    </svg>
  );
};

export function NovaMetodologia() {
  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
  } as Settings;

  return (
    <div id="nova-metodologia">
      <div id="slider-container">
        <Slider {...settings}>
          <CustomSlide
            title="Conheça nossa interface interativa"
            bgImg={Fundo2Png}
          >
            Unificamos, de forma interativa, o processamento de imagem e
            relatório de diagnóstico em uma única ferramenta - que também
            suporta BI-RAS 5.
            <br />
            <br />A interface DAMA permite o mapeamento e detalhamento de
            achados durante a fase de análise da imagem, que são então
            utilizados para geração automática de pré-relatórios.
          </CustomSlide>
          <CustomSlide
            title="Uma nova metodologia para relatórios de mamografia!"
            bgImg={Fundo1Png}
          >
            - App para celular Anamnesis
            <br />- Acesso rápido à informação Anamnesis dentro do visualizador
            de imagem.
          </CustomSlide>
          <CustomSlide
            title="Área de Trabalho especializada para mamografia"
            bgImg={Fundo1Png}
          >
            - Área de trabalho otimizada para diagnóstico de mamografia.
            <br />- Acesso a exames prévios do mesmo paciente.
            <br />- Acesso a histórico de saúde, apenas disponível em outros
            sistemas.
            <br />- Lista de achados de exames prévios para mapeamento.
          </CustomSlide>
        </Slider>
      </div>
    </div>
  );
}
