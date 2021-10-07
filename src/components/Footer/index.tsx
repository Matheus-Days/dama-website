import Footer1Svg from "../../assets/img/footer1.svg";
import Footer2Svg from "../../assets/img/footer2.svg";
import Footer3Svg from "../../assets/img/footer3.svg";

import LogoDarkSvg from "../../assets/img/logo-dark.svg";

import WhatsappSvg from "../../assets/img/whatsapp.svg";
import EmailSvg from "../../assets/img/email.svg";
import InstagramSvg from "../../assets/img/instagram.svg";
import FacebookSvg from "../../assets/img/facebook.svg";

import "./styles.scss";

export function Footer() {
  return (
    <footer>
      <img id="footer1" src={Footer1Svg} alt="Footer design" />
      <img id="footer2" src={Footer2Svg} alt="Footer design" />
      <div>
        <div id="footer-info">
          <img src={LogoDarkSvg} alt="Logo da Audo" />
          <span>
            <img src={WhatsappSvg} alt="Ícone do Whatsapp" />
            +55 (85) 9999-9999
          </span>
          <span>
            <img src={InstagramSvg} alt="Ícone do Instagram" />
            @DamaTec
          </span>
          <span>
            <img src={EmailSvg} alt="Ícone do Email" />
            suporte@dama.com.br
          </span>
          <span>
            <img src={FacebookSvg} alt="Ícone do Facebook" />
            /DamaTec
          </span>
        </div>
      </div>
      <img id="footer3" src={Footer3Svg} alt="Footer design" />
    </footer>
  );
}
