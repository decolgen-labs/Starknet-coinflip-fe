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
  const { isLoading, isError, error, data } = useBalance({
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

  const { chain } = useNetwork();
  const { contract } = useContract({
    abi: abi,
    address: config.contractAddress,
  });

  const { contract: contractToken } = useContract({
    abi: abiToken,
    address: chain.nativeCurrency.address,
  });

  const callsApprove = useMemo(() => {
    if (!address || !contract) return [];
    return contractToken?.populateTransaction['approve']!(
      config.contractAddress,
      1 * 1e18
    );
  }, [address, contract, contractToken?.populateTransaction]);

  const [signature, setSignature] = useState<any>();
  const [gameId, setGameId] = useState<any>();

  const calls = useMemo(() => {
    if (!address || !contract) return [];
    return contract.populateTransaction['create_game']!(
      config.poolId,
      2000000000000000,
      1
    );
  }, [contract, address]);

  const callsSettle = useMemo(() => {
    return (gameId: any, signature: any) => {
      if (!address || !contract) return;
      return contract.populateTransaction['settle']!(gameId, signature);
    };
  }, [contract, address]);

  const { data: isApprove } = useContractRead({
    functionName: 'allowance',
    args: [address as string, config.contractAddress],
    abi: abiToken,
    address:
      '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
    watch: true,
  });

  console.log(Number(isApprove));
  const {
    writeAsync,
    data: dataWrite,
    isPending,
  } = useContractWrite({
    calls,
  });

  const {
    writeAsync: writeApprove,
    data: dataApprove,
    isPending: isPendingApprove,
  } = useContractWrite({
    calls: callsApprove,
  });

  /* console.log(dataWrite?.transaction_hash); */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleGame = async () => {
    try {
      if (Number(isApprove) > 0) {
        onOpenLoading();
        await writeAsync();
        onCloseLoading();
      } else {
        onOpenLoading();
        await writeApprove();

        onCloseLoading();
      }

      const { verifyResult, idGame } = await getEvent(
        '0x14c7334eed2284e198aff5a4a4a40a86978ea668cf6795e28a50b2562504e3a'
      );

      if (verifyResult !== null && idGame !== null) {
        const settleCalls = callsSettle(verifyResult, idGame);
        const {
          writeAsync: writeSettle,
          data: dataSettle,
          isPending: isPendingSettle,
          // eslint-disable-next-line react-hooks/rules-of-hooks
        } = useContractWrite({ calls: settleCalls });

        if (writeSettle) {
          const settle = await writeSettle();
          console.log(settle);
        }
      }

      // }
    } catch (error) {}
  };

  useEffect(() => {}, [handleGame]);
  return (
    <>
      <Flex
        mb={12}
        p={8}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Box>
          <Image src="/assets/logo.svg" alt=""></Image>
        </Box>
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

        <Button textColor={'black'} onClick={handleGame}>
          Create game
        </Button>
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
