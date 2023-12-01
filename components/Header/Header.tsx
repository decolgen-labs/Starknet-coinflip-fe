import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { connect } from "starknetkit";

export default function Header() {
  const [connection, setConnection] = useState<any>("");
  const [provider, setProvider] = useState<any>("");
  const [address, setAddress] = useState<any>("");

  const connectWallet = async () => {
    const connection = await connect();

    if (connection && connection.isConnected) {
      setConnection(connection);
      setProvider(connection.account);
      setAddress(connection.selectedAddress);
    }
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
          border={"1px"}
          borderColor={"gray.400"}
          rounded={"lg"}
        >
          <Text textColor={"white"}>
            {address && address.slice(0, 8) + "..." + address.slice(0, 8)}
          </Text>
          <Button onClick={connectWallet}>Connect</Button>
        </Flex>
      </Flex>
    </>
  );
}
