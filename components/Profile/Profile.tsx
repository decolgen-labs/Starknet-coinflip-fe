import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { useBalance, useDisconnect } from '@starknet-react/core';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import { useAuth } from '../hooks/useAuth';

import { removeUserFromStorage } from '@/redux/user/user-helper';
import { setUser, setUserLoading } from '@/redux/user/user-slice';

interface IProps {}
export default function Profile() {
  const { user } = useAuth();
  const { isLoading, data } = useBalance({
    address: user ? user : undefined,
    watch: true,
  });
  const { disconnect } = useDisconnect();
  const dispatch = useDispatch();
  return (
    <Menu>
      <MenuButton
        textColor={'black'}
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        <HStack>
          <FaUserCircle />
          <Text>{user && user.slice(0, 4) + '...' + user.slice(-4)}</Text>
        </HStack>
      </MenuButton>
      <HStack mt={2}>
        <Text color="white" fontSize="sm">
          Balance:
        </Text>
        <Text color={'white'} fontWeight="bold">
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            <>
              {(parseFloat(data?.value as any) / 1e18).toFixed(6)}
              {data?.symbol}
            </>
          )}
        </Text>
      </HStack>

      <MenuList p={0} width="full">
        <MenuItem
          onClick={async () => {
            await dispatch(setUserLoading(true));
            removeUserFromStorage();
            dispatch(setUser(undefined));
            await disconnect();
            dispatch(setUserLoading(false));
          }}
          fontSize={'sm'}
        >
          <Text>Log out</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
