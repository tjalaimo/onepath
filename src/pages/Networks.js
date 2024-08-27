import React from 'react';
import { Box, Avatar, AvatarGroup, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Example network data
const networks = [
  {
    id: 1,
    name: 'Alaimo Family',
    avatar: 'https://i.pravatar.cc/50?img=3',
    members: [
      { name: 'Alice', avatar: 'https://i.pravatar.cc/50?img=1' },
      { name: 'Bob', avatar: 'https://i.pravatar.cc/50?img=2' },
      { name: 'Carol', avatar: 'https://i.pravatar.cc/50?img=3' },
    ],
    description: 'My family\'s network of doctors and events to keep track of our lives.',
  },
  {
    id: 2,
    name: 'Mom and Dad',
    avatar: 'https://i.pravatar.cc/150?',
    members: [
      { name: 'Dave', avatar: 'https://i.pravatar.cc/50?img=4' },
      { name: 'Eve', avatar: 'https://i.pravatar.cc/50?img=2' },
    ],
    description: 'A network with my parents so I can stay on top of their care even when they cannot.',
  },
];

const NetworkCard = ({ network }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ marginBottom: 4 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
          <Avatar src={network.avatar} sx={{ width: 80, height: 80, marginRight: 2 }} />
          <Typography variant="h6">{network.name}</Typography>
        </Box>
        <AvatarGroup max={4}>
          {network.members.map((member, index) => (
            <Avatar key={index} alt={member.name} src={member.avatar} />
          ))}
        </AvatarGroup>
        <Typography variant="body1" sx={{ marginY: 2 }}>
          {network.description}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Button variant="contained" color="primary" sx={{ }} onClick={() => { navigate('/network/'+ network.id); }}>
              View
            </Button>
          </Grid>
          <Grid item xs={7}  justifyContent={'center'}></Grid>
          <Grid item xs={2} justifyContent={'right'}>
            <Button variant="text" color="error" sx={{ }}>
            Leave
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
};

const Networks = () => (  
  <Grid container spacing={2} justifyContent="center">
    <Grid item xs={12}>
      {networks.map((network) => (
        <NetworkCard key={network.id} network={network} />
      ))}
    </Grid>
  </Grid>
);

export default Networks;
