import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import {
  useAccount,
  useBalance,
  useConnect,
  useContract,
  useContractWrite,
  useDisconnect,
  useNetwork,
} from "@starknet-react/core";
import { useEffect, useMemo } from "react";
import abi from "../../abi/starknet.json";
import abiToken from "../../abi/tokenEth.json";
import config from "../../config/config";
import { getEvent } from "../Contract/contract";

export default function Header() {
  const { connect, connectors, status: isLogin } = useConnect();

  const { account, address, status } = useAccount();
  const { isLoading, isError, error, data } = useBalance({
    address,
    watch: true,
  });

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
    return contractToken?.populateTransaction["approve"]!(
      config.contractAddress,
      1 * 1e18
    );
  }, [address, contract, contractToken?.populateTransaction]);

  const calls = useMemo(() => {
    if (!address || !contract) return [];
    return contract.populateTransaction["create_game"]!(
      config.poolId,
      2000000000000000,
      1
    );
  }, [contract, address]);

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

  return (
    <>
      <Flex
        mb={12}
        p={8}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Image src="/assets/logo.svg" alt=""></Image>
        </Box>
        <Flex
          alignItems={"center"}
          bg={"#1d1d1b99"}
          p={2}
          gap={4}
          rounded={"lg"}
        >
          <Text textColor={"white"} textTransform={"lowercase"}>
            {address && address.slice(0, 4) + "..." + address.slice(-4)}
          </Text>

          {/* {isConnected ? (
            <Profile disConnectWallet={disConnectWallet} />
          ) : (
            <Button onClick={connectWallet}>Connect</Button>
          )} */}

          {data && (
            <Box>
              <Text color={"white"}>
                {(parseFloat(data?.value as any) / 1e18).toFixed(6)}
                {data?.symbol}
              </Text>
            </Box>
          )}
          <>
            {status === "disconnected" ? (
              <>
                {connectors.map((connector) => (
                  <li key={connector.id}>
                    <Button onClick={() => connect({ connector })}>
                      Connect
                    </Button>
                  </li>
                ))}
              </>
            ) : (
              <Button onClick={() => disconnect()}>Disconnect</Button>
            )}
          </>
        </Flex>

        <Button onClick={() => writeAsync()}>Create game</Button>
      </Flex>
    </>
  );
}
