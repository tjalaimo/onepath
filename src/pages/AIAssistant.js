import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Card, CardContent } from '@mui/material';
import axios from 'axios';

const AIAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleMessageSend = async () => {
    const newMessage = { text: userInput, sender: 'user' };
    setMessages([...messages, newMessage]);

    // Call API for AI Response (use Azure Health Bot or OpenAI)
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      prompt: userInput,
      max_tokens: 100,
      model: 'text-davinci-003',
    });

    const aiMessage = { text: response.data.choices[0].text, sender: 'ai' };
    setMessages([...messages, newMessage, aiMessage]);
    setUserInput('');
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        AI Assistant
      </Typography>

      <Card sx={{ marginBottom: 2 }}>
        <CardContent>
          <Typography variant="h6">Conversation</Typography>
          <Box sx={{ maxHeight: 300, overflowY: 'auto' }}>
            {messages.map((message, index) => (
              <Box key={index} sx={{ textAlign: message.sender === 'user' ? 'right' : 'left' }}>
                <Typography variant="body1">{message.text}</Typography>
              </Box>
            ))}
          </Box>
        </CardContent>
      </Card>

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Type a message..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleMessageSend}>
        Send
      </Button>
    </Box>
  );
};

export default AIAssistant;
