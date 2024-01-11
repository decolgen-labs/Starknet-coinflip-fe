import { Button, Center, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PageNotFOund = () => {
  return (
    <>
      <Center height="100vh" width="100vw" flexDirection="column">
        <Image
          src="/assets/art/bg-not-found.svg"
          width={640}
          height={370}
          alt="Decolgen Labs Coinflips"
        />
        <Text
          fontSize="20px"
          fontWeight="700"
          mt={4}
          color="primary.green.100"
          mb={10}
        >
          We can’t seem to find a page you’re looking for
        </Text>
        <Link href="/">
          <Button variant="primary">Back to Home </Button>
        </Link>
      </Center>
    </>
  );
};

export default PageNotFOund;
