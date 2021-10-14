import { useEffect, useRef } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

type Props = {
  number: string;
  title: string;
  children: string;
  selectedChapter?: number;
  videoPosition: number;
  onChapterClick?: (position: number) => void;
};

export function VideoChapter({
  number,
  title,
  children,
  selectedChapter = 0,
  videoPosition = 0,
  onChapterClick = (position: number) => {},
}: Props) {
  const chapterNumber = Number(number);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const distanceFromSelected = Math.abs(selectedChapter + 1 - chapterNumber);

    if (divRef.current) {
      if (distanceFromSelected === 0) divRef.current.style.opacity = "1";
      else if (distanceFromSelected === 1)
        divRef.current.style.opacity = "0.45";
      else divRef.current.style.opacity = "0.15";
    }
  }, [selectedChapter, chapterNumber]);

  return (
    <Box
      ref={divRef}
      onClick={() => onChapterClick(videoPosition)}
      textAlign="center"
      minW={{ base: "227px", lg: "392px" }}
    >
      <Heading
        color="white"
        fontSize={{ base: "28px", sm: "31px", lg: "48px", "2xl": "55px" }}
        as="h4"
      >
        {number}
        <Heading
          as="span"
          fontSize={{ base: "13px", sm: "16px", lg: "24px", "2xl": "30px" }}
        >
          {title}
        </Heading>
      </Heading>
      <Text
        color="white"
        fontSize={{ base: "14px", sm: "17px", lg: "18px", "2xl": "20px" }}
        lineHeight="22px"
        mt={{ base: "4px", sm: "8px" }}
      >
        {children}
      </Text>
    </Box>
  );
}
