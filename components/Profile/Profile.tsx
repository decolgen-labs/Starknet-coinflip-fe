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
import { useBalance } from '@starknet-react/core';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

import { useAuth } from '../hooks/useAuth';
interface IProps {
  disConnectWallet: () => void;
}
export default function Profile({ disConnectWallet }: IProps) {
  const { user } = useAuth();
  const { isLoading, isError, error, data, refetch } = useBalance({
    address: user ? user : undefined,
    watch: true,
  });
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
          {(parseFloat(data?.value as any) / 1e18).toFixed(6)}
          {data?.symbol}
        </Text>
      </HStack>

      <MenuList p={0} width="full">
        <MenuItem>
          <Text onClick={disConnectWallet} fontSize={'sm'}>
            Log out
          </Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
