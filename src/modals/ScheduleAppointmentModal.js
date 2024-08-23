import React, { useState } from 'react';
import { Box, Button, Modal, Typography, TextField, Grid, Paper } from '@mui/material';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles for the calendar

const ScheduleAppointmentModal = ({ open, onClose, patient }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointmentDate, setAppointmentDate] = useState('');
  const [patientName, setPatientName] = useState(patient ? patient.name : '');
  const [patientDob, setPatientDob] = useState(patient ? patient.dob : '');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAppointmentDateChange = (event) => {
    setAppointmentDate(event.target.value);
  };

  const handleSchedule = () => {
    // Add logic to handle appointment scheduling here
    console.log('Appointment scheduled:', {
      patientName,
      patientDob,
      appointmentDate,
      selectedDate
    });
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ width: 500, bgcolor: 'background.paper', p: 4, mx: 'auto', mt: 10, borderRadius: 2 }}>
        <Typography variant="h6" mb={2}>Schedule Appointment</Typography>

        {/* Calendar Component */}
        <Box sx={{ mb: 2 }}>
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
          />
        </Box>

        <TextField
          label="Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Date of Birth"
          value={patientDob}
          onChange={(e) => setPatientDob(e.target.value)}
          type="date"
          fullWidth
          margin="normal"
        />

        <TextField
          label="Appointment Date and Time"
          type="datetime-local"
          value={appointmentDate}
          onChange={handleAppointmentDateChange}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
        />

        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button onClick={onClose} variant="outlined" sx={{ mr: 1 }}>
            Cancel
          </Button>
          <Button onClick={handleSchedule} variant="contained">
            Schedule
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ScheduleAppointmentModal;
