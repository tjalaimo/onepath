import React from 'react';
import { Card, CardContent, Avatar, Typography } from '@mui/material';

const Sidebar = () => {
  const user = {
    name: 'John Doe',
    avatar: 'https://i.pravatar.cc/150',
    bio: 'Health enthusiast and fitness lover. Sharing tips and updates.'
  };

  return (
    <Card sx={{ marginBottom: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: 2, borderRadius: '12px' }}>
      <CardContent sx={{ textAlign: 'center' }}>
        <Avatar
          src={user.avatar}
          alt={user.name}
          sx={{ width: 80, height: 80, marginBottom: 2, margin: '0 auto' }}
        />
        <Typography variant="h6" gutterBottom>
          {user.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {user.bio}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Sidebar;
