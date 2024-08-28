import React, { useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Avatar, Chip, Grid, Card, CardContent, List, ListItem, ListItemText, Divider, Button, Rating, TextField } from '@mui/material';

import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';

// Sample Data
const appointments = [
  {
    user: {
      id: 1,
      name: 'John Doe',
      dateOfBirth: '1990-01-15',
      avatar: 'https://i.pravatar.cc/150?img=1',
      illnesses: ['Diabetes', 'Hypertension'],
      medications: ['Metformin', 'Lisinopril'],
    },
    appointmentDetails: {
      date: '2024-08-22 10:30 AM',
      reason: 'Regular Checkup',
      patientQuestions: ['Can I lower my dosage?', 'What are my blood sugar levels?'],
      isComplete: false,
      isReviewed: false
    },
    appointmentResults: {
      diagnosis: ['Type 2 Diabetes'],
      medicationsPrescribed: ['Glipizide'],
      notes: ['Monitor blood sugar levels more frequently.', 'Follow-up in 3 months.'],
    },
  },
  {
    user: {
      id: 2,
      name: 'Jane Doe',
      dateOfBirth: '1990-01-15',
      avatar: 'https://i.pravatar.cc/150?img=2',
      illnesses: ['Diabetes', 'Hypertension'],
      medications: ['Metformin', 'Lisinopril'],
    },
    appointmentDetails: {
      date: '2024-08-22 10:30 AM',
      reason: 'Regular Checkup',
      patientQuestions: ['Can I lower my dosage?', 'What are my blood sugar levels?'],
      isComplete: true,
      isReviewed: false
    },
    appointmentResults: {
      diagnosis: ['Type 2 Diabetes'],
      medicationsPrescribed: ['Glipizide'],
      notes: ['Monitor blood sugar levels more frequently.', 'Follow-up in 3 months.'],
    },
  },
  {
    user: {
      id: 1,
      name: 'Greg Doe',
      dateOfBirth: '1990-01-15',
      avatar: 'https://i.pravatar.cc/150?img=3',
      illnesses: ['Diabetes', 'Hypertension'],
      medications: ['Metformin', 'Lisinopril'],
    },
    appointmentDetails: {
      date: '2024-08-22 10:30 AM',
      reason: 'Regular Checkup',
      patientQuestions: ['Can I lower my dosage?', 'What are my blood sugar levels?'],
      isComplete: true,
      isReviewed: true
    },
    appointmentResults: {
      diagnosis: ['Type 2 Diabetes'],
      medicationsPrescribed: ['Glipizide'],
      notes: ['Monitor blood sugar levels more frequently.', 'Follow-up in 3 months.'],
    },
  },
];

