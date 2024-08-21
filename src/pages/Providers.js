import React from 'react';
import { Grid, Typography, Paper, Button, Avatar} from '@mui/material';

const providers = [
  { id: 1, name: 'Dr. Smith - Cardiologist', avatar: 'https://i.pravatar.cc/40' },
  { id: 2, name: 'Dr. Davis - Veterinarian', avatar: 'https://i.pravatar.cc/40' },
];

const Providers = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={10}>
        {providers.map((provider) => (
          <Paper key={provider.id} sx={{ padding: 2, marginBottom: 2 }}>
            <Grid container>
              <Grid item xs={1}>
                <Avatar src={provider.avatar} sx={{ marginRight: 2 }} />
              </Grid>
              <Grid item xs={11}>
                <Typography variant="h6">{provider.name}</Typography>
              </Grid>
            </Grid>
            <Button variant="contained" color="primary" sx={{ marginTop: 1 }}>Contact</Button>
          </Paper>
        ))}
      </Grid>
    </Grid>
  );
};

export default Providers;
