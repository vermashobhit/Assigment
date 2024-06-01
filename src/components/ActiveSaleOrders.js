import React, { useState } from 'react';
import { Button, IconButton, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { AddIcon, EditIcon } from '@chakra-ui/icons';
import AddSaleOrderModal from './AddSaleOrderModal';
import EditSaleOrderModal from './EditSaleOrderModal';

const ActiveSaleOrders = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedSaleOrder, setSelectedSaleOrder] = useState(null);

  const saleOrders = [
    { id: 1, orderId: '1', customerName: 'Shobhit Verma',price:'230' , lastModified: '23/04/2024', quantity: 10 },
    { id: 2, orderId: '2', customerName: 'Amit Verma', price:'450' , lastModified: '17/04/2024', quantity: 5 },
  ];

  const handleAddModalOpen = () => {
    setAddModalOpen(true);
  };

  const handleEditModalOpen = (saleOrder) => {
    setSelectedSaleOrder(saleOrder);
    setEditModalOpen(true);
  };

  const handleAddModalClose = () => {
    setAddModalOpen(false);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
  };


  return (
    <>
      <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={handleAddModalOpen} mb={4}>Sale Order</Button>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Order ID</Th>
            <Th>Customer Name</Th>
            <Th>Price</Th>
            <Th>Last Modified</Th>
            <Th>Edit/View</Th>
          </Tr>
        </Thead>
        <Tbody>
          {saleOrders.map((saleOrder) => (
            <Tr key={saleOrder.id}>
              <Td>{saleOrder.orderId}</Td>
              <Td>{saleOrder.customerName}</Td>
              <Td>{saleOrder.price}</Td>
              <Td>{saleOrder.lastModified}</Td>
              <Td>
                <IconButton icon={<EditIcon />} onClick={() => handleEditModalOpen(saleOrder)} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <AddSaleOrderModal isOpen={addModalOpen} onClose={handleAddModalClose} />
      {selectedSaleOrder && (
        <EditSaleOrderModal isOpen={editModalOpen} onClose={handleEditModalClose} saleOrder={selectedSaleOrder} />
      )}
    </>
  );
};

export default ActiveSaleOrders;
