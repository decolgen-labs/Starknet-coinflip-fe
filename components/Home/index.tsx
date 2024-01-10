import { Box } from '@chakra-ui/react';
import React from 'react';

import Flip from '../Flip/Flip';
import Starked from '../Starked/Starked';
import Header from '../Header/Header';

export default function HomePage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="60vh" // Optional: Set height to occupy full viewport height
    >
      <Flip />
      <Starked />
    </Box>
    <>
      <Header />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="60vh" // Optional: Set height to occupy full viewport height
      >
        <Flip />
      </Box>
    </>
  );
}
