import React, { useState } from 'react';
import { Modal, Tabs, Tab, Box, TextField, Button, List, ListItem, ListItemAvatar, Avatar, ListItemText, Pagination, Snackbar } from '@mui/material';

const AccessCodesModal = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [toastMessage, setToastMessage] = useState(null);
  const [openToast, setOpenToast] = useState(false);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleRequestAccessCode = () => {
    setToastMessage('A code request has been sent');
    setOpenToast(true);
    onClose();
  };

  const handleVerifyAccessCode = () => {
    setToastMessage('Access code verified');
    setOpenToast(true);
    onClose();
  };

  const handleCloseToast = () => {
    setOpenToast(false);
  };

  // Expanded patient list with more entries for testing
  const patients = [
    { id: 1, name: 'John Doe', dob: '1990-01-01' },
    { id: 2, name: 'Jane Smith', dob: '1985-05-15' },
    { id: 3, name: 'Robert Johnson', dob: '1975-03-10' },
    { id: 4, name: 'Emily Davis', dob: '1992-12-08' },
    { id: 5, name: 'Michael Brown', dob: '1988-06-22' },
    { id: 6, name: 'Sarah Wilson', dob: '1995-09-14' },
    { id: 7, name: 'David Lee', dob: '1993-04-30' },
    { id: 8, name: 'Laura Taylor', dob: '1987-07-11' },
    { id: 9, name: 'Chris Evans', dob: '1980-02-18' },
    { id: 10, name: 'Megan Anderson', dob: '1991-11-25' },
    { id: 11, name: 'Jessica Hall', dob: '1984-03-02' },
    { id: 12, name: 'Daniel Miller', dob: '1990-07-19' }
  ];

  // Filter patients based on search term
  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedPatients = filteredPatients.slice((page - 1) * 5, page * 5);

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ width: '90%', margin: 'auto', padding: 4, backgroundColor: 'white', mt: 8 }}>
        <Tabs value={activeTab} onChange={handleTabChange} variant="fullWidth">
          <Tab label="Request Access Code" />
          <Tab label="Verify Access Code" />
        </Tabs>

        {activeTab === 0 && (
          <Box sx={{ mt: 2 }}>
            {/* Search Field */}
            <TextField
              label="Search Patients"
              variant="outlined"
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ mb: 2 }}
            />
            
            <List>
              {paginatedPatients.map((patient) => (
                <ListItem key={patient.id}>
                  <ListItemAvatar>
                    <Avatar>{patient.name[0]}</Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={patient.name} secondary={patient.dob} />
                  <Button variant="contained" onClick={handleRequestAccessCode}>Request Code</Button>
                </ListItem>
              ))}
            </List>
            <Pagination
              count={Math.ceil(filteredPatients.length / 5)}
              page={page}
              onChange={(e, value) => setPage(value)}
              sx={{ mt: 2 }}
            />
          </Box>
        )}

        {activeTab === 1 && (
          <Box sx={{ mt: 2 }}>
            <TextField label="Full Name" fullWidth sx={{ mb: 2 }} />
            <TextField label="Date of Birth" fullWidth sx={{ mb: 2 }} />
            <TextField label="Access Code" fullWidth sx={{ mb: 2 }} />
            <Button variant="contained" onClick={handleVerifyAccessCode}>Verify Access Code</Button>
          </Box>
        )}

        <Snackbar open={openToast} autoHideDuration={3000} onClose={handleCloseToast} message={toastMessage} />
      </Box>
    </Modal>
  );
};

export default AccessCodesModal;