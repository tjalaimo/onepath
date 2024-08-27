import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ConsentPage = () => {
  const [consentText, setConsentText] = useState(
    `I hereby consent to the medical care and procedures recommended by my healthcare provider...`
  );

  return (
    <Box sx={{ pb: 4 }}>
      <Grid container>
        <Grid item xs={1}>
          <Button variant="outlined" sx={{ mb: 4 }} onClick={ () => { window.history.back() }}><ArrowBackIcon /></Button>  
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h4" gutterBottom>
            Consent
          </Typography>
        </Grid>
      </Grid>
      <TextField
        fullWidth
        multiline
        rows={8}
        value={consentText}
        onChange={(e) => setConsentText(e.target.value)}
      />
    </Box>
  );
};

export default ConsentPage;
