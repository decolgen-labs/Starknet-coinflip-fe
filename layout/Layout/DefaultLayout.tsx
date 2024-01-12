'use client';
import { Box, Center } from '@chakra-ui/react';
import React, { PropsWithChildren, useState } from 'react';

import Footer from '@/components/Footer';
import SociaLink from '@/components/Footer/SociaLink';
import { colors } from '@/styles/theme';

const DefaultLayout = ({ children }: PropsWithChildren) => {
  // Get Reference to component and get size and position of it
  // compute the position offset inside
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });
  const handleMouse = (e: MouseEvent) => {
    if (ref.current != null) {
      const { x, y } = ref.current.getBoundingClientRect();
      setCoordinate({
        x: e.clientX - x,
        y: e.clientY - y,
      });
    }
  };
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (ref.current != null) {
      ref.current.addEventListener('mousemove', handleMouse);
    }
    // remove the eventListener
    // when component unmounts!

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => ref.current?.removeEventListener('mousemove', handleMouse);
  }, [ref]);
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
        ref={ref}
        onMouseMove={() => handleMouse}
        _after={{
          content: '""',
          position: 'absolute',
          transition: 'opacity 0.4s',
          opacity: 0.2,
          top: 0,
          zIndex: 1,
          left: 0,
          height: 'full',
          width: 'full',

          background: `radial-gradient(48px at ${coordinate.x * 1 - 5}px ${
            coordinate.y * 1 - 5
          }px,${colors.primary.green[300]}, transparent)`,
        }}
        _hover={{
          _after: {
            opacity: 0.4,
          },
        }}
      >
        {children}
        <Box position="absolute" right={20} bottom="12%" zIndex={10}>
          <SociaLink />
        </Box>
        <Center position="absolute" w="full" bottom={10} zIndex={10}>
          <Footer />
        </Center>
      </Box>
    </>
  );
};

export default DefaultLayout;
