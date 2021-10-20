import { Grid, GridItem, Image, Link } from "@chakra-ui/react";

import {
  gridProps,
  img1GridItemProps,
  img2GridItemProps,
  img3GridItemProps,
  infoGridProps,
  infoGridItemProps,
  linkProps,
  iconImgProps,
  logoGridItemProps,
} from "./props";

import Footer1Svg from "../../assets/img/footer1.svg";
import Footer2Svg from "../../assets/img/footer2.svg";
import Footer3Svg from "../../assets/img/footer3.svg";
import LogoDarkSvg from "../../assets/img/logo-dark.svg";
import WhatsappSvg from "../../assets/img/whatsapp.svg";
import EmailSvg from "../../assets/img/email.svg";
import InstagramSvg from "../../assets/img/instagram.svg";

export function Footer() {
  return (
    <Grid as="footer" {...gridProps}>
      <GridItem {...img1GridItemProps}>
        <Image id="footer1" src={Footer1Svg} alt="" />
      </GridItem>
      <GridItem {...img2GridItemProps}>
        <Image id="footer2" src={Footer2Svg} alt="" />
      </GridItem>
      <GridItem {...infoGridItemProps}>
        <Grid {...infoGridProps}>
          <GridItem {...logoGridItemProps}>
            <Image
              src={LogoDarkSvg}
              w={{ base: "251px", md: "300px", xl: "max-content" }}
              alt="Logo da DAMA"
            />
          </GridItem>
          <GridItem gridColumn={{ md: "1" }} gridRow={{ md: "2" }}>
            <Link href="https://wa.me/85991286702" {...linkProps}>
              <Image {...iconImgProps} src={WhatsappSvg} alt="Ícone Whatsapp" />
              +55 (85) 99128-6702
            </Link>
          </GridItem>
          <GridItem
            textAlign={{ md: "right" }}
            gridColumn={{ md: "2" }}
            gridRow={{ md: "2" }}
          >
            <Link href="https://instagram.com/audoradiologia" {...linkProps}>
              <Image
                {...iconImgProps}
                src={InstagramSvg}
                alt="Ícone Instagram"
              />
              @audoradiologia
            </Link>
          </GridItem>
          <GridItem gridColumn={{ md: "1/3" }} gridRow={{ md: "3" }}>
            <Link href="mailto:contato@damacad.com.br" {...linkProps}>
              <Image {...iconImgProps} src={EmailSvg} alt="Ícone Email" />
              contato@damacad.com.br
            </Link>
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem {...img3GridItemProps}>
        <Image id="footer3" src={Footer3Svg} alt="" />
      </GridItem>
    </Grid>
  );
}
