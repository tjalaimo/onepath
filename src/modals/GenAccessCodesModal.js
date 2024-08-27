import React, { useState } from 'react';
import { Modal, Tabs, Tab, Box, TextField, Button, List, ListItem, ListItemAvatar, Avatar, ListItemText, Pagination, Snackbar } from '@mui/material';

const GenAccessCodesModal = ({ open, onClose }) => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [toastMessage, setToastMessage] = useState(null);
  const [openToast, setOpenToast] = useState(false);

  const handleRequestAccessCode = () => {
    setToastMessage('A code request has been sent');
    setOpenToast(true);
    onClose();
  };

  const handleCloseToast = () => {
    setOpenToast(false);
  };

  // Expanded patient list with more entries for testing
  const providers = [
    { id: 1, name: 'John Doe', specialty: 'Cardiology' },
    { id: 2, name: 'Jane Smith', specialty: 'Urology' },
    { id: 3, name: 'Robert Johnson', specialty: 'OBGYN' },
    { id: 4, name: 'Emily Davis', specialty: 'Neurologies' },
    { id: 5, name: 'Michael Brown', specialty: 'General' },
    { id: 6, name: 'Sarah Wilson', specialty: 'Cardiology' },
    { id: 7, name: 'David Lee', specialty: 'Surgery' },
    { id: 8, name: 'Laura Taylor', specialty: 'Veterinarian' },
    { id: 9, name: 'Chris Evans', specialty: 'Dermatologist' },
    { id: 10, name: 'Megan Anderson', specialty: 'Veterinarian' },
    { id: 11, name: 'Jessica Hall', specialty: 'General' },
    { id: 12, name: 'Daniel Miller', specialty: 'OBGYN' }
  ];

  // Filter patients based on search term
  const filteredProviders = providers.filter(provider =>
    provider.name.toLowerCase().includes(searchTerm.toLowerCase())
    ||
    provider.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedProviders = filteredProviders.slice((page - 1) * 5, page * 5);

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ width: '90%', margin: 'auto', padding: 4, backgroundColor: 'white', mt: 8 }}>
          <Tab label="Generate Access Code" />
          <Box sx={{ mt: 2 }}>
            {/* Search Field */}
            <TextField
              label="Search Providers"
              variant="outlined"
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ mb: 2 }}
            />
            
            <List>
              {paginatedProviders.map((provider) => (
                <ListItem key={provider.id}>
                  <ListItemAvatar>
                    <Avatar>{provider.name[0]}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={provider.name} secondary={provider.specialty} />
                  <Button variant="contained" onClick={handleRequestAccessCode}>Generate Code</Button>
                </ListItem>
              ))}
            </List>
            <Pagination
              count={Math.ceil(filteredProviders.length / 5)}
              page={page}
              onChange={(e, value) => setPage(value)}
              sx={{ mt: 2 }}
            />
          </Box>
        

        <Snackbar open={openToast} autoHideDuration={3000} onClose={handleCloseToast} message={toastMessage} />
      </Box>
    </Modal>
  );
};

export default GenAccessCodesModal;