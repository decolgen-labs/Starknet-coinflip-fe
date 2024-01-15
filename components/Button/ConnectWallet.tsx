import { Icon } from '@chakra-ui/icons';
import { Box, Button, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { useAccount, useConnect } from '@starknet-react/core';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import IconWallet from '../../public/assets/icons/agent.svg';
import IconBraavosWallet from '../../public/assets/icons/braavos.svg';
import { useAuth } from '../hooks/useAuth';
import ModalConnectWallet from '../Modal/ModalConnectWallet';

import ConnectWalletButton from './ConnectWalletButton';

import wallets from '@/config/wallet';
import { saveChainIdToStorage } from '@/redux/user/user-helper';
import { setChainId, setUser } from '@/redux/user/user-slice';

const ConnectWallet = ({ onClick, icon, label }: any) => {
  const { connect, connectors, data } = useConnect();
  const { address, status } = useAccount();
  const { user, isLoading, chainId } = useAuth();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();
  const connectWallet = async (connectorIndex: number) => {
    await connect({ connector: connectors[connectorIndex] });

    await dispatch(setChainId(connectorIndex));
    onClose();
  };

  return (
    <>
      <Box>
        <Button
          key={`connect1-btn}`}
          variant="primary"
          onClick={() => {
            onOpen();
          }}
        >
          Connect Wallet
        </Button>

        <ModalConnectWallet isOpen={isOpen} onClose={onClose}>
          <Box px={2} pb={4}>
            {wallets.map(wallet => (
              <ConnectWalletButton
                key={`connect-${wallet.label}`}
                onClick={async () => {
                  await connectWallet(wallet.index);
                }}
                icon={wallet.icon}
                label={wallet.label}
              />
            ))}
          </Box>
        </ModalConnectWallet>
      </Box>
    </>
  );
};

export default ConnectWallet;
