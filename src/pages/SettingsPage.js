import React from 'react';
import { List, ListItem, ListItemText, Typography, Container, Box, Grid, Paper } from '@mui/material';

const settingsSections = [
  {
    title: 'Profile Information',
    items: ['Name', 'Email', 'Profile Picture', 'Bio']
  },
  {
    title: 'General Settings',
    items: ['Language Preferences', 'Notification Settings', 'Theme']
  },
  {
    title: 'Privacy Settings',
    items: ['Two-Factor Authentication', 'Blocked Users', 'Account Visibility']
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
                  <Box key={index} sx={{ marginBottom: 4 }}>
                    <Typography variant="h6" gutterBottom>
                      {section.title}
                    </Typography>
                    <List>
                      {section.items.map((item, idx) => (
                        <ListItem key={idx}>
                          <ListItemText primary={item} />
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