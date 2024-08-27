import React, { useState } from 'react';
import { TextField, Button, MenuItem, FormControl, InputLabel, Select, Box, Typography, Grid, Card, Modal, Snackbar } from '@mui/material';

const eventTypes = ['Doctor Appointment', 'Medication Refill', 'Other'];

const CreateEventModal = ({ open, onClose }) => {
  const [eventData, setEventData] = useState({
    name: '',
    type: 'Doctor Appointment',
    date: '',
    time: '',
    networks: [],
    users: []
  });

  const [toastMessage, setToastMessage] = useState(null);
  const [openToast, setOpenToast] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleCloseToast = () => {
    setOpenToast(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save event logic
    setToastMessage('Event Created!');
    setOpenToast(true);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ width: '90%', margin: 'auto', padding: 4, backgroundColor: 'white', mt: 8 }}>      
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
        <Snackbar open={openToast} autoHideDuration={3000} onClose={handleCloseToast} message={toastMessage} />
      </Box>
    </Modal>
  );
};

export default CreateEventModal;