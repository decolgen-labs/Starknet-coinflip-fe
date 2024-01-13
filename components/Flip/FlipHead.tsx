import {
  Box,
  Checkbox,
  Flex,
  Icon,
  Radio,
  RadioGroup,
  Text,
} from '@chakra-ui/react';
import React from 'react';

import IconLignt from '../../public/assets/icons/light.svg';
export default function FlipHead({
  percentageHeads,
  result,
  percentageTails,
  coin,
  setCoin,
  statusFlip,
  statusWon,
}: any) {
  console.log(statusFlip);
  const borderColorStt = !statusFlip
    ? '#00FFB3'
    : statusFlip && statusWon
      ? '#00FFB3'
      : 'secondary.200';
  return (
    <Box
      border={'1px'}
      borderColor={borderColorStt}
      textColor="white"
      bg={'#012E3F'}
      py={4}
      px={5}
      rounded={'8px'}
      w={'fit-content'}
      mx={'auto'}
    >
      <RadioGroup defaultValue="1">
        <Flex gap={8} alignItems="center" justifyContent={'space-between'}>
          <Box
            w={{ lg: '9.5rem', base: 'fit-content' }}
            border="1px"
            px={4}
            py={3}
            borderColor={borderColorStt}
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
            <Text my={0} whiteSpace={'pre'} textColor={borderColorStt}>
              {/* {result.heads} */}
              HEADS
            </Text>

            <Radio
              isDisabled={statusFlip}
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
            <Icon color={borderColorStt} as={IconLignt} w={12} h={12} />
          </Box>
          <Box
            w={{ lg: '9.5rem', base: 'fit-content' }}
            border="1px"
            px={4}
            py={2}
            borderColor={borderColorStt}
            rounded={'8px'}
            textAlign={'center'}
          >
            <Text
              textColor={borderColorStt}
              textAlign={'center'}
              whiteSpace={'pre'}
              my={0}
              fontSize={'2rem'}
              mb={2}
            >
              {/* {percentageTails.toFixed(0)}% */}
            </Text>
            <Text textColor={borderColorStt} my={0} whiteSpace={'pre'}>
              {/* {result.tails}  */}
              TAILS
            </Text>

            <Radio
              isDisabled={statusFlip}
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
