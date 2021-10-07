import "./styles.scss";

export function Contact() {
  return (
    <div id="contact">
      <div className="contact-text">
        <h3>Vamos começar a otimizar o seu tempo?</h3>
        <p>
          <b>
            Vem descobrir como a DAMA pode ser a sua maior parceira na
            construção dos seus laudos!
          </b>{" "}
          Preencha o seu cadastro e em até 24hrs estaremos disponibilizando uma
          versão de teste.
        </p>
      </div>
      <form action="/" method="POST">
        <input type="text" placeholder="Nome Completo" />
        <input type="tel" placeholder="Telefone para contato" />
        <input type="email" placeholder="E-mail" />
        <input type="text" placeholder="Profissão" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
