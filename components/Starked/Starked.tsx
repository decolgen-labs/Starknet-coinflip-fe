import {
  Box,
  Button,
  Flex,
  useDisclosure
} from '@chakra-ui/react';
import {
  useAccount,
  useBalance,
  useContract,
  useContractRead,
  useContractWrite,
  useNetwork
} from '@starknet-react/core';
import { useEffect, useMemo, useState } from 'react';

import abi from '../../abi/starknet.json';
import abiToken from '../../abi/tokenEth.json';
import config from '../../config/config';
import { getEvent } from '../Contract/contract';
import Flip from '../Flip/Flip';

export default function Starked() {
  const [staked, setStaked] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0.002);

  const listItem = [
    {
      value: 0.002,
    },
    {
      value: 0.005,
    },
    {
      value: 0.01,
    },
    {
      value: 0.02,
    },
    {
      value: 0.5,
    },
  ];

  const { account, address, status } = useAccount();
  const { isLoading, isError, error, data, refetch } = useBalance({
    address,
    watch: true,
  });
  const [coin, setCoin] = useState(0);

  const {
    isOpen: isOpenLoading,
    onOpen: onOpenLoading,
    onClose: onCloseLoading,
  } = useDisclosure();

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

  const calls = useMemo(() => {
    if (!address || !contract) return [];
    return contract.populateTransaction['create_game']!(
      config.poolId,
      amount * 1e18,
     coin
    );
  }, [address, contract, amount, coin]);

  const { data: isApprove } = useContractRead({
    functionName: 'allowance',
    args: [address as string, config.contractAddress],
    abi: abiToken,
    address:
      '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
    watch: true,
  });

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

  useEffect(() => { }, [dataWrite]);

  const handleSettle = async (transactionHash: string) => {
    if (transactionHash) {
      let isWon;
      const maxAttempts = 10;
      let isFinish = false;
      let attempts = 0;
      console.log("passs")
      while (!isFinish && attempts < maxAttempts) {
        try {
          await new Promise(resolve => setTimeout(resolve, 2000));

          const result = await getEvent(transactionHash);

          if (result && result.isWon !== undefined) {
            isWon = result.isWon;
          }

          isFinish = true;

        } catch (error) {
          attempts++;
          console.error('Error in handleSettle:', error);
        }
      }

      if (!isFinish) {
        alert("Settle failed");
        return;
      }

      if (isWon !== undefined) {
        refetch();
        alert(isWon ? 'You Win' : 'You Lose');
      } else {
        console.error('No valid data found on the blockchain');
      }
    }
  };
  const handleGame = async () => {
    try {
      onOpenLoading();
      if (Number(isApprove) >= amount * 1e18) {
        const createGame = await writeAsync();
        onCloseLoading();

        console.log("1")
        await handleSettle(createGame?.transaction_hash);
      } else {
        onOpenLoading();
        await writeApprove();
        onCloseLoading();
      }
    } catch (error) {
      console.error('Error in handleGame:', error);
      onCloseLoading();
    }
  };


  return (
    <>
      <Flip
      coin={coin}
      setCoin={setCoin}
       />

      <Flex>
        {listItem.map((item: any, index: number) => (
          <Box
            onClick={() => {
              setStaked(index), setAmount(item.value);
            }}
            cursor={'pointer'}
            bg={index === staked ? 'yellow.400' : 'transparent'}
            _hover={{ bg: 'yellow.400', textColor: 'black' }}
            py={4}
            px={6}
            textColor={"white"}
            border={'1px'}
            borderColor={'gray.100'}
            key={index}
          >
            {item.value} ETH
          </Box>
        ))}
      </Flex>

      <Flex gap={4}>
        <Button py={2} mt={4} textColor={'black'} onClick={handleGame}>
          1.Create game
        </Button>
      </Flex>
    </>
  );
}