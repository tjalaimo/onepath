import React, { useState, useEffect } from 'react';
import { Box, Grid, Card, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, TextField, Pagination, InputAdornment, useMediaQuery } from '@mui/material';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import SearchIcon from '@mui/icons-material/Search';
import PostAddIcon from '@mui/icons-material/PostAdd';
import KeyIcon from '@mui/icons-material/Key';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { useTheme  } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import AccessCodesModal from '../modals/AccessCodesModal';
import CreatePostModal from '../modals/CreatePostModal';

const localizer = momentLocalizer(moment);

const ProviderHome = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { user } = useAuth(); 
  const navigate = useNavigate();  

  useEffect(() => {
    if (user && user.role === 'provider') {
      navigate('/provider/home');
    }
  }, [user, navigate]);

  // Sample data for incoming requests
  const allRequests = [
    { id: 1, user: 'John Doe', type: 'Message Request', description: 'Asking about flu symptoms.' },
    { id: 2, user: 'Jane Smith', type: 'Appointment Request', description: 'Requesting a general checkup.' },
    { id: 3, user: 'Mark Williams', type: 'Message Request', description: 'Consulting about diabetes.' },
    { id: 4, user: 'Alice Johnson', type: 'Appointment Request', description: 'Wants to discuss blood pressure.' },
    { id: 5, user: 'Tom Harris', type: 'Message Request', description: 'Follow-up on recent surgery.' },
    { id: 6, user: 'Emily White', type: 'Message Request', description: 'Questions about medication side effects.' }
  ];

  const [filteredRequests, setFilteredRequests] = useState(allRequests);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Sample appointments for the calendar
  const appointments = [
    { title: 'John Doe - Checkup', start: new Date(2024, 7, 21, 10, 0), end: new Date(2024, 7, 21, 11, 0) },
    { title: 'Jane Smith - Consultation', start: new Date(2024, 7, 22, 14, 0), end: new Date(2024, 7, 22, 15, 0) },
    { title: 'Mark Williams - Follow-up', start: new Date(2024, 7, 23, 9, 0), end: new Date(2024, 7, 23, 10, 0) }
  ];

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

  const [openAccessCodeModal, setOpenAccessCodeModal] = useState(false);

  const handleOpenAccessCodeModal = () => {
    setOpenAccessCodeModal(true);
  };

  // Function to close the modal
  const handleCloseAccessCodeModal = () => {
    setOpenAccessCodeModal(false);
  };

  const [openCreatePostModal, setOpenCreatePostModal] = useState(false);

  const handleOpenCreatePostModal = () => {
    setOpenCreatePostModal(true);
  };

  // Function to close the modal
  const handleCloseCreatePostModal = () => {
    setOpenCreatePostModal(false);
  };
  

  return (
    <Box sx={{ px: 4, mb: 4 }}>
      
      <Grid container spacing={3}>

        {/* Action Items */}
        <Grid item xs={12}>
            <Card>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                    Action Items
                    </Typography>

                    <Button variant="contained" color="primary" onClick={handleOpenCreatePostModal}>
                        <PostAddIcon />{!isMobile ? 'Post' : ''}
                    </Button>
                    <Button variant="contained" color="secondary" sx={{ marginLeft: 1 }} onClick={handleOpenAccessCodeModal}>
                        <KeyIcon />{!isMobile ? 'Access Code' : ''}
                    </Button>
                    <Button variant="contained" color="info" sx={{ marginLeft: 1 }} onClick={ () => { navigate('/briefcase') }} >
                        <NoteAddIcon />{!isMobile ? 'Documents' : ''}
                    </Button>
                    <Button variant="contained" color="success" sx={{ marginLeft: 1 }} onClick={ () => { navigate('/provider/patientlist') }}>
                        <DirectionsRunIcon />{!isMobile ? 'Patients' : ''}
                    </Button>
                </CardContent>
            </Card>
        </Grid>

        {/* Incoming Requests & Leads */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Incoming Requests & Leads
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

              {displayedRequests.map((request) => (
                <Box key={request.id} sx={{ marginBottom: 2 }}>
                  <Typography variant="subtitle1">{request.user}</Typography>
                  <Typography variant="body2">
                    {request.type}: {request.description}
                  </Typography>
                </Box>
              ))}

              {/* Pagination */}
              <Pagination
                count={Math.ceil(filteredRequests.length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                sx={{ marginTop: 2, mx: 'auto' }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Upcoming Events (Weekly Calendar View) */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Upcoming Events (This Week)
              </Typography>
              <div style={{ height: 300}}>
                <Calendar
                    localizer={localizer}
                    events={appointments}
                    startAccessor="start"
                    endAccessor="end"
                    defaultView={'week'}
                    style={{ height: 600 }}
                />
              </div>
            </CardContent>
          </Card>
        </Grid>

      </Grid>

      <AccessCodesModal open={openAccessCodeModal} onClose={handleCloseAccessCodeModal} />
      <CreatePostModal open={openCreatePostModal} onClose={handleCloseCreatePostModal} />
    </Box>
  );
};

export default ProviderHome;
