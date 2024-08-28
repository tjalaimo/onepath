import React from 'react';
import { Avatar, Box, Grid, Typography, Card, CardContent } from '@mui/material';

const members = [
  { name: 'Alice Alaimo', avatar: 'https://i.pravatar.cc/150?img=1' },
  { name: 'Bob Alaimo', avatar: 'https://i.pravatar.cc/150?img=2' },
  { name: 'Greg Alaimo', avatar: 'https://i.pravatar.cc/150?img=3' },
  { name: 'Dan Alaimo', avatar: 'https://i.pravatar.cc/150?img=4' },
  { name: 'Ben Alaimo', avatar: 'https://i.pravatar.cc/150?img=5' },
  { name: 'Jimmy Alaimo', avatar: 'https://i.pravatar.cc/150?img=6' }
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
