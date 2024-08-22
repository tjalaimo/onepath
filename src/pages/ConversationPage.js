import React, { useState } from 'react';
import { Box, Typography, Avatar, TextField, Grid, Paper, IconButton, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const initialMessages = [
  { id: 1, user: 'Alice Smith', avatar: 'https://i.pravatar.cc/150?img=1', message: 'Hey! How are you?', isOwn: false },
  { id: 2, user: 'You', avatar: 'https://i.pravatar.cc/150?img=3', message: 'I am good! How about you?', isOwn: true },
];

const ConversationPage = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        user: 'You',
        avatar: 'https://i.pravatar.cc/150?img=3',
        message: newMessage,
        isOwn: true,
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

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
            <Typography variant="h6" gutterBottom>
              Alice Smith
            </Typography>
            <List sx={{ marginBottom: 2 }}>
              {messages.map((msg) => (
                <ListItem key={msg.id} sx={{ justifyContent: msg.isOwn ? 'flex-end' : 'flex-start' }}>
                  <ListItemAvatar>
                    <Avatar src={msg.avatar} alt={msg.user} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={msg.user}
                    secondary={
                      <Typography variant="body2" sx={{ background: msg.isOwn ? '#e0f7fa' : '#f1f1f1', padding: 1, borderRadius: '10px' }}>
                        {msg.message}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                label="Type a message"
                fullWidth
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                sx={{ marginRight: 2 }}
              />
              <IconButton color="primary" onClick={handleSendMessage}>
                <SendIcon />
              </IconButton>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ConversationPage;