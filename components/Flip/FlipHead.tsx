import { Box, Checkbox, Flex, Radio, RadioGroup, Text } from '@chakra-ui/react';
import React from 'react';

export default function FlipHead({
  percentageHeads,
  result,
  percentageTails,
  coin,
  setCoin,
}: any) {
  return (
    <Box
      border={'1px'}
      borderColor={'#00FFB3'}
      textColor="white"
      bg={'#012E3F'}
      p={8}
      rounded={'8px'}
    >
      <RadioGroup defaultValue="1">
        <Flex gap={8} alignItems="center" justifyContent={'space-between'}>
          <Box
            border="1px"
            px={6}
            py={4}
            w={'9.5rem'}
            borderColor={'#00FFB3'}
            rounded={'8px'}
            textAlign={'center'}
          >
            {/* <Text
              textAlign={'center'}
              my={0}
              whiteSpace={'pre'}
              fontSize={'2rem'}
              mb={2}
            >
              {percentageHeads.toFixed(0)}%
            </Text> */}
            <Text my={0} whiteSpace={'pre'} textColor={'#00FFB3'}>
              {/* {result.heads} */}
              HEADS
            </Text>

            <Radio
              mt={2}
              colorScheme="yellow"
              value="1"
              size={'lg'}
              onClick={() => {
                setCoin(0);
              }}
            ></Radio>
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
                stroke="#00FFB3"
                strokeWidth="3.4938"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity="0.4"
                d="M18.3045 39.9752C22.1637 39.9752 25.2921 36.8468 25.2921 32.9876C25.2921 29.1283 22.1637 26 18.3045 26C14.4452 26 11.3169 29.1283 11.3169 32.9876C11.3169 36.8468 14.4452 39.9752 18.3045 39.9752Z"
                stroke="#00FFB3"
                strokeWidth="3.4938"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity="0.4"
                d="M18.3043 19.0125C20.2338 19.0125 21.7981 17.4483 21.7981 15.5187C21.7981 13.5891 20.2338 12.0249 18.3043 12.0249C16.3748 12.0249 14.8105 13.5891 14.8105 15.5187C14.8105 17.4483 16.3748 19.0125 18.3043 19.0125Z"
                stroke="#00FFB3"
                strokeWidth="3.4938"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
          <Box
            w={'9.5rem'}
            border="1px"
            px={6}
            py={4}
            borderColor={'#00FFB3'}
            rounded={'8px'}
            textAlign={'center'}
          >
            <Text
              textColor={'#00FFB3'}
              textAlign={'center'}
              whiteSpace={'pre'}
              my={0}
              fontSize={'2rem'}
              mb={2}
            >
              {/* {percentageTails.toFixed(0)}% */}
            </Text>
            <Text textColor={'#00FFB3'} my={0} whiteSpace={'pre'}>
              {/* {result.tails}  */}
              TAILS
            </Text>

            <Radio
              mt={2}
              colorScheme="yellow"
              value="2"
              size={'lg'}
              onClick={() => {
                setCoin(1);
              }}
            ></Radio>
          </Box>
        </Flex>
      </RadioGroup>
    </Box>
  );
}
