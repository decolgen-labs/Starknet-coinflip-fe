import { Icon } from '@chakra-ui/icons';
import { Button, Flex, useDisclosure, Text, Box } from '@chakra-ui/react';
import { useAccount, useConnect } from '@starknet-react/core';
import React from 'react';
import { useDispatch } from 'react-redux';

import IconWallet from '../../public/assets/icons/agent.svg';
import ModalConnectWallet from '../Modal/ModalConnectWallet';

const ConnectWallet = () => {
  const { connect, connectors, status: isLogin } = useConnect();
  const { account, address, status } = useAccount();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {connectors.map((connector, index) => (
        <Button
          key={`connect1-${index}`}
          variant="primary"
          onClick={() => {
            onOpen();
          }}
        >
          Connect Wallet
        </Button>
      ))}
      <ModalConnectWallet isOpen={isOpen} onClose={onClose}>
        <Box px={2} pb={4}>
          {connectors.map((connector, index) => (
            <Flex
              py={3}
              key={`connect2-${index}`}
              alignItems={'center'}
              rounded={'lg'}
              gap={{ md: 4, base: 3 }}
              cursor={'pointer'}
              _hover={{
                bg: 'primary.green.300',
              }}
              onClick={async () => {
                await connect({ connector });
                onClose();
              }}
              px={8}
            >
              <Icon as={IconWallet} fontSize={'2xl'} />
              <Text fontSize={'lg'} textColor="white">
                Argent Wallet
              </Text>
            </Flex>
          ))}
        </Box>
      </ModalConnectWallet>
    </>
  );
};

export default ConnectWallet;
