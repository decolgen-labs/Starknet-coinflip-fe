import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function FlipMain({
  isHeads,
  styles,
  isFlipping,
  handleFlip,
  setIsFlipping,
  status,
}: any) {
  return (
    <Box
      textColor={"white"}
      px={"32"}
      mt={4}
      bg={"#1d1d1b99"}
      py={8}
      rounded={"lg"}
    >
      <Box position={"relative"} height={"18rem"}>
        <Box mb={4}>Result: {status}</Box>
        <Box className={`${styles.coin} ${isFlipping ? styles.flipping : ""}`}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            className={`${styles.side} ${styles.heads} ${
              isHeads ? styles.visible : ""
            }`}
          >
            <Image src="/assets/coin/head.svg" alt="" />
          </Box>
          <Box
            className={`${styles.side} ${styles.tails} ${
              !isHeads ? styles.visible : ""
            }`}
          >
            <Image src="/assets/coin/tail.svg" alt="" />
          </Box>
        </Box>
      </Box>

      {isFlipping ? (
        <Text
          textTransform={"uppercase"}
          mt={8}
          bg={"transparent"}
          border={"1px"}
          borderColor={"#FFF"}
          textColor={"white"}
          cursor={"pointer"}
          py={4}
          px={6}
          textAlign={"center"}
          onClick={() => {
            setIsFlipping(false);
          }}
          rounded={"8"}
        >
          Reset
        </Text>
      ) : (
        <Text
          textTransform={"uppercase"}
          mt={8}
          border={"1px"}
          borderColor={"#FFF"}
          textColor={"black"}
          fontWeight={"extrabold"}
          cursor={"pointer"}
          py={4}
          px={6}
          rounded={"8"}
          onClick={handleFlip}
          bgColor={"white"}
          textAlign={"center"}
        >
          Click to start
        </Text>
      )}
    </Box>
  );
}
