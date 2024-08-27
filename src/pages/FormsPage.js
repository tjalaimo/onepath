import React, { useState } from 'react';
import { Box, Typography, TextField, Grid, Card, CardContent, List, ListItem, Divider, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EventIcon from '@mui/icons-material/Event';
import { useNavigate } from 'react-router-dom';

const formsData = [
  { 
    id: 1, 
    name: 'New Patient Form',
    type: 'newpatient',
    icon: <EventIcon color="primary" />,
    timestamp: '5 min ago', 
  },
  { id: 2, 
    name: 'Authorization Form',
    type: 'authorization',
    icon: <EventIcon color="primary" />,
    timestamp: '5 min ago', 
  },
  { 
    id: 3, 
    name: 'Consent Form',
    type: 'consent',
    icon: <EventIcon color="primary" />,
    timestamp: '5 min ago', },
];

const FormsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredForms = formsData.filter((form) =>
    form.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ pb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Forms
      </Typography>

      <TextField
        fullWidth
        placeholder="Search by form name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ marginBottom: 3 }}
      />

        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12}>
                <Card sx={{ marginBottom: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: 2, borderRadius: '12px' }}>
                <CardContent>
                    <List>
                        {filteredForms.map((form) => (
                            <Box key={form.id}>
                                <ListItem button component="a" onClick={ () => { navigate(`/provider/document/${form.type}`) }}>
                                    {form.icon}
                                    <Box sx={{ ml:2 }}>
                                    <Typography variant="subtitle1">{form.name}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {form.lastUpdate}
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
    </Box>
  );
};

export default FormsPage;