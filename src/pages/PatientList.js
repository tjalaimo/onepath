import React, { useState } from 'react';
import { Avatar, List, ListItem, Card, CardContent, Typography, Divider, Box, Grid, Pagination, Chip, Button, TextField } from '@mui/material';
import moment from 'moment';
import ScheduleAppointmentModal from '../modals/ScheduleAppointmentModal';
import { useNavigate } from 'react-router-dom';

const PatientList = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); 

  // List of patients with example illnesses and medications
  const patients = [
    { id: 1, name: 'John Doe', dob: new Date('1990-09-02'), illnesses: ['Diabetes', 'Asthma', 'Obesity'], medications: ['Metformin', 'Advil'] },
    { id: 2, name: 'Jane Smith', dob: new Date('1985-05-15'), illnesses: ['Asthma'], medications: ['Albuterol', 'Lamictal', 'Prednisone'] },
    { id: 3, name: 'Robert Johnson', dob: new Date('1975-03-10'), illnesses: ['Hypertension'], medications: ['Lisinopril', 'Other'] },
    { id: 4, name: 'Emily Davis', dob: new Date('1992-12-08'), illnesses: ['Migraines'], medications: ['Sumatriptan'] },
    { id: 5, name: 'Michael Brown', dob: new Date('1988-06-22'), illnesses: ['Depression', 'Anxiety'], medications: ['Sertraline', 'Hammer'] },
    { id: 6, name: 'Sarah Wilson', dob: new Date('1995-09-14'), illnesses: ['Anxiety'], medications: ['Buspirone'] },
    { id: 7, name: 'David Lee', dob: new Date('1993-04-30'), illnesses: ['Hyperthyroidism'], medications: ['Methimazole'] },
    { id: 8, name: 'Laura Taylor', dob: new Date('1987-07-11'), illnesses: ['Arthritis'], medications: ['Ibuprofen'] },
    { id: 9, name: 'Chris Evans', dob: new Date('1980-02-18'), illnesses: ['COPD'], medications: ['Tiotropium'] },
    { id: 10, name: 'Megan Anderson', dob: new Date('1991-11-25'), illnesses: ['Obesity'], medications: ['Orlistat'] }
  ];

  const itemsPerPage = 5;

  // Search handler
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Filtering based on search term
  const filteredPatients = patients.filter((patient) => {
    const formattedDob = moment(patient.dob).format('MMMM DD YYYY');
    return (
      patient.name.toLowerCase().includes(searchTerm) ||
      formattedDob.toLowerCase().includes(searchTerm) ||
      patient.illnesses.some((illness) => illness.toLowerCase().includes(searchTerm)) ||
      patient.medications.some((medication) => medication.toLowerCase().includes(searchTerm))
    );
  });

  // Pagination logic for filtered results
  const paginatedPatients = filteredPatients.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const [openScheduleAppointmentModal, setOpenScheduleAppointmentModal] = useState(false);

  const handleOpenScheduleAppointmentModal = () => {
    setOpenScheduleAppointmentModal(true);
  };

  // Function to close the modal
  const handleCloseScheduleAppointmentModal = () => {
    setOpenScheduleAppointmentModal(false);
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>   

        {/* Search Bar */}
        <TextField
            label="Search by name, birthdate, illness, or medication"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{ mb: 3 }}
        />

        <List>
            {paginatedPatients.map((patient) => (
                <Card sx={{ marginBottom: 4 }}>
                    <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>                            
                            <Avatar
                                alt={patient.name}
                                src={'https://i.pravatar.cc/300?img=' + patient.id}
                                sx={{ width: 100, height: 100, marginRight: 2 }}
                            />
                            <Box>
                                <Typography variant="h5">{patient.name}</Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {moment(patient.dob).format('MMMM DD YYYY')}
                                </Typography>
                            </Box>
                        </Box>

                        <Divider variant="middle" />

                        <Box sx={{ mt: 1, mb: 2, gap: 1 }}>
                            <Typography variant="h6" gutterBottom>Illnesses:</Typography>                            
                            {patient.illnesses.map((illness, index) => (
                                <Chip key={index} label={illness} color="primary" sx={{mr: 2}} />
                            ))}
                        </Box>

                        <Divider variant="middle" />

                        <Box sx={{ mt: 1, mb: 2, gap: 1 }}>
                            <Typography variant="h6">Medications</Typography>
                            {patient.medications.map((medication, index) => (
                                <Chip key={index} label={medication} color="secondary" sx={{mr: 2}}  />
                            ))}
                        </Box>

                        <Divider variant="middle" />

                        <Box sx={{ mt: 2, width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <Button variant="outlined" onClick={ () => { navigate(`/provider/patient/${patient.id}`) }}>View</Button>
                            <Button variant="outlined" onClick={() => navigate(`/messages/${patient.id}`)}>Contact</Button>
                            <Button variant="outlined" onClick={handleOpenScheduleAppointmentModal}>Schedule Appointment</Button>
                        </Box>
                    </CardContent>
                </Card>
            ))}
        </List>                

        {/* Pagination */}
        <Pagination
            count={Math.ceil(filteredPatients.length / itemsPerPage)}
            page={page}
            onChange={handlePageChange}
            sx={{ mt: 2 }}
        />

            <ScheduleAppointmentModal open={openScheduleAppointmentModal} onClose={handleCloseScheduleAppointmentModal} />
      </Grid>
    </Grid>
  );
};

export default PatientList;
