'use client';
import { Box, Button, Center, Icon } from '@chakra-ui/react';
import React from 'react';

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
          <Icon as={LogoIcon} width={'120px'} height="auto" />
          <Button>Connect Wallet</Button>
        </Center>
      </Box>
    </>
  );
};

export default StartGame;
