import { useEffect, useRef } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

type Props = {
  number: string;
  title: string;
  description: string;
  selectedSlide?: number;
  onClick: () => void;
};

export function SlideInfo({
  number,
  title,
  description,
  selectedSlide = 0,
  onClick,
}: Props) {
  const chapterNumber = Number(number);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const distanceFromSelected = Math.abs(selectedSlide + 1 - chapterNumber);

    if (divRef.current) {
      if (distanceFromSelected === 0) divRef.current.style.opacity = "1";
      else if (distanceFromSelected === 1)
        divRef.current.style.opacity = "0.45";
      else divRef.current.style.opacity = "0.15";
    }
  }, [selectedSlide, chapterNumber]);

  return (
    <Box
      onClick={() => onClick()}
      ref={divRef}
      textAlign="center"
      w={{
        base: "360px",
        md: "470px",
        lg: "304px",
        xl: "392px",
        "2xl": "392px",
      }}
      transition="opacity 0.3s"
    >
      <Heading
        as="h4"
        fontSize={{
          base: "24px",
          md: "24px",
          lg: "24px",
          xl: "30px",
        }}
        color="white"
        fontWeight="normal"
      >
        <b>
          {number}
          {" - "}
        </b>
        {title}
      </Heading>
      <Text
        color="white"
        fontSize={{
          base: "18px",
          custom: "20px",
          md: "18px",
          lg: "18px",
          xl: "18px",
          "2xl": "26px",
        }}
        lineHeight={{ base: "20px", "2xl": "28px" }}
        mt={{ base: "4px", sm: "8px" }}
      >
        {description}
      </Text>
    </Box>
  );
}
