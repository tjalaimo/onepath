import React, {useState} from 'react';
import { AppBar, Toolbar, Typography, Popover, IconButton, useMediaQuery, Box, Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FeedIcon from '@mui/icons-material/Feed';
import GroupIcon from '@mui/icons-material/Group';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const isXSmallScreen = useMediaQuery((theme) =>  theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

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
        { !isXSmallScreen ? (
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
        ) : 
        (
          <>
            <Grid container spacing={2} sx={{ }}>
              <Grid item xs={10}>
                <Box sx={{ }}>
                  <Typography variant="h6">
                  OnePath
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={2} container justifyContent="flex-end">
                <Box>
                  <IconButton onClick={() => {setOpenMenu(true)}} sx={{ p: 0 }}>
                    <MenuIcon id="menu" />
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
            <Popover     
              open={openMenu}
              onClose={ () => {setOpenMenu(false)}}
            >
            {navLinks.map((link) => (
              <>
                  <IconButton
                  key={link.label}
                  color="inherit"
                  onClick={() => {setOpenMenu(false); navigate(link.path)}}
                  aria-label={link.label}                    
                  >
                  {link.icon}
                  </IconButton>
                  <Typography>{link.label}</Typography>
                </>
              ))}
            </Popover>
          </>
        )}

      </Toolbar>
      

    </AppBar>
  );
};

export default NavBar;