const AppointmentDetailPage = () => {
  const { id } = useParams();
  const [comment, setComment] = useState('');
  const appointment = appointments[id] ? appointments[id] : appointments[1];

  if (!appointment) {    
    return <Typography variant="h6">Appointment not found</Typography>;
  }

  const {
    user,
    appointmentDetails,
    appointmentResults,
  } = appointment;

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <Card sx={{ marginBottom: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: 2, borderRadius: '12px' }}>
          <CardContent>
            {/* Patient Information */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 4 }}>
              <Avatar src={user.avatar} alt={user.name} sx={{ width: 100, height: 100, marginRight: 2 }} />
              <Box>
                <Typography variant="h4">{user.name}</Typography>
                <Typography variant="body1">Date of Birth: {user.dateOfBirth}</Typography>
              </Box>
            </Box>
            {/* Appointment Details */}
            <Box sx={{ mb: 2, mt: 2  }}>  
              
                <Typography variant="h6" gutterBottom>
                  Appointment Details
                </Typography>
                <Typography variant="body1">
                  <strong>Date:</strong> {appointmentDetails.date}
                </Typography>
                <Typography variant="body1">
                  <strong>Reason:</strong> {appointmentDetails.reason}
                </Typography>

                {/* Patient Questions as a list */}
                <Typography variant="body1" sx={{ marginTop: 2 }}>
                  <strong>Patient Questions:</strong>
                </Typography>
                <List>
                  {appointmentDetails.patientQuestions.map((question, index) => (
                    <ListItem key={index}>
                      <HelpOutlineIcon color="primary" />
                      <Box sx={{ ml:2 }}>
                        <Typography variant="subtitle1">{question}</Typography>
                      </Box>
                    </ListItem>
                  ))}
                </List>
              
            </Box>
            {!appointmentDetails.isComplete ? (
                  <Grid container>
                      <Grid item xs={6}>
                          <Button variant="contained" color="primary" sx={{ marginBottom: 2 }}>
                              Confirm
                          </Button>
                      </Grid>
                      <Grid item xs={6} justifyContent={'flex-end'}>
                          <Button variant="contained" color="primary" sx={{ marginBottom: 2 }}>
                              Reschedule
                          </Button>
                      </Grid>
                  </Grid>
                  ) : ''
              }
              {appointmentDetails.isComplete && !appointmentDetails.isReviewed ? (
                  <Grid container>
                      <Grid item xs={12}>
                          <Button variant="contained" color="primary" sx={{ marginBottom: 2 }}>
                              Request Review
                          </Button>
                      </Grid>
                  </Grid>
                  ) : ''
              }

            <Divider variant="middle" />

            {/* Illnesses & Medications */}
            <Box sx={{ mb: 2, mt: 2 }}>              
                <Typography variant="h6" gutterBottom>
                  Illnesses
                </Typography>
                {user.illnesses.map((illness, index) => (
                  <Chip key={index} label={illness} sx={{ margin: 0.5 }} />
                ))}
            </Box>

            <Divider variant="middle" />

            <Box sx={{ mb: 2, mt: 2  }}>  
                <Typography variant="h6" gutterBottom>
                Medications
              </Typography>
              {user.medications.map((medication, index) => (
                <Chip key={index} label={medication} sx={{ margin: 0.5 }} />
              ))}
            </Box>

            {appointmentDetails.isComplete ? (
              <>
                  <Divider variant="middle" /> 
                  
                  <Box sx={{ mb: 2, mt: 2  }}>              
                    <Typography variant="h6" gutterBottom>
                      Appointment Results
                    </Typography>
                    <Typography variant="body1">
                      <strong>Diagnosis:</strong>
                    </Typography>
                    {appointmentResults.diagnosis.map((diag, index) => (
                      <Chip key={index} label={diag} sx={{ margin: 0.5 }} />
                    ))}

                    <Typography variant="body1" sx={{ marginTop: 2 }}>
                      <strong>Medications Prescribed:</strong>
                    </Typography>
                    {appointmentResults.medicationsPrescribed.map((med, index) => (
                      <Chip key={index} label={med} sx={{ margin: 0.5 }} />
                    ))}
                    
                    <Typography variant="body1" sx={{ marginTop: 2 }}>
                      <strong>Notes:</strong>
                    </Typography>
                    <List>
                      {appointmentResults.notes.map((note, index) => (
                        <ListItem key={index}>
                          <PlaylistAddCheckCircleIcon color="primary" />
                          <Box sx={{ ml:2 }}>
                            <Typography variant="subtitle1">{note}</Typography>
                          </Box>                    
                        </ListItem>
                      ))}
                    </List>              
                  </Box>

                  {appointment.appointmentDetails.isReviewed ? (
                    <>
                    <Typography variant="body1" sx={{ marginTop: 2 }}>
                      <strong>Review:</strong>
                    </Typography>
                    <ListItem alignItems="flex-start">
                        <Avatar src={user.avatar} alt={user.name} sx={{ mr: 2 }} />
                        <ListItemText
                            primary={user.name}
                            secondary={
                            <>
                                <Grid container spacing={2}>
                                <Grid item xs={12} sm={3}>
                                    <Typography>Office Staff: {5}</Typography>
                                    <Rating value={5} readOnly />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <Typography>Wait Time: {4.5}</Typography>
                                    <Rating value={4.5} readOnly />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <Typography>Care Provided: {5}</Typography>
                                    <Rating value={5} readOnly />
                                </Grid>
                                <Grid item xs={12} sm={3}>
                                    <Typography>Overall Experience: {5}</Typography>
                                    <Rating value={5} readOnly />
                                </Grid>
                                </Grid>

                                <Typography sx={{ marginTop: 2 }}>{'Had a wonderful expreience, thank you!'}</Typography>

                                <Box sx={{ marginTop: 2 }}>
                                  <TextField
                                  label="Respond to review!"
                                  multiline
                                  rows={4}
                                  fullWidth
                                  value={comment}
                                  onChange={(e) => setComment(e.target.value)}
                                  />

                                  <Box sx={{ textAlign: 'right', marginTop: 2 }}>
                                    <Button variant="contained" onClick={() => {}}>
                                    Submit Response
                                    </Button>
                                </Box>
                              </Box>
                            </>
                            }
                        />
                        </ListItem>
                    </>
                  ) : ''}
                </>
              ) : (
                <></>
              )
            }
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AppointmentDetailPage;
