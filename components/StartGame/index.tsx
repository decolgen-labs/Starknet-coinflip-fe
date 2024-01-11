'use client';
import { Box, Center, Icon } from '@chakra-ui/react';
import React from 'react';

import ConnectWallet from '../Button/ConnectWallet';

import BgStart from '@/public/assets/art/bg-start.svg';
import LogoIcon from '@/public/assets/logo.svg';
const StartGame = () => {
  return (
    <>
      <Box position="relative" height="full">
        <Icon
          as={BgStart}
          height="100vh"
          width="100%"
          position="absolute"
          top={0}
          left={0}
          right={0}
        />
        <Center
          alignItems="center"
          height="full"
          width="full"
          flexDirection="column"
        >
          <Icon as={LogoIcon} width={'120px'} height="auto" mb={10} />
          <ConnectWallet />
        </Center>
      </Box>
    </>
  );
};

export default StartGame;
