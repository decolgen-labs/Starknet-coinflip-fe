import { useAccount, useConnect } from '@starknet-react/core';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { useAuth } from '@/components/hooks/useAuth';
import SEOHead from '@/components/SEO/SEOHead';
import StartGame from '@/components/StartGame';
import {
  getItemFromLocal,
  getUserFromStorage,
  saveUserToStorage,
} from '@/redux/user/user-helper';
import { setChainId, setUser } from '@/redux/user/user-slice';

export default function Home() {
  const { user, isLoading, chainId } = useAuth();
  const { address, status } = useAccount();
  const { connect, connectors, data } = useConnect();

  const dispatch = useDispatch();
  console.log('Data cone', data);
  useEffect(() => {
    if (address && address != user) {
      dispatch(setUser(address));
      saveUserToStorage(address);
    }
  }, [address]);

  /*   const reduxChainId = useSelector((state: any) => state.user.chainId); */

  useEffect(() => {
    if (chainId != null) {
      dispatch(setChainId(chainId));
    }
  }, []);

  useEffect(() => {
    const handleReConenct = async () => {
      if (user && status === 'disconnected' && chainId != null) {
        await connect({ connector: connectors[chainId] });
      }
    };
    handleReConenct();
  }, [isLoading, address, chainId]);
  return (
    <>
      <SEOHead />
      <StartGame />
    </>
  );
}
