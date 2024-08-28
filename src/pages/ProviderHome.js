import React, { useState, useEffect } from 'react';
import { Box, Grid, Card, CardContent, Typography, Button, useMediaQuery } from '@mui/material';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import PostAddIcon from '@mui/icons-material/PostAdd';
import KeyIcon from '@mui/icons-material/Key';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { useTheme  } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import Events from '../components/Events';
import LeadsAndRequests from '../components/Leads';
import ProviderAccessCodesModal from '../modals/ProviderAccessCodesModal';
import CreatePostModal from '../modals/CreatePostModal';
import ScheduleAppointmentModal from '../modals/ScheduleAppointmentModal';

const localizer = momentLocalizer(moment);

const ProviderHome = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { user } = useAuth(); 
  const navigate = useNavigate();  

  useEffect(() => {
    if (user && user.role === 'provider') {
      navigate('/provider/home');
    }
  }, [user, navigate]);

  // Sample appointments for the calendar
  const appointments = [
    { title: 'John Doe - Checkup', start: new Date(2024, 7, 21, 10, 0), end: new Date(2024, 7, 21, 11, 0) },
    { title: 'Jane Smith - Consultation', start: new Date(2024, 7, 22, 14, 0), end: new Date(2024, 7, 22, 15, 0) },
    { title: 'Mark Williams - Follow-up', start: new Date(2024, 7, 23, 9, 0), end: new Date(2024, 7, 23, 10, 0) }
  ];

  const [openAccessCodeModal, setOpenAccessCodeModal] = useState(false);

  const handleOpenAccessCodeModal = () => {
    setOpenAccessCodeModal(true);
  };

  // Function to close the modal
  const handleCloseAccessCodeModal = () => {
    setOpenAccessCodeModal(false);
  };

  const [openCreatePostModal, setOpenCreatePostModal] = useState(false);

  const handleOpenCreatePostModal = () => {
    setOpenCreatePostModal(true);
  };

  // Function to close the modal
  const handleCloseCreatePostModal = () => {
    setOpenCreatePostModal(false);
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
    <Box sx={{ mb: 4 }}>
      
      <Grid container spacing={3}>

        {/* Action Items */}
        <Grid item xs={12}>
            <Card>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                    Action Items
                    </Typography>

                    <Button variant="contained" color="primary" onClick={handleOpenCreatePostModal}>
                        <PostAddIcon />{!isMobile ? 'Post' : ''}
                    </Button>
                    <Button variant="contained" color="secondary" sx={{ marginLeft: 1 }} onClick={handleOpenAccessCodeModal}>
                        <KeyIcon />{!isMobile ? 'Access Code' : ''}
                    </Button>
                    <Button variant="contained" color="info" sx={{ marginLeft: 1 }} onClick={handleOpenScheduleAppointmentModal} >
                        <CalendarMonthIcon />{!isMobile ? 'Schedule Appointment' : ''}
                    </Button>
                    <Button variant="contained" color="success" sx={{ marginLeft: 1 }} onClick={ () => { navigate('/provider/patientlist') }}>
                        <DirectionsRunIcon />{!isMobile ? 'Patients' : ''}
                    </Button>
                </CardContent>
            </Card>
        </Grid>

        {/* Incoming Requests & Leads */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <LeadsAndRequests />
            </CardContent>
          </Card>
        </Grid>

        {/* Upcoming Events (Weekly Calendar View) */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Events />
            </CardContent>
          </Card>
        </Grid>

        {/* Upcoming Events (Weekly Calendar View) */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Office Calendar
              </Typography>
              <div style={{ }}>
                <Calendar
                    localizer={localizer}
                    events={appointments}
                    startAccessor="start"
                    endAccessor="end"
                    defaultView={'week'}
                    style={{ height: 600 }}
                />
              </div>
            </CardContent>
          </Card>
        </Grid>

      </Grid>

      <ProviderAccessCodesModal open={openAccessCodeModal} onClose={handleCloseAccessCodeModal} />
      <CreatePostModal open={openCreatePostModal} onClose={handleCloseCreatePostModal} />
      <ScheduleAppointmentModal open={openScheduleAppointmentModal} onClose={handleCloseScheduleAppointmentModal} />
    </Box>
  );
};

export default ProviderHome;
