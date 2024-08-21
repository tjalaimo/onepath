import React from 'react';
import { Avatar, Box, Grid, Typography, Card, CardContent } from '@mui/material';

const members = [
  { name: 'Alice Smith', avatar: 'https://i.pravatar.cc/150' },
  { name: 'Bob Johnson', avatar: 'https://i.pravatar.cc/150' }
];

const NetworkMembers = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Members
      </Typography>
      <Grid container spacing={2}>
        {members.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src={member.avatar} alt={member.name} sx={{ marginRight: 2 }} />
                <Typography variant="body1">{member.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NetworkMembers;
