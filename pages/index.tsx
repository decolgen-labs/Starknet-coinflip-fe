import { useAccount, useConnect } from '@starknet-react/core';
import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import HomePage from '@/components/Home';
import { useAuth } from '@/components/hooks/useAuth';
import StartGame from '@/components/StartGame';
import { saveUserToStorage } from '@/redux/user/user-helper';
import { setUser } from '@/redux/user/user-slice';

export default function Home() {
  const { user } = useAuth();
  const { account, address, status } = useAccount();
  const { connect, connectors, status: isLogin } = useConnect();

  const dispatch = useDispatch();
  console.log(status);
  useEffect(() => {
    if (address && address != user) {
      dispatch(setUser(address));
      saveUserToStorage(address);
    }
  }, [address]);
  useEffect(() => {
    if (user && status === 'disconnected') {
      connect({ connector: connectors[0] });
    }
  }, [user]);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {user ? <HomePage /> : <StartGame />}
    </>
  );
}
