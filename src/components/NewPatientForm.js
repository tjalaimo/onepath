import React, { useState } from 'react';
import { Box, Typography, TextField, Checkbox, FormControlLabel, Grid, Card, CardContent, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const demographicFields = [
  'First Name', 'Middle Initial', 'Last Name', 'Address Line 1', 'Address Line 2', 'City', 'State', 'Zip Code', 'Phone Number',
  'Marital Status', 'Emergency Contact Name', 'Emergency Contact Relation', 'Emergency Contact Phone Number',
  'Occupation', 'Employer', 'Driver’s License Number', 'Primary Language', 'Race', 'Ethnicity',
];

const medicalHistoryFields = ['Diabetes', 'Hypertension', 'Heart Disease', 'Cancer', 'Asthma'];

const familyHistoryFields = ['Diabetes', 'Hypertension', 'Heart Disease', 'Cancer', 'Asthma'];

const NewPatientFormPage = () => {
  const [customText, setCustomText] = useState('');
  const [selectedDemographicFields, setSelectedDemographicFields] = useState({});
  const [selectedMedicalHistory, setSelectedMedicalHistory] = useState({});
  const [selectedFamilyHistory, setSelectedFamilyHistory] = useState({});

  const handleFieldSelection = (field, setSelectedFields, selectedFields) => {
    setSelectedFields({ ...selectedFields, [field]: !selectedFields[field] });
  };

  return (
    <Box sx={{ pb: 4 }}>
      <Grid container>
        <Grid item xs={1}>
          <Button variant="outlined" sx={{ mb: 4 }} onClick={ () => { window.history.back() }}><ArrowBackIcon /></Button>  
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h4" gutterBottom>
            New Patient
          </Typography>
        </Grid>
      </Grid>

      <TextField
        fullWidth
        multiline
        rows={4}
        placeholder="Custom text to include on the form..."
        value={customText}
        onChange={(e) => setCustomText(e.target.value)}
        sx={{ marginBottom: 4 }}
      />

      <Typography variant="h5" gutterBottom>
        Demographic Information
      </Typography>
      <Grid container spacing={2}>
        {demographicFields.map((field) => (
          <Grid item xs={12} sm={6} key={field}>
            <Card>
              <CardContent>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={!!selectedDemographicFields[field]}
                      onChange={() => handleFieldSelection(field, setSelectedDemographicFields, selectedDemographicFields)}
                    />
                  }
                  label={field}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" gutterBottom sx={{ marginTop: 4 }}>
        Medical History
      </Typography>
      <Grid container spacing={2}>
        {medicalHistoryFields.map((field) => (
          <Grid item xs={12} sm={6} key={field}>
            <Card>
              <CardContent>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={!!selectedMedicalHistory[field]}
                      onChange={() => handleFieldSelection(field, setSelectedMedicalHistory, selectedMedicalHistory)}
                    />
                  }
                  label={field}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" gutterBottom sx={{ marginTop: 4 }}>
        Family History
      </Typography>
      <Grid container spacing={2}>
        {familyHistoryFields.map((field) => (
          <Grid item xs={12} sm={6} key={field}>
            <Card>
              <CardContent>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={!!selectedFamilyHistory[field]}
                      onChange={() => handleFieldSelection(field, setSelectedFamilyHistory, selectedFamilyHistory)}
                    />
                  }
                  label={field}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NewPatientFormPage;
