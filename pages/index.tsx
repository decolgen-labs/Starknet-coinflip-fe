import { useAccount } from '@starknet-react/core';
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
  console.log('Status', status);
  const dispatch = useDispatch();
  useEffect(() => {
    if (address) {
      dispatch(setUser(address));
      saveUserToStorage(address);
    }
  }, [address]);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {user ? <HomePage /> : <StartGame />}
    </>
  );
}
