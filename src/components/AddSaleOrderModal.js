import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const AddSaleOrderModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Sale Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Order ID</FormLabel>
            <Input />
            <FormLabel mt={4}>Customer Name</FormLabel>
            <Input />
            <FormLabel mt={4}>Price</FormLabel>
            <Input />
            <FormLabel mt={4}>Last Modified</FormLabel>
            <Input />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>Save</Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddSaleOrderModal;
