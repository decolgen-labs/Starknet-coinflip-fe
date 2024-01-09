import { Box } from '@chakra-ui/react';
import React from 'react';

import Header from '@/components/Header/Header';

export default function Layout({ children }: any) {
  return (
    <Box
      backgroundImage="url('/assets/art/bg-layout.svg')"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="contain"
      position="relative"
      w="full"
      h="100vh"
    >
      <Box
        bgColor="#1D1D1B"
        position="absolute"
        height="full"
        width="full"
        zIndex="-1"
        backgroundImage="url('/assets/art/grid.svg')"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
      />
      <Box>
        <Header />
        {children}
      </Box>
    </Box>
  );
}
