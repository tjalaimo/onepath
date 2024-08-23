import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Card, CardContent, Typography } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const { user, login, logout } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (user) {
    logout();
  }

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Mock API response
    const mockUserData = {
      email: email,
      role: email === 'provider@example.com' ? 'provider' : 'user', // Basic mock logic
    };

    // Example basic validation
    if (email === '' || password === '') {
      setError('Please fill in all fields');
      return;
    }

    // Call login from AuthContext
    login(mockUserData);
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={10}>
        <Card sx={{ marginBottom: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: 2, borderRadius: '12px' }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Login
            </Typography>
            {error && <Typography color="error">{error}</Typography>}
            <form onSubmit={handleLogin}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
