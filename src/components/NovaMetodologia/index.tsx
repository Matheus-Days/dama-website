import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Fundo1Png from "../../assets/img/State1_Fundo_IMG.png";
import Fundo2Png from "../../assets/img/State2_Fundo_IMG.png";
import "./styles.scss";
import { CustomSlide } from "../CustomSlide";

export function NovaMetodologia() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
        </Slider>
      </div>
    </div>
  );
}
