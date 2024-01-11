import { Button, Flex, useDisclosure, Text } from '@chakra-ui/react';
import { useAccount, useConnect } from '@starknet-react/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ModalConnectWallet from '../Modal/ModalConnectWallet';

import { saveUserToStorage } from '@/redux/user/user-helper';
import { setUser } from '@/redux/user/user-slice';
import { Icon } from '@chakra-ui/icons';
import IconWallet from '../../public/assets/icons/agent.svg';

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
        <>
          {connectors.map((connector, index) => (
            <Flex
              py={8}
              key={`connect2-${index}`}
              border={'1px'}
              borderColor={'#018576'}
              alignItems={'center'}
              rounded={'lg'}
              cursor={'pointer'}
              onClick={async () => {
                await connect({ connector });

                onClose();
              }}
              gap={2}
              justifyContent={'center'}
            >
              <Icon as={IconWallet} fontSize={'2xl'} />
              <Text fontSize={'2xl'} textColor="white">
                Argent{' '}
              </Text>
            </Flex>
          ))}
        </>
      </ModalConnectWallet>
    </>
  );
};

export default ConnectWallet;
