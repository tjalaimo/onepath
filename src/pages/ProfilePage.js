import React from 'react';
import { useParams } from 'react-router';
import { Box, Typography, Avatar, Button, Chip, Grid, Card, CardContent, useMediaQuery } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

import NetworkEvents from '../components/NetworkEvents';
import UserFeed from '../components/UserFeed';

// Example data (replace with dynamic data from props or API)
const userProfile = {
  id: 1,
  name: 'John Doe',
  profession: 'Cardiologist',
  profilePicture: 'https://i.pravatar.cc/300?img=1',
  diseases: ['Diabetes', 'Hypertension'],
  medications: ['Metformin', 'Lisinopril', 'Advil', 'Coffee'],
};

const ProfilePage = (id) => {
  const params= useParams()
  const isConnected = params.id === '1';
  const isXSmallScreen = useMediaQuery((theme) =>  theme.breakpoints.down('md'));

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <Card sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: 2, borderRadius: '12px' }}>
          <CardContent>
            {/* Profile Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
                <Avatar
                alt={userProfile.name}
                src={userProfile.profilePicture}
                sx={{ width: 100, height: 100, marginRight: 2 }}
                />
                <Box>
                  <Typography variant="h5">{userProfile.name}</Typography>
                  <Typography variant="subtitle1">{userProfile.profession}</Typography>
                </Box>
                <Box sx={{ marginLeft: 'auto' }}>
                  <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
                    <ChatBubbleOutlineIcon sx={{ mr: 1 }} />
                    {!isXSmallScreen ? 'Message' : ''}
                  </Button>
                  <Button variant="outlined" color="secondary">
                    <GroupAddIcon sx={{ mr: 1 }} />
                    {!isXSmallScreen ? 'Connect' : ''}
                  </Button>
                </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    
      {/* Conditional Section: Medical Information (if connected) */}
      {isConnected && (
        <Grid item xs={12}>
            <Card sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: 2, borderRadius: '12px' }}>
            <CardContent>
                {/* Medical Information Section */}
                <Box sx={{ }}>
                    <Typography variant="h6" gutterBottom>
                        Medications
                    </Typography>
                    {userProfile.diseases.map((medication, index) => (
                        <Chip key={index} label={medication} sx={{ marginRight: 1, marginBottom: 1 }} />
                    ))}
                </Box>
            </CardContent>
            </Card>
        </Grid>
      )}

      {/* Conditional Section: Medications (if connected) */}
      {isConnected && (
        <Grid item xs={12}>
            <Card sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: 2, borderRadius: '12px' }}>
            <CardContent>
                {/* Medications Section */}
                <Box sx={{ }}>
                    <Typography variant="h6" gutterBottom>
                        Medications
                    </Typography>
                    {userProfile.medications.map((medication, index) => (
                        <Chip key={index} label={medication} sx={{ marginRight: 1, marginBottom: 1 }} />
                    ))}
                </Box>
            </CardContent>
            </Card>
        </Grid>
      )}

      {/* Events Section */}
      <Grid item xs={12}>
        <Card sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: 2, borderRadius: '12px' }}>
        <CardContent>
            <Box sx={{ }}>
                <NetworkEvents />
            </Box>
        </CardContent>
        </Card>
      </Grid>

        {/* Posts Section */}
        <Grid item xs={12}>
            <Card sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: 2, borderRadius: '12px' }}>
            <CardContent>
                {/* Posts Section */}
                <Box>
                    <Typography variant="h6" gutterBottom>
                    Posts
                    </Typography>
                    <UserFeed />
                </Box>
            </CardContent>
            </Card>
        </Grid>
    </Grid>
  );
};

export default ProfilePage;
