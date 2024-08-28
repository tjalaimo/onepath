import React, { useState } from 'react';
import { Box, Typography, TextField, Card, CardContent, Grid, Avatar, Rating, List, ListItem, ListItemText, Divider, Pagination } from '@mui/material';

// Sample Data with 15 reviews
const reviewsData = [
  {
    user: { name: 'John Doe', avatar: 'https://i.pravatar.cc/150?img=1' },
    ratings: { officeStaff: 5, waitTime: 4, careProvided: 5, overallExperience: 5 },
    comment: 'Great service, very satisfied!',
    providerResponse: 'Thank you for your feedback!',
  },
  {
    user: { name: 'Jane Smith', avatar: 'https://i.pravatar.cc/150?img=2' },
    ratings: { officeStaff: 4, waitTime: 3, careProvided: 5, overallExperience: 4 },
    comment: 'Had to wait a bit, but the care was top-notch!',
    providerResponse: 'We’ll work on reducing wait times. Thank you for your input!',
  },
  {
    user: { name: 'Alice Brown', avatar: 'https://i.pravatar.cc/150?img=3' },
    ratings: { officeStaff: 3, waitTime: 5, careProvided: 5, overallExperience: 5 },
    comment: 'Best medical staff ever!',
    providerResponse: 'Glad to hear you had a good experience!',
  },
  // Add more reviews up to 15
  {
    user: { name: 'Bob Johnson', avatar: 'https://i.pravatar.cc/150?img=4' },
    ratings: { officeStaff: 4, waitTime: 2, careProvided: 3, overallExperience: 4 },
    comment: 'Care was good but the wait time was long.',
    providerResponse: 'We appreciate your feedback!',
  },
  {
    user: { name: 'Chris Lee', avatar: 'https://i.pravatar.cc/150?img=5' },
    ratings: { officeStaff: 5, waitTime: 5, careProvided: 5, overallExperience: 5 },
    comment: 'Exceptional service!',
    providerResponse: 'Thank you so much!',
  },
  // Add 10 more unique reviews to reach 15 reviews total
  {
    user: { name: 'Sophia Green', avatar: 'https://i.pravatar.cc/150?img=6' },
    ratings: { officeStaff: 4, waitTime: 4, careProvided: 4, overallExperience: 5 },
    comment: 'Very happy with the overall experience.',
    providerResponse: 'Thanks for your kind words!',
  },
  {
    user: { name: 'Oliver Black', avatar: 'https://i.pravatar.cc/150?img=7' },
    ratings: { officeStaff: 3, waitTime: 3, careProvided: 4, overallExperience: 4 },
    comment: 'Decent service, but wait time was long.',
    providerResponse: 'We’ll improve our wait times!',
  },
  {
    user: { name: 'Emily White', avatar: 'https://i.pravatar.cc/150?img=8' },
    ratings: { officeStaff: 5, waitTime: 5, careProvided: 5, overallExperience: 5 },
    comment: 'Perfect! No complaints!',
    providerResponse: 'Thanks for your feedback!',
  },
  {
    user: { name: 'Henry Wilson', avatar: 'https://i.pravatar.cc/150?img=9' },
    ratings: { officeStaff: 4, waitTime: 3, careProvided: 4, overallExperience: 4 },
    comment: 'Good service, though some delays.',
    providerResponse: 'We’ll work on that, thank you!',
  },
  {
    user: { name: 'Mia Davis', avatar: 'https://i.pravatar.cc/150?img=10' },
    ratings: { officeStaff: 5, waitTime: 4, careProvided: 5, overallExperience: 5 },
    comment: 'Excellent care from everyone!',
    providerResponse: 'Glad to hear it!',
  },
  {
    user: { name: 'Jack Thomas', avatar: 'https://i.pravatar.cc/150?img=11' },
    ratings: { officeStaff: 5, waitTime: 3, careProvided: 4, overallExperience: 5 },
    comment: 'Great care but had to wait a bit.',
    providerResponse: 'Thank you for the feedback!',
  },
  {
    user: { name: 'Grace Baker', avatar: 'https://i.pravatar.cc/150?img=12' },
    ratings: { officeStaff: 4, waitTime: 4, careProvided: 5, overallExperience: 5 },
    comment: 'Very friendly staff.',
    providerResponse: 'We appreciate your kind words!',
  },
  {
    user: { name: 'James Harris', avatar: 'https://i.pravatar.cc/150?img=13' },
    ratings: { officeStaff: 5, waitTime: 5, careProvided: 5, overallExperience: 5 },
    comment: 'Best clinic I’ve been to.',
    providerResponse: 'Thank you for trusting us!',
  },
  {
    user: { name: 'Sophia Clark', avatar: 'https://i.pravatar.cc/150?img=14' },
    ratings: { officeStaff: 4, waitTime: 4, careProvided: 4, overallExperience: 4 },
    comment: 'Good overall.',
    providerResponse: 'Thanks for the feedback!',
  },
  {
    user: { name: 'Liam Walker', avatar: 'https://i.pravatar.cc/150?img=15' },
    ratings: { officeStaff: 3, waitTime: 4, careProvided: 3, overallExperience: 3 },
    comment: 'Average experience.',
    providerResponse: 'We’ll take your feedback into account.',
  }
];

