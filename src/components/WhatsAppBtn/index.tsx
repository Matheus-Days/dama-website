import { Box, Icon, Link, Text } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

import { iconBoxProps, linkProps, textProps } from "./props";

export function WhatsAppBtn() {
  return (
    <Link href="https://wa.me/5585991286702" {...linkProps}>
      <Text as="span" {...textProps}>
        Entre em contato com a DAMA
      </Text>
      <Box {...iconBoxProps}>
        <Icon as={FaWhatsapp} fontSize="43px" lineHeight="80px" />
      </Box>
    </Link>
  );
}
