import {
  Image,
  Link,
  Flex,
  HStack,
  VStack,
  useBreakpointValue,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  Divider,
} from "@chakra-ui/react";
import { FaBars, FaWhatsapp } from "react-icons/all";

import LogoLightSvg from "../../assets/img/logo-light.svg";

import {
  menuIconProps,
  mobileLinkProps,
  whatsappIconProps,
  whatsappLinkProps,
  widescreenLinkProps,
  widescreenNavProps,
} from "./props";

import "./styles.scss";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const mobileVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (mobileVersion)
    return (
      <Flex as="header" justifyContent="center" zIndex="30" bg="#040505">
        <Image
          w={{ base: "190px", lg: "190px", "2xl": "max-content" }}
          src={LogoLightSvg}
          alt="Logo da DAMA"
        />
        <IconButton onClick={onOpen} icon={<FaBars />} {...menuIconProps} />
        <Drawer
          isOpen={isOpen}
          placement="top"
          onClose={onClose}
          returnFocusOnClose={false}
        >
          <DrawerContent bg="black.900">
            <DrawerHeader>
              <DrawerCloseButton color="white" fontSize="1rem" />
            </DrawerHeader>
            <DrawerBody>
              <VStack mb="80px" alignItems="center">
                <Image
                  w={{ base: "190px", lg: "190px", "2xl": "max-content" }}
                  src={LogoLightSvg}
                  alt="Logo da DAMA"
                />
              </VStack>
              <VStack
                spacing="18px"
                divider={<Divider color="#707070" />}
                as="nav"
              >
                <Link {...mobileLinkProps} href="#aboutDama">
                  Conheça a DAMA
                </Link>
                <Link {...mobileLinkProps} href="#benefits">
                  Vantagens
                </Link>
                <Link {...mobileLinkProps} href="#product">
                  Produtos
                </Link>
                <Link {...mobileLinkProps} href="#contact">
                  Fale conosco
                </Link>
                <Link
                  href="https://wa.me/5585991286702"
                  target="_blank"
                  {...whatsappLinkProps}
                >
                  Entre em contato com a DAMA
                  <IconButton {...whatsappIconProps} icon={<FaWhatsapp />} />
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    );
  else
    return (
      <Flex as="header" zIndex="30">
        <Image
          w={{ base: "152px", lg: "170px", "2xl": "max-content" }}
          src={LogoLightSvg}
          alt="Logo da DAMA"
          mr={{ "2xl": "-3.9vw" }}
        />
        <HStack as="nav" {...widescreenNavProps}>
          <Link {...widescreenLinkProps} href="#aboutDama">
            Conheça a DAMA
          </Link>
          <Link {...widescreenLinkProps} href="#benefits">
            Vantagens
          </Link>
          <Link {...widescreenLinkProps} href="#product">
            Produtos
          </Link>
          <Link {...widescreenLinkProps} href="#contact">
            Fale conosco
          </Link>
        </HStack>
      </Flex>
    );
}
