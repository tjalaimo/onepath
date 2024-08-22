import React from 'react';
import { List, ListItem, ListItemText, Typography, Container, Box, Grid, Paper } from '@mui/material';

const helpSections = [
  { title: 'FAQ', link: '/faq' },
  { title: 'Company Overview', link: '#' },
  { title: 'Contact Support', link: '#' },
  { title: 'User Guide', link: '#' },
  { title: 'Terms of Service', link: '#' }
];

const HelpPage = () => {
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
            <Typography variant="h6" gutterBottom>
              Help
            </Typography>
            <Box sx={{  }}>
              <List>
                {helpSections.map((section, index) => (
                  <ListItem key={index} button component="a" href={section.link}>
                    <ListItemText primary={section.title} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Container>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HelpPage;