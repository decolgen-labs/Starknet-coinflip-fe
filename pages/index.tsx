import { useAccount, useConnect } from '@starknet-react/core';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { useAuth } from '@/components/hooks/useAuth';
import StartGame from '@/components/StartGame';
import { saveUserToStorage } from '@/redux/user/user-helper';
import { setChainId, setUser } from '@/redux/user/user-slice';

export default function Home() {
  const { user, isLoading } = useAuth();
  const { address, status, chainId } = useAccount();
  const { connect, connectors, data } = useConnect();

  const dispatch = useDispatch();

  useEffect(() => {
    if (address && address != user) {
      dispatch(setUser(address));
      saveUserToStorage(address);
    }
  }, [address]);

  const reduxChainId = useSelector((state: any) => state.user.chainId);

  useEffect(() => {
    const storedChainId = localStorage.getItem('chainId');
    if (storedChainId) {
      dispatch(setChainId(storedChainId));
    }
  }, []);

  useEffect(() => {
    if (user && status === 'disconnected') {
      connect({ connector: connectors[reduxChainId] });
    }
  }, [isLoading, address, reduxChainId]);
  return (
    <>
      <StartGame />
    </>
  );
}
