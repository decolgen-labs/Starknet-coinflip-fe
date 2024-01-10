import { Box } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Box
        w="full"
        h="100vh"
        backgroundImage="url('/assets/art/frame.svg')"
        backgroundPosition="center center"
        bgRepeat="no-repeat"
        backgroundSize="cover"
        overflow="hidden"
      >
        {children}
      </Box>
    </>
  );
};

export default DefaultLayout;