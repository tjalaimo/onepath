import React, { useState } from 'react';
import { Box, Typography, Avatar, Chip, Button, List, ListItem, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Card, CardContent, Divider, useMediaQuery } from '@mui/material';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import EmergencyShareIcon from '@mui/icons-material/EmergencyShare';
import VideocamIcon from '@mui/icons-material/Videocam';
import HealingIcon from '@mui/icons-material/Healing';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import moment from 'moment';

const PatientDetails = () => {
  const [notes, setNotes] = useState(['Patient is improving']);
  const [openNoteModal, setOpenNoteModal] = useState(false);
  const [newNote, setNewNote] = useState('');
  const isXSmallScreen = useMediaQuery((theme) =>  theme.breakpoints.down('md'));

  const handleAddNote = () => {
    setNotes([...notes, newNote]);
    setNewNote('');
    setOpenNoteModal(false);
  };

  const patient = {
    name: 'John Doe',
    dob: '1990-01-01',
    illnesses: ['Diabetes', 'Hypertension'],
    medications: ['Insulin', 'Lisinopril'],
    appointments: [
      { date: '2024-08-01', type: 'routine', reason: 'Check-up', notes: 'No medication prescribed' },
      { date: '2024-07-01', type: 'blood', reason: 'Blood Work', notes: 'Needed blood work for lingering fatigue, ended up fine' },
      { date: '2024-06-01', type: 'emergency', reason: 'Broken Arm', notes: 'Put a cast on and sent on his way' },
      { date: '2024-06-01', type: 'telehealth', reason: 'Video Conference', notes: 'Discuss a few symptoms via video call' },
    ]
  };

  const getAppointmentIcon = (reason) => {
    if (reason === 'emergency') {
        return <EmergencyShareIcon />
    } else if (reason === 'blood') {
        return <BloodtypeIcon />
    } else if (reason === 'telehealth') {
        return <VideocamIcon />
    } else {
        return <HealingIcon />
    }
  }

  return (
    <Grid container spacing={2} justifyContent="center">
        <Grid item xs={10}>
            <Card sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: 2, borderRadius: '12px' }}>
                <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                        <Avatar sx={{ width: 56, height: 56, mr: 2 }}>{patient.name[0]}</Avatar>
                        <Box>
                            <Typography variant="h5">{patient.name}</Typography>
                            <Typography variant="subtitle1" sx={{ }}>{moment(patient.dob).format('MMMM DD YYYY')}</Typography>
                        </Box>
                        <Box sx={{ marginLeft: 'auto' }}>
                            <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
                                <ChatBubbleOutlineIcon sx={{ mr: 1 }} />
                                {!isXSmallScreen ? 'Message' : ''}
                            </Button>
                            <Button variant="outlined" color="secondary">
                                <CalendarMonthIcon sx={{ }} />
                                {!isXSmallScreen ? 'Schedule' : ''}
                            </Button>
                        </Box>
                    </Box>

                    <Divider variant="middle" />

                    <Box sx={{ mb: 2, mt: 2 }}>
                    <Typography variant="h6" sx={{ mb: 2 }}>Illnesses</Typography>
                        {patient.illnesses.map((illness) => (
                            <Chip key={illness} label={illness} sx={{ mr: 1, mb: 1 }} />
                        ))}
                    </Box>

                    <Divider variant="middle" />

                    <Box sx={{ mt:2, mb: 2 }}>
                        <Typography variant="h6" sx={{ mb: 2 }}>Medications</Typography>
                        {patient.medications.map((medication) => (
                            <Chip key={medication} label={medication} color="primary" sx={{ mr: 1, mb: 1 }} />
                        ))}
                    </Box>

                    <Divider variant="middle" />

                    <Box sx={{ mt:2, mb: 2 }}>
                        <Typography variant="h6" sx={{ mb: 2 }}>Patient Notes</Typography>
                        <List>
                            {notes.map((note, index) => (
                                <ListItem key={index}>{note}</ListItem>                              
                            ))}
                        </List>
                        <Button variant="contained" onClick={() => setOpenNoteModal(true)}>Add Note</Button>
                    </Box>

                    <Divider variant="middle" />

                    <Box sx={{ mt:2, mb: 2 }}>
                        <Typography variant="h6" sx={{  mb: 2 }}>Previous Appointments</Typography>
                        
                        <List>
                            {patient.appointments.map((appointment, index) => (
                                <ListItem key={index}>                                    
                                    {getAppointmentIcon(appointment.type)}
                                    <Box sx={{ ml:2 }}>
                                    <Typography variant="subtitle1">{appointment.notes}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {appointment.date}
                                    </Typography>
                                    </Box>
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    <Dialog open={openNoteModal} onClose={() => setOpenNoteModal(false)}>
                        <DialogTitle>Add Note</DialogTitle>
                        <DialogContent>
                        <TextField
                            label="Note"
                            fullWidth
                            value={newNote}
                            onChange={(e) => setNewNote(e.target.value)}
                        />
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={() => setOpenNoteModal(false)}>Cancel</Button>
                        <Button onClick={handleAddNote} variant="contained">Add</Button>
                        </DialogActions>
                    </Dialog>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
  );
};

export default PatientDetails;