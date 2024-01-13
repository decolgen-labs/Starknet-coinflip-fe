'use client';
import { Box, Center, Icon, useBreakpointValue } from '@chakra-ui/react';

import ConnectWallet from '../Button/ConnectWallet';
import Profile from '../Profile/Profile';
import Starked from '../Starked/Starked';

import { useAuth } from '@/components/hooks/useAuth';
import BgStart from '@/public/assets/art/bg-left.svg';
import BgRight from '@/public/assets/art/bg-right.svg';

import LogoIcon from '@/public/assets/logo.svg';
import Confetti from '../Motion/Confetti';
import { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
const StartGame = () => {
  const { user } = useAuth();
  const [isExploding, setIsExploding] = useState(false);

  const md = useBreakpointValue({ base: false, md: true });
  return (
    <>
      <Box position="relative" height="full" zIndex={10}>
        {md && (
          <Icon
            as={BgStart}
            height="100%"
            width="40%"
            position="absolute"
            top={0}
            left={4}
            right={0}
          />
        )}

        {md && (
          <Icon
            as={BgRight}
            height="100%"
            width="40%"
            position="absolute"
            top={0}
            right={4}
          />
        )}
        <Center
          alignItems="center"
          height="full"
          width="full"
          flexDirection="column"
        >
          {user ? (
            <>
              <Box
                position="absolute"
                top={{ lg: 20, base: 10 }}
                right={{ lg: 32, base: 6 }}
              >
                <Profile />
              </Box>

              <Starked />
            </>
          ) : (
            <>
              <Box
                position={'absolute'}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Icon as={LogoIcon} width={'120px'} height="auto" mb={10} />
                <ConnectWallet />
              </Box>
              <Box w={'100%'} h={'100%'}>
                <video
                  autoPlay
                  loop
                  muted
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1,
                  }}
                >
                  <source src="/assets/video/technical.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Box>
            </>
          )}
        </Center>
      </Box>
    </>
  );
};

export default StartGame;
