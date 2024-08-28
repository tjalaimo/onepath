import React, { useState } from 'react';
import { Avatar, Box, Card, CardContent, Typography, Rating, List, ListItem, ListItemText, Divider, Grid, Button, TextField, Pagination } from '@mui/material';
import ScheduleAppointmentModal from '../modals/ScheduleAppointmentModal';
import { useNavigate } from 'react-router-dom';

import ProviderCard from '../components/ProviderCard';

// Example provider data
const allProviders = [
  {
    id: 1,
    name: 'Dr. Jane Doe',
    specialty: 'Cardiologist',
    profilePicture: 'https://i.pravatar.cc/300?img=8',
    rating: 4.5,
    reviewCount: 25,
    description: 'I specialize in heart health and helping patients maintain a healthy cardiovascular system.',
    reviews: [
      { id: 1, content: 'Great doctor, very attentive and caring.', reviewer: 'John Smith' },
      { id: 2, content: 'Helped me manage my hypertension. Highly recommend!', reviewer: 'Sarah Lee' }
    ]
  },
  {
    id: 2,
    name: 'Dr. John Smith',
    specialty: 'Dermatologist',
    profilePicture: 'https://i.pravatar.cc/300?img=13',
    rating: 4.8,
    reviewCount: 40,
    description: 'Board-certified dermatologist specializing in acne, skin cancer, and cosmetic procedures.',
    reviews: [
      { id: 1, content: 'Very professional and knowledgeable.', reviewer: 'Emily Johnson' },
      { id: 2, content: 'Helped clear up my skin issues in no time!', reviewer: 'Michael Brown' }
    ]
  },
  {
    id: 3,
    name: 'Dr. Josh Stern',
    specialty: 'Radiologist',
    profilePicture: 'https://i.pravatar.cc/300?img=15',
    rating: 4.5,
    reviewCount: 400,
    description: 'Board-certified radiologist in reading any number of scans.',
    reviews: [
      { id: 1, content: 'Very professional.', reviewer: 'Emily Johnson' },
    ]
  },
  {
    id: 4,
    name: 'Dr. Greg K',
    specialty: 'Veterinarian',
    profilePicture: 'https://i.pravatar.cc/300?img=13',
    rating: 4.8,
    reviewCount: 40,
    description: 'Board-certified veterinarian specializing in dogs cats and everything in between',
    reviews: [
      { id: 1, content: 'Very professional and knowledgeable.', reviewer: 'John Johnson' },
      { id: 2, content: 'Helped my pup when they were most in need!', reviewer: 'Ed Brown' }
    ]
  }
];

const ProvidersPage = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination settings
  const providersPerPage = 3; // Number of providers to display per page
  const indexOfLastProvider = currentPage * providersPerPage;
  const indexOfFirstProvider = indexOfLastProvider - providersPerPage;

  // Handle search query
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
    setCurrentPage(1); // Reset to first page when search is applied
  };

  // Filter providers based on search query
  const filteredProviders = allProviders.filter((provider) =>
    provider.name.toLowerCase().includes(searchQuery) ||
    provider.specialty.toLowerCase().includes(searchQuery)
  );

  // Get providers for the current page
  const currentProviders = filteredProviders.slice(indexOfFirstProvider, indexOfLastProvider);

  // Handle page change for pagination
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} sx={{ mb: 4}}>     

        {/* Search Bar */}
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search by name or specialty..."
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{ marginBottom: 4 }}
        />
        
        <Grid container spacing={2}>
          {currentProviders.length > 0 ? (
            currentProviders.map((provider) => (
              <Grid item xs={12} key={provider.id}>
                <Box sx={{ mb: 2 }}>
                  <ProviderCard provider={provider} showView={true} />
                </Box>
              </Grid>
            ))
          ) : (
            <Typography variant="body1">No providers found.</Typography>
          )}
        </Grid>

        {/* Pagination */}
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
          <Pagination
            count={Math.ceil(filteredProviders.length / providersPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      </Grid>       
    </Grid>
  );
};

export default ProvidersPage;
