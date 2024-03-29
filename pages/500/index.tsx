import { Button, Center, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const InternalServerMaintance = () => {
  return (
    <Center height="100vh" width="100vw" flexDirection="column">
      <Image
        src="/assets/art/bg-500.svg"
        width={640}
        height={370}
        alt="Decolgen Labs Coinflips"
      />
      <Text fontSize="32px" fontWeight="700" mt={4} color="primary.green.100">
        Internal Server Error
      </Text>
      <Text color="primary.green.300" fontSize="20px" fontWeight="bold" mb={4}>
        We are currently trying to fix the problem.
      </Text>
      <Link href="/">
        <Button variant="primary">Back to Home </Button>
      </Link>
    </Center>
  );
};

export default InternalServerMaintance;
