import React from 'react';
import { Avatar, Box, Typography, List, ListItem, ListItemAvatar, ListItemText, Grid, Paper } from '@mui/material';
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
];

const MessagesPage = () => {
  const navigate = useNavigate();

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
              {conversations.map((conversation) => (
                <ListItem
                  key={conversation.id}
                  button
                  onClick={() => navigate(`/messages/${conversation.id}`)} // Navigate to conversation page
                  sx={{ marginBottom: 2, borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                >
                  <ListItemAvatar>
                    <Avatar src={conversation.avatar} alt={conversation.name} />
                  </ListItemAvatar>
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
                </ListItem>
              ))}
            </List>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MessagesPage;