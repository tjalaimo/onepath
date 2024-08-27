import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { Button, Box, Paper, Grid, useMediaQuery } from '@mui/material';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useNavigate } from 'react-router-dom';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Doctor Appointment',
    start: new Date(2024, 8, 25, 10, 0),
    end: new Date(2024, 8, 25, 11, 0),
    allDay: false
  },
  {
    title: 'Medication Refill',
    start: new Date(2024, 8, 26, 12, 0),
    end: new Date(2024, 8, 26, 13, 0),
    allDay: false
  }
];

const CalendarPage = () => {
  const isSmallScreen = useMediaQuery((theme) =>  theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [view, setView] = useState(isSmallScreen ? 'week' : 'month');

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <Paper 
          sx={{ 
            padding: 3, 
            marginBottom: 2, 
            borderRadius: '12px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
          }}
        >
          <Box sx={{ paddingTop: 4 }}>
            <Button variant="contained" color="primary" sx={{ marginBottom: 2 }} onClick={() => { navigate('/event'); }}>
              Add New Event
            </Button>
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              views={['month', 'week', 'day']}
              defaultView={view}
              onView={(newView) => setView(newView)}
              style={{ height: 600 }}
            />
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CalendarPage;