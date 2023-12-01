import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { connect } from "starknetkit";

export default function FlipHead({
  percentageHeads,
  result,
  percentageTails,
}: any) {
  

  return (
    <Box textColor={"white"} bg={"#1d1d1b99"} p={"2rem"} rounded={"8px"}>
      <Flex gap={"32px"} alignItems={"center"}>
        <Box border="1px" px={14} py={8} borderColor="#FFF" rounded={"8px"}>
          <Text textAlign={"center"} my={0} fontSize={"2rem"} mb={4}>
            {percentageHeads.toFixed(0)}%
          </Text>
          <Text my={0}>{result.heads} HEADS</Text>
        </Box>
        <Box>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="52"
            viewBox="0 0 37 52"
            fill="none"
          >
            <path
              d="M11.3168 49.292H25.292C32.2796 49.292 34.6088 46.9628 34.6088 39.9752V12.0248C34.6088 5.0372 32.2796 2.70801 25.292 2.70801H11.3168C4.3292 2.70801 2 5.0372 2 12.0248V39.9752C2 46.9628 4.3292 49.292 11.3168 49.292Z"
              stroke="white"
              stroke-width="3.4938"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M18.3045 39.9752C22.1637 39.9752 25.2921 36.8468 25.2921 32.9876C25.2921 29.1283 22.1637 26 18.3045 26C14.4452 26 11.3169 29.1283 11.3169 32.9876C11.3169 36.8468 14.4452 39.9752 18.3045 39.9752Z"
              stroke="white"
              stroke-width="3.4938"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              opacity="0.4"
              d="M18.3043 19.0125C20.2338 19.0125 21.7981 17.4483 21.7981 15.5187C21.7981 13.5891 20.2338 12.0249 18.3043 12.0249C16.3748 12.0249 14.8105 13.5891 14.8105 15.5187C14.8105 17.4483 16.3748 19.0125 18.3043 19.0125Z"
              stroke="white"
              stroke-width="3.4938"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Box>
        <Box border="1px" px={14} py={8} borderColor="#FFF" rounded={"8px"}>
          <Text textAlign={"center"} my={0} fontSize={"2rem"} mb={4}>
            {percentageTails.toFixed(0)}%
          </Text>
          <Text my={0}>{result.tails} TAILS</Text>
        </Box>
      </Flex>
    </Box>
  );
}
