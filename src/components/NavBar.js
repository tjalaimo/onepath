import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, Box, Grid, Item } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FeedIcon from '@mui/icons-material/Feed';
import GroupIcon from '@mui/icons-material/Group';
import Avatar from '@mui/material/Avatar';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Home', icon: <HomeIcon />, path: '/' },
    { label: 'Briefcase', icon: <MedicalServicesIcon />, path: '/briefcase' },
    { label: 'Feed', icon: <FeedIcon />, path: '/feed' },
    { label: 'Networks', icon: <GroupIcon />, path: '/networks' },
    { label: 'Providers', icon: <LocalHospitalIcon />, path: '/providers' }
  ];

  return (
    
    <AppBar position="sticky">
      <Toolbar>
        <Grid container spacing={2} sx={{ }}>
          <Grid item xs={2}>
            <Box sx={{ }}>
              <Typography variant="h6">
              OnePath
              </Typography>
            </Box>
          </Grid>
      
        
          <Grid item xs={8}>
            <Box display="flex" gap={5} sx={{ width: '100%', mx: 'auto' }}>
                {navLinks.map((link) => (
                    <IconButton
                    key={link.label}
                    color="inherit"
                    onClick={() => navigate(link.path)}
                    aria-label={link.label}                    
                    >
                    {link.icon}
                    </IconButton>
                ))}
            </Box>
          </Grid>

          <Grid item xs={2} container justifyContent="flex-end">
            <Box>
              <IconButton onClick={() => {}} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
