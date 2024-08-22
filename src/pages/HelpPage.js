import React from 'react';
import { List, ListItem, Box, Typography, Card, CardContent, Grid, Divider } from '@mui/material';
import QuizIcon from '@mui/icons-material/Quiz';
import BusinessIcon from '@mui/icons-material/Business';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import GavelIcon from '@mui/icons-material/Gavel';

const helpSections = [
  { label: 'FAQ', icon: <QuizIcon color="primary" />,  link: '/faq' },
  { label: 'Company Overview', icon: <BusinessIcon color="primary" />,  link: '#' },
  { label: 'Contact Support', icon: <SupportAgentIcon color="primary" />,  link: '#' },
  { label: 'User Guide', icon: <PsychologyAltIcon color="primary" />,  link: '#' },
  { label: 'Terms of Service', icon: <GavelIcon color="primary" />,  link: '#' }
];

const HelpPage = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={10}>
        <Card sx={{ marginBottom: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: 2, borderRadius: '12px' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Help
            </Typography>
            <List>
              {helpSections.map((item, index) => (
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
    </Grid>
  );
};

export default HelpPage;