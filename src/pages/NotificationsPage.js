import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Card, CardContent, CardMedia, Typography, Grid, Box, Divider } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import GroupIcon from '@mui/icons-material/Group';
import MessageIcon from '@mui/icons-material/Message';

const notifications = [
  {
    id: 1,
    type: 'event',
    message: 'You have a doctor\'s appointment tomorrow.',
    icon: <EventIcon color="primary" />,
    timestamp: '5 min ago',
  },
  {
    id: 2,
    type: 'group',
    message: 'Bob Johnson requested to join your group.',
    icon: <GroupIcon color="secondary" />,
    timestamp: '1 hour ago',
  },
  {
    id: 3,
    type: 'message',
    message: 'Alice Smith sent you a new message.',
    icon: <MessageIcon color="action" />,
    timestamp: '3 hours ago',
  },
];

const NotificationsPage = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <Card sx={{ marginBottom: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: 2, borderRadius: '12px' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Notifications
            </Typography>
            <List>
              {notifications.map((notification, index) => (
                <Box key={index}>
                  <ListItem button component="a" href={'#'}>
                    {notification.icon}
                    <Box sx={{ ml:2 }}>
                      <Typography variant="subtitle1">{notification.message}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {notification.timestamp}
                      </Typography>
                    </Box>
                  </ListItem>
                  <Divider variant="middle" component="li" />
                </Box>                
              ))}
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default NotificationsPage;