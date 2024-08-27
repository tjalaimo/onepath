import React from 'react';
import { Avatar, Box, Typography, List, ListItem, ListItemAvatar, ListItemText, Grid, Card, CardContent, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const conversations = [
  {
    id: 1,
    name: 'Alice Smith',
    avatar: 'https://i.pravatar.cc/150?img=1',
    lastMessage: 'Hey! How are you?',
    timestamp: '2 min ago',
  },
  {
    id: 2,
    name: 'Bob Johnson',
    avatar: 'https://i.pravatar.cc/150?img=2',
    lastMessage: 'Don\'t forget the meeting tomorrow!',
    timestamp: '1 hour ago',
  },
  {
    id: 3,
    name: 'Dr Smith',
    avatar: 'https://i.pravatar.cc/150?img=3',
    lastMessage: 'Thank you for following up, lets...',
    timestamp: '4 hour ago',
  },
  {
    id: 4,
    name: 'Fred Baker',
    avatar: 'https://i.pravatar.cc/150?img=4',
    lastMessage: 'Would you like to connect?',
    timestamp: '1 day ago',
  },
  {
    id: 5,
    name: 'Dan Stevenson',
    avatar: 'https://i.pravatar.cc/150?img=5',
    lastMessage: 'Hi friend - lets share workouts!',
    timestamp: '2 days ago',
  },
];

const MessagesPage = () => {
  const navigate = useNavigate();

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <Card sx={{ marginBottom: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: 2, borderRadius: '12px' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Messages
            </Typography>
            <List>
              {conversations.map((conversation, index) => (
                <Box key={index}>
                  <ListItem button component="a" onClick={() => navigate(`/messages/${conversation.id}`)}>
                    <Avatar src={conversation.avatar} alt={conversation.name} />
                    <Box sx={{ ml:2 }}>                      
                      <ListItemText
                        primary={conversation.name}
                        secondary={
                          <>
                            <Typography variant="body2" color="textSecondary">
                              {conversation.lastMessage}
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                              {conversation.timestamp}
                            </Typography>
                          </>
                        }
                      />
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

export default MessagesPage;