import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography, Paper, Button } from '@mui/material';

const networks = [
  { id: 1, name: 'Chronic Illness Support Group' },
  { id: 2, name: 'Fitness Enthusiasts' },
];

const Networks = () => {
  const navigate = useNavigate();
  return (
    <Grid container justifyContent="center">
      <Grid item xs={10}>
        {networks.map((network) => (
          <Paper key={network.id} sx={{ padding: 2, marginBottom: 2 }}>
            <Typography variant="h6">{network.name}</Typography>
            <Button variant="contained" color="primary" sx={{ marginTop: 1 }} onClick={ () => {navigate('/network')}}>View</Button>
          </Paper>
        ))}
      </Grid>
    </Grid>
  );
};

export default Networks;
