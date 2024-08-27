import React, { useState } from 'react';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select, Box, Typography, Grid, Card } from '@mui/material';

const eventTypes = ['Doctor Appointment', 'Medication Refill', 'Other'];

const EventDetails = ({ event }) => {
  const [eventData, setEventData] = useState({
    name: event?.name || '',
    type: event?.type || 'Doctor Appointment',
    date: event?.date || '',
    time: event?.time || '',
    networks: event?.networks || [],
    users: event?.users || []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save event logic
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
          <Card sx={{ marginBottom: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: 2, borderRadius: '12px' }}>          
            <Box sx={{ paddingTop: 4 }}>
              <Typography variant="h4" gutterBottom>
                Event Details
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, mx: 'auto' }}>
                <TextField
                  label="Event Name"
                  name="name"
                  fullWidth
                  margin="normal"
                  value={eventData.name}
                  onChange={handleInputChange}
                  required
                />
                <FormControl fullWidth margin="normal">
                  <InputLabel>Event Type</InputLabel>
                  <Select
                    name="type"
                    value={eventData.type}
                    onChange={handleInputChange}
                  >
                    {eventTypes.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  label="Date"
                  type="date"
                  name="date"
                  fullWidth
                  margin="normal"
                  value={eventData.date}
                  onChange={handleInputChange}
                  required
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  label="Time"
                  type="time"
                  name="time"
                  fullWidth
                  margin="normal"
                  value={eventData.time}
                  onChange={handleInputChange}
                  required
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  label="Networks"
                  name="networks"
                  fullWidth
                  margin="normal"
                  value={eventData.networks.join(', ')}
                  onChange={(e) => setEventData({ ...eventData, networks: e.target.value.split(', ') })}
                  helperText="Add networks separated by commas"
                />
                <TextField
                  label="Users"
                  name="users"
                  fullWidth
                  margin="normal"
                  value={eventData.users.join(', ')}
                  onChange={(e) => setEventData({ ...eventData, users: e.target.value.split(', ') })}
                  helperText="Add users separated by commas"
                />
                <Button type="submit" variant="contained" color="primary">
                  Save Changes
                </Button>
              </Box>
            </Box>
          </Card>
      </Grid>
    </Grid>
  );
};

export default EventDetails;