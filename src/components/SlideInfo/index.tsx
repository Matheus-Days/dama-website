import { useEffect, useRef } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

type Props = {
  number: string;
  title: string;
  description: string;
  selectedSlide: number;
};

export function SlideInfo({
  number,
  title,
  description,
  selectedSlide = 0,
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
    <Box ref={divRef} textAlign="center" w={{ base: "227px", lg: "392px" }}>
      <Heading
        as="h4"
        color="white"
        fontSize={{ base: "28px", sm: "31px", lg: "48px", "2xl": "55px" }}
        lineHeight={{ base: "18px", sm: "21px", lg: "29px", "2xl": "35px" }}
      >
        {number}{" "}
        <Heading
          as="span"
          fontSize={{ base: "16px", md: "18px", lg: "24px", "2xl": "30px" }}
        >
          {title}
        </Heading>
      </Heading>
      <Text
        color="white"
        fontSize={{ base: "14px", md: "15px", lg: "18px", "2xl": "20px" }}
        lineHeight="22px"
        mt={{ base: "4px", sm: "8px" }}
      >
        {description}
      </Text>
    </Box>
  );
}
