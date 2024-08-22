import React from 'react';
import { Grid } from '@mui/material';
import UserFeed from '../components/UserFeed';

const Feed = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={10}>
        <UserFeed />
      </Grid>      
    </Grid>
  );
};

export default Feed;
