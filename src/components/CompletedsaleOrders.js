import React, { useState } from 'react';
import { IconButton, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import ViewSaleOrderModal from './ViewSaleOrderModal';

const CompletedSaleOrders = () => {
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [selectedSaleOrder, setSelectedSaleOrder] = useState(null);

  const saleOrders = [
    { id: 1, orderId: '3', customerName: 'Vikas Verma', lastModified: '31/05/2024(11:56PM)', quantity: 15 },
    { id: 2, orderId: '4', customerName: 'Abhay Shukla', lastModified: '31/05/2024(01:34AM)', quantity: 8 },
  ];

  const handleViewModalOpen = (saleOrder) => {
    setSelectedSaleOrder(saleOrder);
    setViewModalOpen(true);
  };

  const handleViewModalClose = () => {
    setViewModalOpen(false);
  };

  return (
    <>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Order ID</Th>
            <Th>Customer Name</Th>
            <Th>Last Modified</Th>
            <Th>Quantity</Th>
            <Th>Edit/View</Th>
          </Tr>
        </Thead>
        <Tbody>
          {saleOrders.map((saleOrder) => (
            <Tr key={saleOrder.id}>
              <Td>{saleOrder.orderId}</Td>
              <Td>{saleOrder.customerName}</Td>
              <Td>{saleOrder.lastModified}</Td>
              <Td>{saleOrder.quantity}</Td>
              <Td>
                <IconButton icon={<EditIcon />} onClick={() => handleViewModalOpen(saleOrder)} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {selectedSaleOrder && (
        <ViewSaleOrderModal isOpen={viewModalOpen} onClose={handleViewModalClose} saleOrder={selectedSaleOrder} />
      )}
    </>
  );
};

export default CompletedSaleOrders;
