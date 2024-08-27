import React from 'react';
import { Grid } from '@mui/material';
import UserFeed from '../components/UserFeed';

const Feed = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <UserFeed />
      </Grid>      
    </Grid>
  );
};

export default Feed;
