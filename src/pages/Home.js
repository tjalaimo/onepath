import React, { useEffect, useState } from 'react';
import { Typography, Grid, Paper, Card, CardContent, Button, useMediaQuery } from '@mui/material';
import { useTheme  } from '@mui/material';
import HealthNews from '../components/HealthNews';
import UserFeed from '../components/UserFeed';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import PostAddIcon from '@mui/icons-material/PostAdd';
import KeyIcon from '@mui/icons-material/Key';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

import AccessCodesModal from '../modals/AccessCodesModal';
import CreatePostModal from '../modals/CreatePostModal';

const Home = () => {
  const { user } = useAuth(); 
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
    if (user && user.role === 'provider') {
      navigate('/provider/home');
    }
  }, [user, navigate]);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, []);

  const [openAccessCodeModal, setOpenAccessCodeModal] = useState(false);

  const handleOpenAccessCodeModal = () => {
    setOpenAccessCodeModal(true);
  };

  // Function to close the modal
  const handleCloseAccessCodeModal = () => {
    setOpenAccessCodeModal(false);
  };

  const [openCreatePostModal, setOpenCreatePostModal] = useState(false);

  const handleOpenCreatePostModal = () => {
    setOpenCreatePostModal(true);
  };

  // Function to close the modal
  const handleCloseCreatePostModal = () => {
    setOpenCreatePostModal(false);
  };
  

  return (
    <Grid container spacing={2} justifyContent="center">

      {/* Action Items */}
      <Grid item xs={12}>
          <Card>
              <CardContent>
                  <Typography variant="h6" gutterBottom>
                  Action Items
                  </Typography>

                  <Button variant="contained" color="primary" onClick={handleOpenCreatePostModal}>
                      <PostAddIcon />{!isMobile ? 'Post' : ''}
                  </Button>
                  <Button variant="contained" color="secondary" sx={{ marginLeft: 1 }} onClick={handleOpenAccessCodeModal}>
                      <KeyIcon />{!isMobile ? 'Access Code' : ''}
                  </Button>
                  <Button variant="contained" color="info" sx={{ marginLeft: 1 }} onClick={ () => { navigate('/provider/documents') }} >
                      <NoteAddIcon />{!isMobile ? 'Documents' : ''}
                  </Button>
                  <Button variant="contained" color="success" sx={{ marginLeft: 1 }} onClick={ () => { navigate('/provider/patientlist') }}>
                      <DirectionsRunIcon />{!isMobile ? 'Patients' : ''}
                  </Button>
              </CardContent>
          </Card>
      </Grid>

      <Grid item xs={12}>
        <HealthNews />
      </Grid>
      <Grid item xs={12}>
        <Paper 
            sx={{ 
              padding: 3, 
              marginBottom: 2, 
              borderRadius: '12px', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
            }}
          >
            <Typography variant="h6" gutterBottom>
              New posts
            </Typography>
            <UserFeed />
          </Paper>          
      </Grid>

      <AccessCodesModal open={openAccessCodeModal} onClose={handleCloseAccessCodeModal} />
      <CreatePostModal open={openCreatePostModal} onClose={handleCloseCreatePostModal} />
    </Grid>
    
  );
};

export default Home;
