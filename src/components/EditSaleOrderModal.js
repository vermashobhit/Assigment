import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const EditSaleOrderModal = ({ isOpen, onClose, saleOrder }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Sale Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Order ID</FormLabel>
            <Input defaultValue={saleOrder.orderId} />
            <FormLabel mt={4}>Customer Name</FormLabel>
            <Input defaultValue={saleOrder.customerName} />
            <FormLabel mt={4}>Last Modified</FormLabel>
            <Input defaultValue={saleOrder.product} />
            <FormLabel mt={4}>Quantity</FormLabel>
            <Input defaultValue={saleOrder.quantity} />
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

export default EditSaleOrderModal;
