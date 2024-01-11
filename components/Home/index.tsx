import { Box } from '@chakra-ui/react';
import { useDisconnect } from '@starknet-react/core';
import React from 'react';
import { useDispatch } from 'react-redux';

import Flip from '../Flip/Flip';
import Profile from '../Profile/Profile';
import Starked from '../Starked/Starked';

export default function HomePage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box position="absolute" top={5} right={8}>
        <Profile />
      </Box>

      <Starked />
    </Box>
  );
}
