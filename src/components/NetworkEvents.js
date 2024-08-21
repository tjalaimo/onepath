import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

const events = [
  { title: 'Doctor Appointment', date: '2024-09-01' },
  { title: 'Medication Refill', date: '2024-08-25' }
];

const NetworkEvents = () => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Upcoming Events
      </Typography>
      <Grid container spacing={2}>
        {events.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent sx={{ alignItems: 'center' }}>
                <Box>
                  <Typography variant="body1">{event.title}</Typography>
                </Box>
                <Box>
                  <Typography variant="body2">{event.date}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default NetworkEvents;
