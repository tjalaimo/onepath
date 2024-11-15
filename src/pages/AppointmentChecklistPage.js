import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Button, List, ListItem, IconButton, Grid, TextField, Card, CardContent, Divider } from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import AddIcon from '@mui/icons-material/Add';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import WriteReview from '../components/WriteReview';
import { useNavigate } from 'react-router-dom';

const appointmentList = [{
        date: '2024-09-01 14:00',
        type: 'Office Visit',
        description: 'Routine checkup and blood test',
        providerId: '1234',
        providerName: 'Dr. Jane Doe',
        providerAddress: '123 Health St, Wellness City, WC 12345',
        questions: ['Can I stop medication?', 'Am I taking too much medication?'],
        providerNotes: [],
        isComplete: false
    },
    {
        date: '2024-09-01 14:00',
        type: 'Office Visit',
        description: 'Routine checkup and blood test',
        providerId: '1234',
        providerName: 'Dr. Jane Doe',
        providerAddress: '123 Health St, Wellness City, WC 12345',
        questions: ['Can I stop medication?', 'Am I taking too much medication?'],
        providerNotes: ['Monitor blood sugar levels more frequently.', 'Follow-up in 3 months.'],
        isComplete: true
    }
];

const AppointmentChecklistPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const appointmentData = appointmentList[id] ? appointmentList[id] : appointmentList[0];
  const [questions, setQuestions] = useState(appointmentData.questions);
  const [newQuestion, setNewQuestion] = useState('');

  const handleAddQuestion = () => {
    if (newQuestion.trim() !== '') {
      setQuestions([...questions, newQuestion]);
      setNewQuestion('');
    }
  };

  const handleOpenGoogleMaps = () => {
    const address = encodeURIComponent(appointmentData.providerAddress);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
            <Card sx={{ marginBottom: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: 2, borderRadius: '12px' }}>
                <CardContent>
                    <Box sx={{  }}>
                        <Box sx={{ mb: 2 }}>
                            {/* Appointment Header */}
                            <Grid container>  
                                <Grid item xs={3} sm={2}>
                                    <Button variant="outlined" sx={{ mb: 1 }} onClick={ () => { window.history.back() }}><ArrowBackIcon /></Button>  
                                </Grid>
                                <Grid item>
                                    <Typography variant="h4" gutterBottom>
                                        {`${appointmentData.type} with ${appointmentData.providerName}`}
                                    </Typography>
                                </Grid>
                            </Grid>
                            
                            {/* Appointment Date and Address */}
                            <Box sx={{ mb: 2, mt: 2 }}>   
                                <Typography variant="subtitle1" gutterBottom>
                                    Date & Time: {appointmentData.date}
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    Address: {appointmentData.providerAddress}{' '}
                                    <IconButton onClick={handleOpenGoogleMaps}>
                                    <MapIcon />
                                    </IconButton>
                                </Typography>
                            </Box>
                            {!appointmentData.isComplete ? (
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Button variant="contained" color="primary" sx={{ marginBottom: 2 }} onClick={() => navigate(`/appointmentcheckin/${id}`)}>
                                            Check In
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
                        </Box>

                        <Divider variant="middle" />

                        {/* Appointment Description */}
                        <Box sx={{ mb: 2, mt: 2 }}>   
                            <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
                                Description
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {appointmentData.description}
                            </Typography>
                        </Box>

                        <Divider variant="middle" />

                        {/* Questions Section */}
                        <Box sx={{ mb: 2, mt: 2 }}>  
                            <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
                                Questions
                            </Typography>
                            {questions.length === 0 ? (
                                <Typography variant="body1" gutterBottom>
                                No questions asked yet.
                                </Typography>
                            ) : (
                                <List>
                                {questions.map((question, index) => (
                                    <ListItem key={index}>
                                    <HelpOutlineIcon color="primary" />
                                    <Box sx={{ ml:2 }}>
                                        <Typography variant="subtitle1">{question}</Typography>
                                    </Box>
                                    </ListItem>
                                ))}
                                </List>
                            )}
                        
                            {/* Add New Question */}
                            {!appointmentData.isComplete ? (  
                                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                                    <TextField
                                    label="Ask a question"
                                    value={newQuestion}
                                    onChange={(e) => setNewQuestion(e.target.value)}
                                    fullWidth
                                    />
                                    <IconButton color="primary" onClick={handleAddQuestion}>
                                    <AddIcon />
                                    </IconButton>
                                </Box>
                                ) : ''
                            }
                            
                        </Box>

                        {/* Notes as a list */}                        
                        {appointmentData.isComplete ? (  
                            <>
                                <Divider variant="middle" />
                                <Typography variant="body1" sx={{ marginTop: 2 }}>
                                    <strong>Notes:</strong>
                                </Typography>
                                <List>
                                    {appointmentData.providerNotes.map((note, index) => (
                                    <ListItem key={index}>
                                        <PlaylistAddCheckCircleIcon color="primary" />
                                        <Box sx={{ ml:2 }}>
                                        <Typography variant="subtitle1">{note}</Typography>
                                        </Box>                    
                                    </ListItem>
                                    ))}
                                </List> 
                            </>
                            ) : ''
                        }
                        

                        <Divider variant="middle" />

                        {!appointmentData.isComplete ? (                            
                            <Box sx={{ mb: 2, mt: 2 }}>  
                                <Grid container spacing={2} sx={{ marginTop: 4 }}>
                                    <Grid item xs={12} sm={4}>
                                    <Button fullWidth variant="contained" color="secondary">
                                        Complete Intake Forms
                                    </Button>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                    <Button fullWidth variant="contained" color="secondary">
                                        Sign Authorization
                                    </Button>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                    <Button fullWidth variant="contained" color="secondary">
                                        Generate Access Code
                                    </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                            ): (
                                <WriteReview onSubmitReview={() => {}} />
                            )
                        }

                    </Box>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
  );
};

export default AppointmentChecklistPage;
