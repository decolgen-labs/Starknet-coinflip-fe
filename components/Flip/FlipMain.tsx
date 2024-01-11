import { Box, Button, Flex, Icon, Image, Text } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import IconETH from '../../public/assets/icons/eth.svg';

export default function FlipMain({
  isHeads,
  styles,
  isFlipping,
  handleFlip,
  setIsFlipping,
  handleGame,
  setStaked,
  setAmount,
  staked,
  statusWon,
}: any) {
  const listItem = [
    {
      value: 0.002,
    },
    {
      value: 0.005,
    },
    {
      value: 0.01,
    },
    {
      value: 0.02,
    },
    {
      value: 0.5,
    },
  ];

  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);
  const [status, setStatus] = useState('');

  const coinRef = useRef(null);

  const flipCoin = (result: 'heads' | 'tails') => {
    const coin = coinRef.current as HTMLElement | null;

    coin?.setAttribute('class', '');
    setTimeout(() => {
      coin?.setAttribute('class', `animate-${result}`);
      setTimeout(() => {
        if (result === 'heads') {
          setHeadsCount(headsCount + 1);
        } else {
          setTailsCount(tailsCount + 1);
        }
        setStatus(result);
      }, 6900);
    }, 100);
  };

  console.log(statusWon);
  useEffect(() => {
    if (statusWon !== undefined) {
      flipCoin(statusWon ? 'heads' : 'tails');
    }
  }, statusWon);
  return (
    <Box textColor={'white'} mt={4} bg={'#1d1d1b99'} py={8} rounded={'lg'}>
      {/* <Box position={'relative'} height={'15rem'}>
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
      </Box> */}

      <Box className="container">
        <Box ref={coinRef} id="coin" className="">
          <Box id="heads" className="heads"></Box>
          <Box id="tails" className="tails"></Box>
        </Box>
        <Flex bg={'black'} p={1} gap={1} rounded={'2xl'}>
          {listItem.map((item: any, index: number) => (
            <Button
              onClick={() => {
                setStaked(index), setAmount(item.value);
              }}
              variant={'hover'}
              cursor={'pointer'}
              bg={index === staked ? '#00FFB3' : 'transparent'}
              py={4}
              px={6}
              rounded={'2xl'}
              textColor={'white'}
              borderColor={'gray.100'}
              key={index}
            >
              <Text
                display={'flex'}
                textColor={'#018576'}
                gap={1}
                alignItems={'center'}
              >
                {item.value} <Icon as={IconETH} />
              </Text>
            </Button>
          ))}
        </Flex>
        <Flex gap={4} justifyContent={'center'}>
          <Button
            py={2}
            mt={4}
            textColor={'black'}
            border={'1px'}
            borderColor={'#018576'}
            bg={'#012E3F'}
            _hover={{ borderColor: '#00FFB3', textColor: '#00FFB3' }}
            variant={'hover'}
            color={'#018576'}
            rounded={'2xl'}
            onClick={handleGame}
          >
            Create game
          </Button>
        </Flex>

        {statusWon && (
          <>
            {statusWon ? (
              <Text
                border={'1px'}
                borderColor={'green.400'}
                textColor={'green.400'}
                px={12}
                rounded={'xl'}
                mt={4}
                py={2}
              >
                You win
              </Text>
            ) : (
              <Text
                border={'1px'}
                px={12}
                rounded={'xl'}
                mt={4}
                py={2}
                textColor={'red.500'}
                borderColor={'red.500'}
              >
                You Lose
              </Text>
            )}
          </>
        )}
      </Box>
    </Box>
  );
}
