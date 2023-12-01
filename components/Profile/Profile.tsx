import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";
import React from "react";

export default function Profile({ disConnectWallet }: any) {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        <FaUserCircle />
      </MenuButton>
      <MenuList minWidth={"fit-content"} p={0}>
        <MenuItem>
          <Text onClick={disConnectWallet} fontSize={"sm"}>
            Log out
          </Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
