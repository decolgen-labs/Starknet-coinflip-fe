'use client';
import { Box, Center, Icon } from '@chakra-ui/react';

import ConnectWallet from '../Button/ConnectWallet';
import Profile from '../Profile/Profile';
import Starked from '../Starked/Starked';

import { useAuth } from '@/components/hooks/useAuth';
import BgStart from '@/public/assets/art/bg.svg';
import LogoIcon from '@/public/assets/logo.svg';

const StartGame = () => {
  const { user } = useAuth();

  return (
    <>
      <Box position="relative" height="full">
        <Icon
          p={4}
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
          {user ? (
            <>
              <Box position="absolute" top={20} right={32}>
                <Profile />
              </Box>

              <Starked />
            </>
          ) : (
            <>
              <Icon as={LogoIcon} width={'120px'} height="auto" mb={10} />
              <ConnectWallet />
            </>
          )}
        </Center>
      </Box>
    </>
  );
};

export default StartGame;
