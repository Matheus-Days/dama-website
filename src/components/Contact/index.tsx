import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  gridProps,
  headingProps,
  formStackProps,
  textGridItemProps,
  textProps,
  inputProps,
  buttonProps,
} from "./props";
import InputMask from "react-input-mask";
import { FormEvent, useState } from "react";

import contatoSvg from "../../assets/img/grafico-form.svg";

export function Contact() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  function handleForm(event: FormEvent) {
    event.preventDefault();

    const data = { nome, telefone, email };
    const stringfyedData = new URLSearchParams(data).toString();

    fetch("contato.php", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
      body: stringfyedData,
    })
      .then((res) => {
        if (res.status !== 200)
          alert(
            "Desculpa, mas houve algum problema no envio. Por favor, tente novamente."
          );
        else
          alert(
            "Informações enviadas com sucesso! Agora é só aguardar que entraremos em contato com você."
          );
      })
      .catch((err) =>
        alert(
          "Desculpa, mas houve algum problema no envio. Por favor, tente novamente."
        )
      );
  }

  return (
    <Grid id="contact" {...gridProps}>
      <GridItem position="relative" {...textGridItemProps}>
        <Image
          src={contatoSvg}
          position="absolute"
          top={{ base: "7%", md: "4%", xl: "5%", "2xl": "10%" }}
        />
        <Heading {...headingProps}>
          Vamos começar a otimizar o seu tempo?
        </Heading>
        <Text {...textProps}>
          <b>
            Vem descobrir como a DAMA pode ser a sua maior aliada na elaboração
            dos seus laudos!
          </b>{" "}
          Preencha o seu cadastro e entraremos em contato para disponibilizar
          uma versão de teste.
        </Text>
      </GridItem>
      <GridItem
        gridColumn={{ base: "1", lg: "2" }}
        gridRow={{ base: "2", lg: "1" }}
      >
        <Box bg="red.500" h="100%" px={{ md: "68px", lg: "0" }}>
          <form action="contato.php" method="POST" onSubmit={handleForm}>
            <Stack {...formStackProps}>
              <Input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                {...inputProps}
              />
              <Input
                type="tel"
                placeholder="Telefone para contato"
                as={InputMask}
                mask="(**)*.****-****"
                maskChar={null}
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                {...inputProps}
              />
              <Input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                {...inputProps}
              />
              <Button type="submit" {...buttonProps}>
                Enviar
              </Button>
            </Stack>
          </form>
        </Box>
      </GridItem>
    </Grid>
  );
}
