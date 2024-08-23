import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Avatar, Typography, CardActionArea, Box } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const navigate = useNavigate();
  const { user } = useAuth(); 
  const sampleUser = {
    name: 'John Doe',
    avatar: 'https://i.pravatar.cc/150?img=3',
    bio: 'Health enthusiast and fitness lover. Sharing tips and updates.'
  };
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  useEffect(() => {
    setUserAuthenticated(user != null);
  }, [user, navigate]);

  useEffect(() => {
    setUserAuthenticated(user != null);
  }, []);

  return (
    <Box sx={{ display: userAuthenticated ? 'block' : 'none' }}>
      <CardActionArea onClick={() => { navigate('/profile/1'); }}>
        <Card sx={{ marginBottom: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: 2, borderRadius: '12px' }}>
          <CardContent sx={{ textAlign: 'center' }} onClick={() => { navigate('/profile/1'); }}>
            <Avatar
              src={sampleUser.avatar}
              alt={sampleUser.name}
              sx={{ width: 80, height: 80, marginBottom: 2, margin: '0 auto' }}
            />
            <Typography variant="h6" gutterBottom>
              {sampleUser.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {sampleUser.bio}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Box>
  );
};

export default Sidebar;
