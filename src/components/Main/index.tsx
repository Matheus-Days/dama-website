import { useBreakpointValue } from "@chakra-ui/react";

import { Banner } from "../Banner";
import { AboutDama } from "../AboutDama";
import { Laudo } from "../Laudo";
import { Benefits } from "../Benefits";
import { Product } from "../Product";
import { Contact } from "../Contact";
import { AboutAudo } from "../AboutAudo";
import { WhatsAppBtn } from "../WhatsAppBtn";

export function Main() {
  const showWhatsAppBtn = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      {showWhatsAppBtn && (
        <div
          style={{
            position: "fixed",
            right: "32px",
            bottom: "32px",
            zIndex: 10,
          }}
        >
          <WhatsAppBtn />
        </div>
      )}
      <Banner />
      <AboutDama />
      <Laudo />
      <Benefits />
      <Product />
      <Contact />
      <AboutAudo />
    </>
  );
}
