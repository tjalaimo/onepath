import React from 'react';
import { List, ListItem, Divider, Typography, Container, Box, Grid, Paper, Card, CardContent } from '@mui/material';
import Person2Icon from '@mui/icons-material/Person2';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import LanguageIcon from '@mui/icons-material/Language';
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LockIcon from '@mui/icons-material/Lock';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const settingsSections = [
  {
    title: 'Profile Information',
    items: [
      { label: 'Name, email, profile picture', icon: <Person2Icon color="primary" />, link: '#' },
      { label: 'Social Media Verifications', icon: <VerifiedUserIcon color="primary" />, link: '#' },
      { label: 'Device Integration', icon: <DeviceHubIcon color="primary" />, link: '#' },
    ]
  },
  {
    title: 'General Settings',
    items: [
      { label: 'Language Preferences', icon: <LanguageIcon color="primary" />, link: '#' },
      { label: 'Notification Settings', icon: <EditNotificationsIcon color="primary" />, link: '#' },
      { label: 'Theme', icon: <DarkModeIcon color="primary" />, link: '#' },
    ]
  },
  {
    title: 'Privacy Settings',
    items: [
      { label: 'Two-Factor Authentication', icon: <LockIcon color="primary" />, link: '#' },
      { label: 'Blocked Users', icon: <PersonOffIcon color="primary" />, link: '#' },
      { label: 'Account Visibility', icon: <VisibilityOffIcon color="primary" />, link: '#' },
    ]
  }
];

const SettingsPage = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
    {settingsSections.map((section, index) => (
      <Grid item xs={12}>
        <Card sx={{ marginBottom: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: 2, borderRadius: '12px' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {section.title}
            </Typography>
            <List>
              {section.items.map((item, idx) => (
                <Box key={index}>
                  <ListItem button component="a" href={'#'}>
                    {item.icon}
                    <Box sx={{ ml:2 }}>
                      <Typography variant="subtitle1">{item.label}</Typography>
                    </Box>
                  </ListItem>
                  <Divider variant="middle" />
                </Box> 
              ))}
            </List>
          </CardContent>        
            </Card>
          </Grid>
    ))}
    </Grid>
  );
};

export default SettingsPage;