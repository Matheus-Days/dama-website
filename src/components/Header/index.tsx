import LogoLightSvg from "../../assets/img/logo-light.svg";

import "./styles.scss";

export function Header() {
  return (
    <header>
      <img src={LogoLightSvg} alt="Audo logo" />
      <nav>
        <a href="#aboutDama">Conheça a DAMA</a>
        <a href="#benefits">Vantagens</a>
        <a href="#contact">Contato</a>
        <a href="https://audo.com.br">Audo</a>
      </nav>
    </header>
  );
}
