import React, { useState } from 'react';
import { Avatar, Box, Card, CardContent, Typography, Rating, List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import ScheduleAppointmentModal from '../modals/ScheduleAppointmentModal';
import { useNavigate } from 'react-router-dom';

const ProviderCard = ({ provider, showView, showReviews }) => {
    const navigate = useNavigate(); 
    const [openScheduleAppointmentModal, setOpenScheduleAppointmentModal] = useState(false);
  
    const handleOpenScheduleAppointmentModal = () => {
      setOpenScheduleAppointmentModal(true);
    };
  
    // Function to close the modal
    const handleCloseScheduleAppointmentModal = () => {
      setOpenScheduleAppointmentModal(false);
    };
  
    return (
      <Card sx={{ }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <Avatar
              alt={provider.name}
              src={provider.profilePicture}
              sx={{ width: 100, height: 100, marginRight: 2 }}
            />
            <Box>
              <Typography variant="h5">{provider.name}</Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {provider.specialty}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Rating value={provider.rating} precision={0.1} readOnly />
                <Typography variant="body2" sx={{ marginLeft: 1 }}>
                  ({provider.reviewCount})
                </Typography>
              </Box>
            </Box>
          </Box>
  
          <Typography variant="body1" gutterBottom>
            {provider.description}
          </Typography>
  
          {showReviews ? (
              <>
                <Divider sx={{ marginY: 2 }} />
      
                <Typography variant="h6" gutterBottom>
                  Reviews:
                </Typography>

                <List>
                  {provider.reviews.map((review) => (
                    <ListItem key={review.id} disablePadding>
                      <ListItemText
                        primary={`"${review.content}"`}
                        secondary={`- ${review.reviewer}`}
                      />
                    </ListItem>
                  ))}
                </List>
              </>
            ) : ''
          }
          
  
          <Divider sx={{ marginY: 2 }} />
  
          <Box sx={{ mt: 2, width: '100%', display: 'flex', justifyContent: 'space-between' }}>
              {showView ? <Button variant="outlined" onClick={ () => { navigate(`/provider/profile/${provider.id}`) }}>View</Button> : ''}
              <Button variant="outlined" onClick={() => navigate(`/messages/${provider.id}`)}>Contact</Button>
              <Button variant="outlined" onClick={handleOpenScheduleAppointmentModal}>Schedule Appointment</Button>
          </Box>
        </CardContent>
        <ScheduleAppointmentModal open={openScheduleAppointmentModal} onClose={handleCloseScheduleAppointmentModal} />     
      </Card>
    );
  };

  export default ProviderCard;