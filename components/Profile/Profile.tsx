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

import { MdLogout } from 'react-icons/md';

export default function Profile() {
  const { user } = useAuth();
  const { isLoading, data } = useBalance({
    address: user ? user : undefined,
    watch: true,
  });
  const { disconnect } = useDisconnect();
  const dispatch = useDispatch();
  return (
    <Menu direction="ltr">
      <MenuButton
        textColor={'black'}
        as={Button}
        bg={'#018576'}
        rounded={'2xl'}
        color={'white'}
        variant={'hover'}
        rightIcon={<MdLogout />}
        onClick={async () => {
          await dispatch(setUserLoading(true));
          removeUserFromStorage();
          await dispatch(setUser(undefined));
          await disconnect();
          dispatch(setUserLoading(false));
        }}
        fontSize={'sm'}
      >
        <HStack>
          <FaUserCircle />
          <Text color={'white'} fontWeight="bold">
            {isLoading ? (
              <Text>Loading...</Text>
            ) : (
              <>
                {(parseFloat(data?.value as any) / 1e18).toFixed(6) + ' '}
                {data?.symbol}
              </>
            )}
          </Text>
        </HStack>
      </MenuButton>

      {/* <MenuList p={0} width="full">
        <MenuItem
          onClick={async () => {
            await dispatch(setUserLoading(true));
            removeUserFromStorage();
            await dispatch(setUser(undefined));
            await disconnect();
            dispatch(setUserLoading(false));
          }}
          fontSize={'sm'}
        >
          <Text>Log out</Text>
        </MenuItem>
      </MenuList> */}
    </Menu>
  );
}
