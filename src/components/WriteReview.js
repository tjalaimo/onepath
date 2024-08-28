import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Rating, Card, CardContent } from '@mui/material';

const WriteReview = ({ onSubmitReview }) => {
  const [ratings, setRatings] = useState({
    officeStaff: 0,
    waitTime: 0,
    careProvided: 0,
    overallExperience: 0,
  });
  const [comment, setComment] = useState('');

  const handleRatingChange = (category, newValue) => {
    setRatings((prevRatings) => ({ ...prevRatings, [category]: newValue }));
  };

  const handleSubmit = () => {
    const newReview = {
      ratings,
      comment,
    };
    onSubmitReview(newReview);
    // Clear form
    setRatings({
      officeStaff: 0,
      waitTime: 0,
      careProvided: 0,
      overallExperience: 0,
    });
    setComment('');
  };

  return (
    <Box sx={{ mb: 2, mt: 2 }}>  
        <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
            Please write a review
        </Typography>
        {/* Ratings */}
        <Grid container spacing={2}>
            {['Office Staff', 'Wait Time', 'Care Provided', 'Overall Experience'].map((label, index) => (
            <Grid item xs={12} key={index} container alignItems="center">
                <Grid item xs={6}>
                <Typography>{label}</Typography>
                </Grid>
                <Grid item xs={6}>
                <Rating
                    value={ratings[label.toLowerCase().replace(/\s+/g, '')]}
                    onChange={(event, newValue) => handleRatingChange(label.toLowerCase().replace(/\s+/g, ''), newValue)}
                />
                </Grid>
            </Grid>
            ))}
        </Grid>

        {/* Comments */}
        <Box sx={{ marginTop: 2 }}>
            <TextField
            label="Additional Comments"
            multiline
            rows={4}
            fullWidth
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            />
        </Box>

        {/* Submit Button */}
        <Box sx={{ textAlign: 'right', marginTop: 2 }}>
            <Button variant="contained" onClick={handleSubmit}>
            Submit Review
            </Button>
        </Box>
    </Box>    
  );
};

export default WriteReview;
