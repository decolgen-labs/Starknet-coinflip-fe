import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import {
  useAccount,
  useBalance,
  useConnect,
  useContract,
  useContractRead,
  useContractWrite,
  useDisconnect,
  useNetwork,
} from '@starknet-react/core';
import { useEffect, useMemo, useState } from 'react';

import abi from '../../abi/starknet.json';
import abiToken from '../../abi/tokenEth.json';
import config from '../../config/config';
import { getEvent } from '../Contract/contract';
import Loading from '../Loading/Loading';
import ModalConnectWallet from '../Modal/ModalConnectWallet';
import Profile from '../Profile/Profile';

export default function Header() {
  const { connect, connectors, status: isLogin } = useConnect();
  const { account, address, status } = useAccount();
  const { isLoading, isError, error, data, refetch } = useBalance({
    address,
    watch: true,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenLoading,
    onOpen: onOpenLoading,
    onClose: onCloseLoading,
  } = useDisclosure();

  const { disconnect } = useDisconnect();

  return (
    <>
      <Flex
        mb={12}
        p={8}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Flex
          alignItems={'center'}
          bg={'#1d1d1b99'}
          p={2}
          gap={4}
          rounded={'lg'}
        >
          <Text textColor={'white'} textTransform={'lowercase'}>
            {address && address.slice(0, 4) + '...' + address.slice(-4)}
          </Text>

          {status !== 'disconnected' ? (
            <Profile disConnectWallet={disconnect} />
          ) : (
            <>
              {connectors.map((connector, index) => (
                <Button
                  key={`connect1-${index}`}
                  textColor={'black'}
                  onClick={() => {
                    onOpen();
                  }}
                >
                  Connect
                </Button>
              ))}
            </>
          )}

          {data && (
            <Box>
              <Text color={'white'}>
                {(parseFloat(data?.value as any) / 1e18).toFixed(6)}
                {data?.symbol}
              </Text>
            </Box>
          )}
        </Flex>
      </Flex>

      <ModalConnectWallet isOpen={isOpen} onClose={onClose}>
        <>
          {connectors.map((connector, index) => (
            <Flex
              py={8}
              key={`connect2-${index}`}
              border={'1px'}
              borderColor={'gray.300'}
              alignItems={'center'}
              rounded={'lg'}
              cursor={'pointer'}
              onClick={() => {
                connect({ connector });
                onClose();
              }}
            >
              <Text textColor={'black'} mx={'auto'}>
                Argent Wallet
              </Text>
            </Flex>
          ))}
        </>
      </ModalConnectWallet>
      <Loading onClose={onCloseLoading} isOpen={isOpenLoading} />
    </>
  );
}
