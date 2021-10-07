import { AboutDama } from "../AboutDama";
import { Banner } from "../Banner";
import { Contact } from "../Contact";
import { LaudoEstruturado } from "../LaudoEstruturado";
import { NovaMetodologia } from "../NovaMetodologia";
import "./styles.scss";

export function Main() {
  return (
    <>
      <Banner />
      <AboutDama />
      <LaudoEstruturado />
      <NovaMetodologia />
      <Contact />
    </>
  );
}
