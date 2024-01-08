import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { connect, disconnect } from "starknetkit";
import Profile from "../Profile/Profile";
import { InjectedConnector } from "starknetkit/injected";
import abi from "../../abi/starknet.json";
import { Contract } from "starknet";
import {
  argent,
  useAccount,
  useBalance,
  useConnect,
  useDisconnect,
  useProvider,
} from "@starknet-react/core";

export default function Header() {
  // const [connection, setConnection] = useState<any>("");
  // const [provider, setProvider] = useState<any>("");
  // const [address, setAddress] = useState<string>("");
  // const [isConnected, setIsConnected] = useState<boolean>(false);
  // const [balance, setBalance] = useState<number>(0);

  // const myTestContract = new Contract(abi, address, provider);
  // const connectWallet = async () => {
  //   const connection = await connect();

  //   if (connection && connection.isConnected) {
  //     setConnection(connection);
  //     setProvider(connection.account);
  //     setAddress(connection.selectedAddress);
  //     setIsConnected(connection.isConnected);
  //   }
  // };

  // console.log(myTestContract?.balance_of);
  // const disConnectWallet = async () => {
  //   await disconnect();
  //   setAddress("");
  //   setIsConnected(false);
  // };

  // const connectors = [argent()];
  // const { provider: providerTest } = useProvider();

  const { connect, connectors, status: isLogin } = useConnect();

  const { account, address, status } = useAccount();
  const { isLoading, isError, error, data } = useBalance({
    address,
    watch: true,
  });

  const [apiData, setApiData] = useState(null);
  const [error2, setError] = useState(null);
  const { disconnect } = useDisconnect();
  // useEffect(() => {
  //   const apiUrl =
  //     "https://test-api.quaimark.com/market/api/nftcollections/6595201c54baf3a38f9e0ada/statistic";

  //   fetch(apiUrl)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setApiData(data);
  //     })
  //     .catch((error) => {
  //       setError(error2);
  //     });
  // }, [apiData, error2]);

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
      </Flex>
    </>
  );
}
