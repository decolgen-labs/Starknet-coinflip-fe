import { Box, Center } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

import Footer from '@/components/Footer';

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
        position="relative"
      >
        {children}
        {/*  <Center position="absolute" w="full" bottom={2}>
          <Footer />
        </Center> */}
      </Box>
    </>
  );
};

export default DefaultLayout;
