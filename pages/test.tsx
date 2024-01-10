import { Button, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { connect } from 'starknetkit';

export default function Index() {
  // eslint-disable-next-line no-unused-vars
  const [connection, setConnection] = useState<any>('');
  const [provider, setProvider] = useState<any>('');
  const [address, setAddress] = useState<any>('');

  const connectWallet = async () => {
    const connection = await connect();

    if (connection && connection.isConnected) {
      setConnection(connection);
      setProvider(connection.account);
      setAddress(connection.selectedAddress);
    }
  };

  console.log(provider);

  return (
    <div>
      <Text textColor={'white'}> {address}</Text>
      <Button onClick={connectWallet}>Connect</Button>
    </div>
  );
}
