'use client';
import { Box, Icon } from '@chakra-ui/react';
import React from 'react';

import BgStart from '@/public/assets/art/bg-start.svg';
const StartGame = () => {
  return (
    <>
      <Box position="relative">
        <Box>COn</Box>
        <Icon
          as={BgStart}
          height="100vh"
          width="100%"
          position="absolute"
          top={0}
          left={0}
          right={0}
        />
      </Box>
    </>
  );
};

export default StartGame;
