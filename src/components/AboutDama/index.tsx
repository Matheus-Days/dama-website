import FeaturePng from "../../assets/img/feature.png";
import Fold2Png from "../../assets/img/Fold2_IMG.png";

import "./styles.scss";

export function AboutDama() {
  return (
    <section id="aboutDama">
      <div className="what-is-dama">
        <h2>DAMA é a sua nova ferramenta de diagnóstico interativo!</h2>
        <p>
          Utilizamos um <b>avançado algoritmo de aprendizado</b> para conseguir
          detectar e analisar anormalidades em exames de mamografia e assim
          gerar um relatório médico preliminar. O profissional da saúde pode
          então trabalhar a partir dessa base e{" "}
          <b>aprovar, rejeitar ou corrigir o relatório</b> para fechar o{" "}
          <b>diagnóstico de câncer de mama</b>.
        </p>
        <p>
          Todo relatório alimenta o algoritmo e faz com que o sistema de
          aprendizado inteligente se <b>aperfeiçoe cada vez mais!</b>
        </p>
      </div>
      <img
        className="fold-2"
        src={Fold2Png}
        alt="Mulher examinando mamografia"
      />
      <div className="features">
        <h2>Com DAMA você tem....</h2>
        <ul>
          <li>
            <img src={FeaturePng} alt="Mira certeira" />
            <span>
              <b>Detecção e identificação</b> de anomalias em mamografias
              digitais
            </span>
          </li>
          <li>
            <img src={FeaturePng} alt="Mira certeira" />
            <span>
              Relatório médico <b>preliminar</b> por imagem
            </span>
          </li>
          <li>
            <img src={FeaturePng} alt="Mira certeira" />
            <span>
              Sugestão de diagnóstico <b>BIRADS</b>
            </span>
          </li>
          <li>
            <img src={FeaturePng} alt="Mira certeira" />
            <span>
              <b>Aprendizado contínuo</b> do sistema de inteligência artificial
            </span>
          </li>
        </ul>
        <div className="contact-container">
          <a href="#contact">Quero entrar em contato</a>
        </div>
      </div>
    </section>
  );
}
