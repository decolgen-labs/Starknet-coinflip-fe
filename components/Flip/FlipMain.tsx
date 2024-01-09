import { Box, Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';

export default function FlipMain({
  isHeads,
  styles,
  isFlipping,
  handleFlip,
  setIsFlipping,
  status,
}: any) {
  return (
    <Box textColor={'white'} mt={4} bg={'#1d1d1b99'} py={8} rounded={'lg'}>
      <Box position={'relative'} height={'15rem'}>
        <Box
          className={`${styles.coin} ${isFlipping ? styles.flipping : ''}`}
          width={'100%'}
        >
          <Box
            display={'flex'}
            width={'100%'}
            justifyContent={'center'}
            className={`${styles.side} ${styles.heads} ${
              isHeads ? styles.visible : styles.hidden
            }`}
          >
            <Image src="/assets/coin/head.svg" alt="" />
          </Box>
          <Box
            display={'flex'}
            width={'100%'}
            justifyContent={'center'}
            className={`${styles.side} ${styles.tails}  ${!isHeads ? '' : ''}`}
          >
            <Image src="/assets/coin/tail.svg" alt="" />
          </Box>
        </Box>
      </Box>

      <Flex justifyContent={'center'}>
        {isFlipping ? (
          <Button
            textTransform={'uppercase'}
            bg={'transparent'}
            variant={'unstyled'}
            border={'1px'}
            borderColor={'#FFF'}
            textColor={'white'}
            cursor={'pointer'}
            px={6}
            textAlign={'center'}
            onClick={() => {
              setIsFlipping(false);
            }}
            rounded={'8'}
            w={'20.875rem'}
          >
            Reset
          </Button>
        ) : (
          <Button
            textTransform={'uppercase'}
            border={'1px'}
            borderColor={'#FFF'}
            textColor={'black'}
            fontWeight={'extrabold'}
            cursor={'pointer'}
            py={4}
            px={6}
            rounded={'8'}
            onClick={handleFlip}
            bgColor={'white'}
            textAlign={'center'}
            w={'20.875rem'}
          >
            Click to start
          </Button>
        )}
      </Flex>
    </Box>
  );
}
