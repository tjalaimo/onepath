import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import HealthNews from '../components/HealthNews';
import Feed from './Feed';


const Home = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={10}>
        <HealthNews />
      </Grid>
      <Grid item xs={10}>
        <Paper 
            sx={{ 
              padding: 3, 
              marginBottom: 2, 
              borderRadius: '12px', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
            }}
          >
            <Typography variant="h6" gutterBottom>
              New posts
            </Typography>
            <Feed />
          </Paper>          
      </Grid>
    </Grid>
  );
};

export default Home;
