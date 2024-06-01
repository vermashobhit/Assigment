import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Heading } from '@chakra-ui/react';
import ToggleSwitch from '../components/ToggleSwitch';


const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    navigate('/login');
  };

  return (
    <Box>
      <Heading>Dashboard</Heading>
      <Button onClick={handleLogout}>Logout</Button>
      <button><ToggleSwitch/></button>
    </Box>
  );
};

export default Dashboard;
