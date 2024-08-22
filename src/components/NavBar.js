import React, {useState} from 'react';
import { AppBar, Toolbar, Typography, SwipeableDrawer, IconButton, useMediaQuery, Box, Grid, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FeedIcon from '@mui/icons-material/Feed';
import GroupIcon from '@mui/icons-material/Group';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
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

  const secondaryNavLinks = [
    { label: 'Messages', icon: <ChatBubbleOutlineIcon />, path: '/' }, 
    { label: 'MyHealth', icon: <MedicalInformationIcon  />, path: '/' },
    { label: 'Shared Calendar', icon: <CalendarMonthIcon />, path: '/feed' },
  ]
 
  const teritaryNavLinks = [
    { label: 'Settings', icon: <SettingsIcon />, path: '/' }, 
    { label: 'Help', icon: <HelpOutlineIcon  />, path: '/' },
    { label: 'Logout', icon: <LogoutIcon />, path: '/feed' },
  ]

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
            <SwipeableDrawer
              anchor={'right'}
              open={openMenu}
              onClose={ () => {setOpenMenu(false)}}
            >
              <Box sx={{ width: 250 }}>
                <Box sx={{ p: 2 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </Box>
                <List>
                  {navLinks.map((link) => (
                    <ListItem key={link.label} disablePadding>
                      <ListItemButton onClick={() => { navigate(link.path); setOpenMenu(false); }}>
                        <ListItemIcon>
                          {link.icon}
                        </ListItemIcon>
                        <ListItemText primary={link.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <Divider variant="middle" />
                <List>
                  {secondaryNavLinks.map((link) => (
                    <ListItem key={link.label} disablePadding>
                      <ListItemButton onClick={() => { navigate(link.path); setOpenMenu(false); }}>
                        <ListItemIcon>
                          {link.icon}
                        </ListItemIcon>
                        <ListItemText primary={link.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
                <Divider variant='middle' />
                <List>
                  {teritaryNavLinks.map((link) => (
                    <ListItem key={link.label} disablePadding>
                      <ListItemButton onClick={() => { navigate(link.path); setOpenMenu(false); }}>
                        <ListItemIcon>
                          {link.icon}
                        </ListItemIcon>
                        <ListItemText primary={link.label} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </SwipeableDrawer>
          </>
        )}        
      </Toolbar>
      

    </AppBar>
  );
};

export default NavBar;
