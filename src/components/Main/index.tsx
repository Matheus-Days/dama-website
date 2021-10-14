import { Banner } from "../Banner";
import { AboutDama } from "../AboutDama";
import { LaudoEstruturado } from "../LaudoEstruturado";
// import { NovaMetodologia } from "../NovaMetodologia";
import { AboutAudo } from "../AboutAudo";
import { Contact } from "../Contact";

export function Main() {
  return (
    <>
      <Banner />
      <AboutDama />
      <LaudoEstruturado />
      {/* <NovaMetodologia /> */}
      <Contact />
      <AboutAudo />
    </>
  );
}
