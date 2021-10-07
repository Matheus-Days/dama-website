import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";

import ChevronDownSvg from "../../assets/img/chevron-down.svg";
import "./styles.scss";

export function Benefits() {
  return (
    <div id="benefits-content">
      <h3>Confira nossas vantagens:</h3>
      <Accordion allowToggle>
        <AccordionItem>
          <h4>
            <AccordionButton className="item-btn">
              <span className="item-title fake-underline">
                Solução de Baixo Custo
              </span>
              <img src={ChevronDownSvg} alt="seta para baixo" />
            </AccordionButton>
          </h4>
          <AccordionPanel className="item-text">
            Enquanto nossos competidores cobram em dólar, a DAMA possui custos
            mais baixos e acessíveis para todos os mercados.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h4>
            <AccordionButton className="item-btn">
              <span className="item-title fake-underline">
                Sistema de dispositivo inteligente
              </span>
              <img src={ChevronDownSvg} alt="seta para baixo" />
            </AccordionButton>
          </h4>
          <AccordionPanel className="item-text">
            Nossos produtos não são dependentes de nenhum dispositivo ou
            revendedor e não é necessário possuir hardwares caros para operar.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h4>
            <AccordionButton className="item-btn">
              <span className="item-title fake-underline">
                Visualizador Web DICON
              </span>
              <img src={ChevronDownSvg} alt="seta para baixo" />
            </AccordionButton>
          </h4>
          <AccordionPanel className="item-text">
            Sistema interno para visualização eficiente de imagens DICOM através
            de navegadores Chrome. Nós suportamos várias marcas avançadas e
            tecnologias de reconstrução apenas disponíveis para desktops.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h4>
            <AccordionButton className="item-btn">
              <span className="item-title fake-underline">
                Sistema Cloud First
              </span>
              <img src={ChevronDownSvg} alt="seta para baixo" />
            </AccordionButton>
          </h4>
          <AccordionPanel className="item-text">
            O sistema completo está integrado na nuvem para melhor performance
            multi-clínica/hospitalar. Nós também fornecemos suporte para nuvens
            privadas ou servidores locais.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h4>
            <AccordionButton className="item-btn">
              <span className="item-title fake-underline">
                Inteligência Artificial Compreensível
              </span>
              <img src={ChevronDownSvg} alt="seta para baixo" />
            </AccordionButton>
          </h4>
          <AccordionPanel className="item-text">
            Nossa tecnologia de aprendizado contínuo é baseada nos princípios de
            Explainable AI, ou seja, tornar a Inteligência Artificial
            compreensível para humanos. Dessa maneira as decisões tomadas pelo
            programa são baseadas em conhecimentos verificáveis.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
