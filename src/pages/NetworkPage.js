import React from 'react';
import { Paper, Grid } from '@mui/material';
import NetworkMembers from '../components/NetworkMembers';
import NetworkEvents from '../components/NetworkEvents';

const NetworkPage = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Paper 
            sx={{ 
              padding: 3, 
              marginBottom: 2, 
              borderRadius: '12px', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
            }}
          >
            <NetworkMembers />
            <NetworkEvents />
          </Paper>
      </Grid>
    </Grid>
  );
};

export default NetworkPage;