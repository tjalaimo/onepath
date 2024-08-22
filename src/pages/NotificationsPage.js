import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Box, Typography, Grid, Paper } from '@mui/material';
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
      <Grid item xs={10}>
        <Paper 
          sx={{ 
            padding: 3, 
            marginBottom: 2, 
            borderRadius: '12px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
          }}
        >
          <Box sx={{ padding: 3 }}>
            <List>
              {notifications.map((notification) => (
                <ListItem key={notification.id} button sx={{ marginBottom: 2, borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                  <ListItemIcon>{notification.icon}</ListItemIcon>
                  <ListItemText
                    primary={notification.message}
                    secondary={
                      <Typography variant="caption" color="textSecondary">
                        {notification.timestamp}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default NotificationsPage;