import React, {useState, useEffect} from 'react';
import { AppBar, Button, Toolbar, Typography, SwipeableDrawer, CardActionArea, IconButton, useMediaQuery, Box, Grid, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Badge } from '@mui/material';
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import LogoutIcon from '@mui/icons-material/Logout';
import AssistantIcon from '@mui/icons-material/Assistant';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const NavBar = () => {
  const { user, logout } = useAuth(); 
  const isXSmallScreen = useMediaQuery((theme) =>  theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [navLinks, setNavLinks] = useState([]);
  const [secondaryNavLinks, setSecondaryNavLinks] = useState([]);

  useEffect(() => {
    setNavLinks(user && user.role === 'user' ? [
      { label: 'Home', icon: <HomeIcon />, path: '/' },
    // { label: 'AI Assisstant', icon: <AssistantIcon />, path: '/assistant' },
      { label: 'Briefcase', icon: <MedicalServicesIcon />, path: '/briefcase' },
      { label: 'Feed', icon: <FeedIcon />, path: '/feed' },
      { label: 'Networks', icon: <GroupIcon />, path: '/networks' },
      { label: 'Providers', icon: <LocalHospitalIcon />, path: '/providers' }
    ] : [
      { label: 'Home', icon: <HomeIcon />, path: '/provider/home' },
    // { label: 'AI Assisstant', icon: <AssistantIcon />, path: '/assistant' },
      { label: 'Documents', icon: <MedicalServicesIcon />, path: '/provider/documents' },
      { label: 'Feed', icon: <FeedIcon />, path: '/feed' },
      { label: 'Forums', icon: <GroupIcon />, path: '/networks' },
      { label: 'Patients', icon: <DirectionsRunIcon />, path: '/provider/patientlist' }
    ]);

    setSecondaryNavLinks(user && user.role === 'user' ?  [
      { label: 'Notification', count: 2, icon: <NotificationsIcon />, path: '/notifications' }, 
      { label: 'Messages', count: 2, icon: <ChatBubbleOutlineIcon />, path: '/messages' }, 
      { label: 'MyHealth', count: 0, icon: <MedicalInformationIcon  />, path: '/myhealth' },
      { label: 'Shared Calendar', icon: <CalendarMonthIcon />, path: '/calendar' },
    ] : [
      { label: 'Notification', count: 2, icon: <NotificationsIcon />, path: '/notifications' }, 
      { label: 'Messages', count: 2, icon: <ChatBubbleOutlineIcon />, path: '/messages' },     
      { label: 'Shared Calendar', icon: <CalendarMonthIcon />, path: '/calendar' },
    ]);
    
  }, [user, navigate]);  

  const teritaryNavLinks = [
    { label: 'Settings', icon: <SettingsIcon />, path: '/settings' }, 
    { label: 'Help', icon: <HelpOutlineIcon  />, path: '/help' },
    { label: 'Logout', icon: <LogoutIcon />, path: '/login' },
  ]

  return (
    
    <AppBar position="sticky">
      <Toolbar>
        { !isXSmallScreen ? (
          <Grid container spacing={2} sx={{ }}>
            <Grid item xs={2}>
              <CardActionArea onClick={() => { navigate('/'); }}>
                <Typography variant="h6">
                OnePath
                </Typography>
              </CardActionArea>
            </Grid>        
          
            <Grid item xs={8}>
              <Box display="flex" gap={5} sx={{ width: '100%', mx: 'auto' }}>
                {user ?
                  navLinks.map((link) => (
                      <IconButton
                        key={link.label}
                        color="inherit"
                        onClick={() => navigate(link.path)}
                        aria-label={link.label}                    
                      >
                      {link.icon}
                      </IconButton>
                  )) : ''
                }
              </Box>
            </Grid>

            <Grid item xs={2} container justifyContent="flex-end">
              <Box>
                {user ? (
                  <IconButton onClick={() => {setOpenMenu(true)}} sx={{ p: 0 }}>
                    <Badge
                      overlap="circular"
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      color="secondary"
                      badgeContent={
                        <ExpandMoreIcon />
                      }
                    >
                      <Avatar alt="Travis Howard" src="https://i.pravatar.cc/150?img=3" />
                    </Badge>
                  </IconButton>
                ) : (
                    <Button variant="contained" color="secondary" onClick={ () => { navigate('/login') }}>Log In</Button>
                  )                
                }
              </Box>
            </Grid>
          </Grid>
        ) : 
        (
          <>
            <Grid container spacing={2} sx={{ }}>
              <Grid item xs={8}>
                <Box sx={{ }}>
                  <Typography variant="h6">
                  OnePath
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4} container justifyContent="flex-end">
                {user ? (
                  <Box>
                    <IconButton onClick={() => {setOpenMenu(true)}} sx={{ p: 0 }}>
                      <MenuIcon id="menu" />
                    </IconButton>
                  </Box>
                ) : (
                    <Button variant="contained" color="secondary" onClick={ () => { navigate('/login') }}>Log In</Button>
                  )
                }
              </Grid>
            </Grid>            
          </>
        )}        
      </Toolbar>
      <SwipeableDrawer
          anchor={'right'}
          open={openMenu}
          onClose={ () => {setOpenMenu(false)}}
        >
          <Box sx={{ width: 250 }}>
            <Box sx={{ p: 2 }}>
              <IconButton onClick={() => { navigate('/profile/1'); setOpenMenu(false); }}>
                <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?img=3"  />              
              </IconButton>
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
                        <IconButton aria-label={link.count}>
                          <Badge badgeContent={link.count} color="primary">
                            {link.icon}
                          </Badge>
                        </IconButton>
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
    </AppBar>
  );
};

export default NavBar;
