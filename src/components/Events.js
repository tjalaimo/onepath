import React from 'react';
import { Box, Typography, Grid, ListItem, ListItemText, Divider } from '@mui/material';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import { useNavigate } from 'react-router-dom';

const events = [
  { id: 1, type:'appointment', title: 'Doctor Appointment', description: 'Take mom to dr', timestamp: '2024-09-01', icon: <LocalHospitalIcon color="primary" /> },
  { id: 2, type:'medicationrefill', title: 'Medication Refill', description: 'Dad refill meds', timestamp: '2024-09-25', icon: <LocalPharmacyIcon color="primary" /> },  
  { id: 3, type:'vaccine', title: 'Flu Shot', description: 'Family needs flu shot', timestamp: '2024-09-25', icon: <VaccinesIcon color="primary" /> },
  { id: 4, type:'test', title: 'Blood Test', description: 'Tj to quest for blood test', timestamp: '2024-09-25', icon: <BloodtypeIcon color="primary" /> },
  { id: 5, type:'appointment', title: 'Doctor Appointment', description: 'Vinny 1 month', timestamp: '2024-09-24', icon: <LocalHospitalIcon color="primary" /> },
];

const getEventLink = (id, type) => {
  if (type === 'appointment') {
    return `/appointmentchecklist/${id}`;
  } else {
    return '#'
  }
}

const Events = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Upcoming Events
      </Typography>

        {events.map((event, index) => (
          <Box key={index}>
            <ListItem button component="a" onClick={() => navigate(getEventLink(event.id, event.type))}>
              {event.icon}
              <Box sx={{ ml:2 }}>                      
                <ListItemText
                  primary={event.title}
                  secondary={
                    <>
                      <Typography variant="body2" color="textSecondary">
                        {event.description}
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        {event.timestamp}
                      </Typography>
                    </>
                  }
                />
              </Box>
            </ListItem>
            <Divider variant="middle" />
          </Box>
        ))}
   
    </div>
  );
};

export default Events;
