import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Input, Stack, Heading } from '@chakra-ui/react';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      localStorage.setItem('authenticated', 'true');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Box width="300px" margin="100px auto">
      <Heading mb={6}>Login</Heading>
      <Stack spacing={3}>
        <Input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
      </Stack>
    </Box>
  );
};

export default Login;
