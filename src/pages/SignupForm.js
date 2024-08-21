import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const SignupForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Signup
      </Typography>
      <TextField
        label="Name"
        name="name"
        fullWidth
        value={formData.name}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        label="Email"
        type="email"
        name="email"
        fullWidth
        value={formData.email}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        fullWidth
        value={formData.password}
        onChange={handleChange}
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Signup
      </Button>
    </Box>
  );
};

export default SignupForm;
