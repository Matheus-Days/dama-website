import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
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

export function Contact() {
  return (
    <Grid id="contact" {...gridProps}>
      <GridItem {...textGridItemProps}>
        <Heading {...headingProps}>
          Vamos começar a otimizar o seu tempo?
        </Heading>
        <Text {...textProps}>
          <b>
            Vem descobrir como a DAMA pode ser a sua maior parceira na
            construção dos seus laudos!
          </b>{" "}
          Preencha o seu cadastro e em até 24hrs estaremos disponibilizando uma
          versão de teste.
        </Text>
      </GridItem>
      <GridItem
        gridColumn={{ base: "1", lg: "2" }}
        gridRow={{ base: "2", lg: "1" }}
      >
        <Box bg="red.500" h="100%">
          <form action="/" method="POST">
            <Stack {...formStackProps}>
              <Input type="text" placeholder="Nome Completo" {...inputProps} />
              <Input
                type="tel"
                placeholder="Telefone para contato"
                {...inputProps}
              />
              <Input type="email" placeholder="E-mail" {...inputProps} />
              <Input type="text" placeholder="Profissão" {...inputProps} />
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
