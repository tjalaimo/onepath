import React from 'react';
import { useParams } from 'react-router';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';

import ProviderCard from '../components/ProviderCard';
import UserFeed from '../components/UserFeed';
import Reviews from '../components/Reviews';

const providerProfile = {
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
}

const ProviderProfilePage = () => {
  const params= useParams()  

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        {/* Profile Section */}
        <ProviderCard provider={providerProfile} showView={false} showReviews={false} />
      </Grid>

      <Grid item xs={12}>
        {/* Reviews Section */}
        <Reviews />
      </Grid>

      {/* Posts Section */}
      <Grid item xs={12}>
          <Card sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: 2, borderRadius: '12px' }}>
          <CardContent>
              {/* Posts Section */}
              <Box>
                  <Typography variant="h6" gutterBottom>
                  Posts
                  </Typography>
                  <UserFeed />
              </Box>
          </CardContent>
          </Card>
      </Grid>
    </Grid>
  );
};

export default ProviderProfilePage;
