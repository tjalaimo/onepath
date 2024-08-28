import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Typography, ListItem, ListItemText, Divider, Pagination, TextField, InputAdornment } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyIcon from '@mui/icons-material/Key';
import SearchIcon from '@mui/icons-material/Search';

const LeadsAndRequests = () => {
  const navigate = useNavigate();
  
  const handleEventClick = (id, type) => {
    console.log(id, type);
    if (type === 'Appointment Request') {
      navigate(`/appointmentchecklist/${id}`);
    } else if (type === 'Message Request') {
      navigate(`/messages/${id}`);
    }else {
      return;
    }
  }
  const allRequests = [
    { id: 1, user: 'John Doe', type: 'Message Request', timestamp: '2024-09-01', description: 'Asking about flu symptoms.', icon: <MessageIcon color="primary" />},
    { id: 2, user: 'Jane Smith', type: 'Appointment Request', timestamp: '2024-08-31', description: 'Requesting a general checkup.', icon: <CalendarMonthIcon color="primary" /> },
    { id: 3, user: 'Mark Williams', type: 'Access Code', timestamp: '2024-08-31', description: 'Access code sent by Mark Williams.', icon: <KeyIcon color="primary" /> },
    { id: 4, user: 'Alice Johnson', type: 'Appointment Request', timestamp: '2024-08-30', description: 'Wants to discuss blood pressure.', icon: <CalendarMonthIcon color="primary" /> },
    { id: 5, user: 'Tom Harris', type: 'Message Request', timestamp: '2024-08-30', description: 'Follow-up on recent surgery.', icon: <MessageIcon color="primary" /> },
    { id: 6, user: 'Emily White', type: 'Message Request', timestamp: '2024-08-30', description: 'Questions about medication side effects.', icon: <MessageIcon color="primary" /> }
  ];
  const [filteredRequests, setFilteredRequests] = useState(allRequests);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

   // State for the search input
   const [searchQuery, setSearchQuery] = useState('');

   // Handle search
   const handleSearch = (e) => {
     const query = e.target.value.toLowerCase();
     setSearchQuery(query);
 
     const filtered = allRequests.filter(
       (request) =>
         request.user.toLowerCase().includes(query) ||
         request.type.toLowerCase().includes(query) ||
         request.description.toLowerCase().includes(query)
     );
     setFilteredRequests(filtered);
     setCurrentPage(1); // Reset to first page on new search
   };
 
   // Paginate requests
   const displayedRequests = filteredRequests.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
 
   // Handle pagination change
   const handlePageChange = (event, value) => {
     setCurrentPage(value);
   };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Leads and Requests
      </Typography>

      {/* Search bar */}
      <TextField
            fullWidth
            placeholder="Search by name, type, or request..."
            value={searchQuery}
            onChange={handleSearch}
            InputProps={{
                startAdornment: (
                <InputAdornment position="start">
                    <SearchIcon />
                </InputAdornment>
                ),
            }}
            sx={{ marginBottom: 2 }}
        />

        {displayedRequests.map((request, index) => (
          <Box key={index}>
            <ListItem button component="a" onClick={() => handleEventClick(request.id, request.type)}>
              {request.icon}
              <Box sx={{ ml:2 }}>                      
                <ListItemText
                  primary={request.type}
                  secondary={
                    <>
                      <Typography variant="body2" color="textSecondary">
                        {request.user} {request.description}
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        {request.timestamp}
                      </Typography>
                    </>
                  }
                />
              </Box>
            </ListItem>
            <Divider variant="middle" />
          </Box>
        ))}
        {/* Pagination */}
        <Pagination
          count={Math.ceil(filteredRequests.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          sx={{ marginTop: 2, mx: 'auto' }}
        />
   
    </div>
  );
};

export default LeadsAndRequests;
