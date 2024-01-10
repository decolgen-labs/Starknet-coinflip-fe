import { useAccount } from '@starknet-react/core';
import Head from 'next/head';
import { useEffect } from 'react';

import Header from '@/components/Header/Header';
import HomePage from '@/components/Home';
import StartGame from '@/components/StartGame';

export default function Home() {
  const { account, address, status } = useAccount();
  useEffect(() => {}, [address]);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {address ? <HomePage /> : <StartGame />}
    </>
  );
}
