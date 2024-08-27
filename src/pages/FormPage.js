import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Box } from '@mui/material';
import NewPatientFormPage from '../components/NewPatientForm';
import ConsentPage from '../components/ConsentForm';
import AuthorizationPage from '../components/AuthorizationForm';

const getForm = (formType) => {
    if (formType === 'newpatient') {
        return <NewPatientFormPage />
    } else if (formType === 'consent') {
        return <ConsentPage />
    } else if (formType === 'authorization') {
        return <AuthorizationPage />
    }
}

const FormPage = () => {
    const params= useParams()
    const form = params.form ? params.form : 'newpatient';

  return (
    <Box sx={{ }}>
      {getForm(form)}
    </Box>
  );
};

export default FormPage;