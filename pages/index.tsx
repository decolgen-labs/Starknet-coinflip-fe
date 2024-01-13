import { useAccount, useConnect } from '@starknet-react/core';
import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useAuth } from '@/components/hooks/useAuth';
import StartGame from '@/components/StartGame';
import { saveUserToStorage } from '@/redux/user/user-helper';
import { setUser } from '@/redux/user/user-slice';

export default function Home() {
  const { user, isLoading } = useAuth();
  const { address, status } = useAccount();
  const { connect, connectors } = useConnect();

  const dispatch = useDispatch();

  useEffect(() => {
    if (address && address != user) {
      dispatch(setUser(address));
      saveUserToStorage(address);
    }
  }, [address]);
  useEffect(() => {
    if (user && status === 'disconnected') {
      /*  console.log('Dectect dis'); */
      connect({ connector: connectors[0] });
    }
  }, [isLoading]);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>FlipCoin</title>
      </Head>
      <StartGame />
    </>
  );
}
