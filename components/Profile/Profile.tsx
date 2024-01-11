import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
interface IProps {
  disConnectWallet: () => void;
}
export default function Profile({ disConnectWallet }: IProps) {
  return (
    <Menu>
      <MenuButton
        textColor={'black'}
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        <FaUserCircle />
      </MenuButton>
      <MenuList minWidth={'fit-content'} p={0}>
        <MenuItem>
          <Text onClick={disConnectWallet} fontSize={'sm'}>
            Log out
          </Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
