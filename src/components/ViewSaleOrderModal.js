import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const ViewSaleOrderModal = ({ isOpen, onClose, saleOrder }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>View Sale Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Order ID</FormLabel>
            <Input value={saleOrder.orderId} isReadOnly />
            <FormLabel mt={4}>Customer Name</FormLabel>
            <Input value={saleOrder.customerName} isReadOnly />
            <FormLabel mt={4}>Product</FormLabel>
            <Input value={saleOrder.product} isReadOnly />
            <FormLabel mt={4}>Quantity</FormLabel>
            <Input value={saleOrder.quantity} isReadOnly />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ViewSaleOrderModal;
