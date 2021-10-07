import WhiteDotsSvg from "../../assets/img/white-dots.svg";
import ArrowSvg from "../../assets/img/arrow.svg";

import "./styles.scss";

export function ResultadosInteligencia() {
  return (
    <div id="resultados-inteligencia">
      <h3>Nossa inteligência já proporcionou...</h3>
      <div id="carrossel-resultados">
        <img src={WhiteDotsSvg} alt="Pontos brancos" />
        <p>
          <span className="sign-and-number">
            <span className="plus-sign">+</span>
            <span className="result-number">500</span>
          </span>
          <span className="bigger-description">Exames revisados</span>
          <span className="smaller-description">
            Detectando mais de 120 falsos negativos
          </span>
        </p>
        <div id="controllers">
          <button id="up-arrow">
            <img id="up-arrow" src={ArrowSvg} alt="seta para cima" />
          </button>
          <button id="down-arrow">
            <img id="up-arrow" src={ArrowSvg} alt="seta para baixo" />
          </button>
        </div>
      </div>
    </div>
  );
}
