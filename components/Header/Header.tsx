import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { connect, disconnect } from "starknetkit";
import Profile from "../Profile/Profile";
import { InjectedConnector } from "starknetkit/injected";
import abi from "../../abi/starknet.json";
import { Contract } from "starknet";

export default function Header() {
  const [connection, setConnection] = useState<any>("");
  const [provider, setProvider] = useState<any>("");
  const [address, setAddress] = useState<string>("");
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [balance, setBalance] = useState<number>(0);

  const myTestContract = new Contract(abi, address, provider);
  const connectWallet = async () => {
    const connection = await connect();

    if (connection && connection.isConnected) {
      setConnection(connection);
      setProvider(connection.account);
      setAddress(connection.selectedAddress);
      setIsConnected(connection.isConnected);
    }
  };

  console.log(myTestContract?.balance_of);
  const disConnectWallet = async () => {
    await disconnect();
    setAddress("");
    setIsConnected(false);
  };
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

          {isConnected ? (
            <Profile disConnectWallet={disConnectWallet} />
          ) : (
            <Button onClick={connectWallet}>Connect</Button>
          )}
        </Flex>
      </Flex>
    </>
  );
}
