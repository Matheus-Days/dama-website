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
  textContainerGridItemProps,
  textProps,
  inputProps,
  buttonProps,
} from "./props";
import InputMask from "react-input-mask";
import { FormEvent, useState } from "react";
import { FaCheck } from "react-icons/fa";

import contatoCimaSvg from "../../assets/img/contato-form-cima.svg";
import contatoBaixoSvg from "../../assets/img/contato-form-baixo.svg";

export function Contact() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [formSent, setFormSent] = useState(false);
  const [submitError, setSubmitError] = useState(false);

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
        console.log(res);
        if (res.status !== 200) setSubmitError(true);
        else {
          setFormSent(true);
          setSubmitError(false);
        }
      })
      .catch((err) => setSubmitError(true));
  }

  return (
    <Grid id="contact" {...gridProps}>
      <GridItem {...textContainerGridItemProps}>
        <Grid gridTemplateRows="169px 1fr 112px">
          <GridItem>
            <Image src={contatoCimaSvg} />
          </GridItem>
          <GridItem {...textGridItemProps}>
            <Heading {...headingProps}>
              Vamos começar a otimizar o seu tempo?
            </Heading>
            <Text {...textProps}>
              <b>
                Vem descobrir como a DAMA pode ser a sua maior aliada na
                elaboração dos seus laudos!
              </b>{" "}
              Preencha o seu cadastro e entraremos em contato para
              disponibilizar uma versão de teste.
            </Text>
          </GridItem>
          <GridItem gridColumn="1" gridRow="3">
            <Image src={contatoBaixoSvg} />
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem
        gridColumn={{ base: "1", lg: "2" }}
        gridRow={{ base: "2", lg: "1" }}
      >
        <Box bg="red.500" h="100%" px={{ md: "68px", lg: "0" }}>
          <Stack
            as="form"
            action="contato.php"
            method="POST"
            onSubmit={handleForm}
            {...formStackProps}
          >
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
            <Stack>
              {submitError && (
                <Text textAlign="center" fontSize="12px" color="white">
                  Erro ao enviar o formulário. Por favor, tente novamente.
                </Text>
              )}
              <Button
                {...buttonProps}
                type="submit"
                w={formSent ? "107px" : "100%"}
                bg={formSent ? "#040505" : "#FFFFFF"}
                color={formSent ? "#FFFFFF" : "#040505"}
                _hover={{ bg: formSent ? "#040505" : "#FFFFFF" }}
                disabled={formSent}
              >
                {formSent ? <FaCheck /> : "Enviar"}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </GridItem>
    </Grid>
  );
}
