import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';
export default function ModalConnectWallet({ isOpen, onClose, children }: any) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={'#012E3F'}>
        <ModalHeader textColor={'white'} textAlign={'center'}>
          Connect Wallet
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