const Reviews = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;

  // Pagination: Calculate start and end index for reviews
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviewsData.slice(indexOfFirstReview, indexOfLastReview);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  // Search function
  const filteredReviews = currentReviews.filter(
    (review) =>
      review.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.comment.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate average ratings
  const averageRatings = {
    officeStaff: (reviewsData.reduce((acc, review) => acc + review.ratings.officeStaff, 0) / reviewsData.length).toFixed(1),
    waitTime: (reviewsData.reduce((acc, review) => acc + review.ratings.waitTime, 0) / reviewsData.length).toFixed(1),
    careProvided: (reviewsData.reduce((acc, review) => acc + review.ratings.careProvided, 0) / reviewsData.length).toFixed(1),
    overallExperience: (reviewsData.reduce((acc, review) => acc + review.ratings.overallExperience, 0) / reviewsData.length).toFixed(1),
  };

  return (
    <Card sx={{ }}>
        <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 4}}>
                <Typography variant="h6">Average Ratings</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                    <Typography>Office Staff: {averageRatings.officeStaff}</Typography>
                    <Rating value={parseFloat(averageRatings.officeStaff)} readOnly />
                    </Grid>
                    <Grid item xs={3}>
                    <Typography>Wait Time: {averageRatings.waitTime}</Typography>
                    <Rating value={parseFloat(averageRatings.waitTime)} readOnly />
                    </Grid>
                    <Grid item xs={3}>
                    <Typography>Care Provided: {averageRatings.careProvided}</Typography>
                    <Rating value={parseFloat(averageRatings.careProvided)} readOnly />
                    </Grid>
                    <Grid item xs={3}>
                    <Typography>Overall Experience: {averageRatings.overallExperience}</Typography>
                    <Rating value={parseFloat(averageRatings.overallExperience)} readOnly />
                    </Grid>
                </Grid>
            </Box>

            <Divider variant='middle' />

                <Box sx={{ mt: 4 }}>
                {/* Search Bar */}
                <TextField
                    label="Search Reviews"
                    fullWidth
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{ marginBottom: 4 }}
                />

                {/* Reviews List */}
                <List>
                    {filteredReviews.map((review, index) => (
                    <React.Fragment key={index}>
                        <ListItem alignItems="flex-start">
                        <Avatar src={review.user.avatar} alt={review.user.name} sx={{ mr: 2 }} />
                        <ListItemText
                            primary={review.user.name}
                            secondary={
                            <>
                                <Grid container spacing={2}>
                                <Grid item xs={3}>
                                    <Typography>Office Staff: {review.ratings.officeStaff}</Typography>
                                    <Rating value={review.ratings.officeStaff} readOnly />
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography>Wait Time: {review.ratings.waitTime}</Typography>
                                    <Rating value={review.ratings.waitTime} readOnly />
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography>Care Provided: {review.ratings.careProvided}</Typography>
                                    <Rating value={review.ratings.careProvided} readOnly />
                                </Grid>
                                <Grid item xs={3}>
                                    <Typography>Overall Experience: {review.ratings.overallExperience}</Typography>
                                    <Rating value={review.ratings.overallExperience} readOnly />
                                </Grid>
                                </Grid>

                                <Typography sx={{ marginTop: 2 }}>{review.comment}</Typography>

                                {review.providerResponse && (
                                <Box sx={{ marginTop: 2, padding: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                                    <Typography variant="body2">Provider Response:</Typography>
                                    <Typography>{review.providerResponse}</Typography>
                                </Box>
                                )}
                            </>
                            }
                        />
                        </ListItem>
                        <Divider variant="middle"/>
                    </React.Fragment>
                    ))}
                </List>

                {/* Pagination */}
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
                    <Pagination
                    count={Math.ceil(reviewsData.length / reviewsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    />
                </Box>
            </Box>
        </CardContent>
      </Card>
  );
};

export default Reviews;
