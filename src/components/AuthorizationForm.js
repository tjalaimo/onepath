import React, { useState } from 'react';
import { Box, Typography, TextField, Grid, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AuthorizationPage = () => {
  const [authorizationText, setAuthorizationText] = useState(
    `I authorize the medical team to perform necessary healthcare services...`
  );

  return (
    <Box sx={{ pb: 4 }}>
      <Grid container>
        <Grid item xs={1}>
          <Button variant="outlined" sx={{ mb: 4 }} onClick={ () => { window.history.back() }}><ArrowBackIcon /></Button>  
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h4" gutterBottom>
            Authorization
          </Typography>
        </Grid>
      </Grid>
      
      <TextField
        fullWidth
        multiline
        rows={8}
        value={authorizationText}
        onChange={(e) => setAuthorizationText(e.target.value)}
      />
    </Box>
  );
};

export default AuthorizationPage;