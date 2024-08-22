import React from 'react';
import { List, ListItem, ListItemText, Typography, Container, Box, Grid, Paper } from '@mui/material';

const settingsSections = [
  {
    title: 'Profile Information',
    items: [
      { label: 'Name, email, profile picture', link: '#' },
      { label: 'Social Media Verifications', link: '#' },
      { label: 'Device Integration', link: '#' },
    ]
  },
  {
    title: 'General Settings',
    items: [
      { label: 'Language Preferences', link: '#' },
      { label: 'Notification Settings', link: '#' },
      { label: 'Theme', link: '#' },
    ]
  },
  {
    title: 'Privacy Settings',
    items: [
      { label: 'Two-Factor Authentication', link: '#' },
      { label: 'Blocked Users', link: '#' },
      { label: 'Account Visibility', link: '#' },
    ]
  }
];

const SettingsPage = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={10}>
        <Paper 
          sx={{ 
            padding: 3, 
            marginBottom: 2, 
            borderRadius: '12px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
          }}
        >
          <Container>
            <Box sx={{ paddingTop: 4 }}>
              {settingsSections.map((section, index) => (
                <Paper 
                  sx={{ 
                    padding: 3, 
                    marginBottom: 2, 
                    borderRadius: '12px', 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
                  }}
                >
                  <Box key={index} sx={{  }}>
                    <Typography variant="h6" gutterBottom>
                      {section.title}
                    </Typography>
                    <List>
                      {section.items.map((item, idx) => (
                        <ListItem key={idx} button component="a" href={item.link}>
                          <ListItemText primary={item.label} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Container>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SettingsPage;