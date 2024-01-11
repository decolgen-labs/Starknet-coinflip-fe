import { Box } from '@chakra-ui/react';
import { useDisconnect } from '@starknet-react/core';
import React from 'react';
import { useDispatch } from 'react-redux';

import Flip from '../Flip/Flip';
import Profile from '../Profile/Profile';
import Starked from '../Starked/Starked';

import { removeUserFromStorage } from '@/redux/user/user-helper';
import { setUser } from '@/redux/user/user-slice';

export default function HomePage() {
  const { disconnect } = useDisconnect();
  const dispatch = useDispatch();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh" // Optional: Set height to occupy full viewport height
    >
      <Box position="absolute" top={5} right={8}>
        <Profile
          disConnectWallet={async () => {
            await dispatch(setUser(undefined));
            await removeUserFromStorage();
            await disconnect();
          }}
        />
      </Box>

      <Starked />
    </Box>
  );
}
