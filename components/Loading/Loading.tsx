import {
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spinner,
} from "@chakra-ui/react";

export default function Loading({ isOpen, onClose }: any) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Flex alignItems={"center"} py={8}>
            <Spinner color="black" mx={"auto"} />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
