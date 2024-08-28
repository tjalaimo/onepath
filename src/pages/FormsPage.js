import React, { useState } from 'react';
import { Box, Typography, TextField, Grid, Card, CardContent, List, ListItem, Divider, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import EventIcon from '@mui/icons-material/Event';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';

const formsData = [
  { 
    id: 1, 
    name: 'New Patient Form.pdf',
    type: 'newpatient',
    thumbnail: 'https://via.placeholder.com/150',
    link: '/pdf/registration.pdf',
    icon: <EventIcon color="primary" />,
    timestamp: '5 min ago', 
  },
  { id: 2, 
    name: 'Authorization Form.pdf',
    type: 'authorization',
    thumbnail: 'https://via.placeholder.com/150',
    link: '/pdf/authorization.pdf',
    icon: <EventIcon color="primary" />,
    timestamp: '5 min ago', 
  },
  { 
    id: 3, 
    name: 'Consent Form.pdf',
    type: 'consent',
    link: '/pdf/consent.pdf',
    thumbnail: 'https://via.placeholder.com/150',
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
                  {/*
                    TODO figure this out
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
                    */}
                    <Grid container spacing={2}>
                    {filteredForms.map((doc) => (
                      <Grid item xs={12} sm={6} md={4} lg={3} key={doc.id}>
                        <Card>
                          <img src={doc.thumbnail} alt={doc.name} style={{ width: '100%' }} />
                          <CardContent>
                            <Typography variant="h6">{doc.name}</Typography>
                            <Typography variant="body2" color="textSecondary">
                              Last Modified: {doc.lastModified}
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
                              <IconButton color="primary">
                                <EditIcon />
                              </IconButton>
                              <IconButton color="secondary">
                                <ShareIcon />
                              </IconButton>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
            </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FormsPage;