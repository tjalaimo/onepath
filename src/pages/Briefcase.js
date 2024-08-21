import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Grid } from '@mui/material';

const Briefcase = () => {
  const [medicalInfo, setMedicalInfo] = useState({
    name: '',
    age: '',
    conditions: '',
    medications: ''
  });

  const handleChange = (e) => {
    setMedicalInfo({ ...medicalInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(medicalInfo);
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={10}>
        <Paper 
          sx={{ 
            padding: 3, 
            marginBottom: 2, 
            borderRadius: '12px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
          }}
        >
          <Typography variant="h5" gutterBottom>
            Medical Information
          </Typography>
          <TextField
            label="Name"
            fullWidth
            name="name"
            value={medicalInfo.name}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Age"
            fullWidth
            name="age"
            value={medicalInfo.age}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Conditions"
            fullWidth
            name="conditions"
            value={medicalInfo.conditions}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Medications"
            fullWidth
            name="medications"
            value={medicalInfo.medications}
            onChange={handleChange}
            margin="normal"
          />
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleSubmit} 
            sx={{ marginTop: 2, borderRadius: '8px' }}
          >
            Save
          </Button>
        </Paper>
        <Paper 
          sx={{ 
            padding: 3, 
            marginBottom: 2, 
            borderRadius: '12px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
          }}
        >
          <Typography variant="h5" gutterBottom>
            Family History
          </Typography>
          <TextField
            label="Name"
            fullWidth
            name="name"
            value={medicalInfo.name}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Age"
            fullWidth
            name="age"
            value={medicalInfo.age}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Conditions"
            fullWidth
            name="conditions"
            value={medicalInfo.conditions}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            label="Medications"
            fullWidth
            name="medications"
            value={medicalInfo.medications}
            onChange={handleChange}
            margin="normal"
          />
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleSubmit} 
            sx={{ marginTop: 2, borderRadius: '8px' }}
          >
            Save
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Briefcase;
