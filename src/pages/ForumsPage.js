import React, { useState } from 'react';
import { Box, Typography, Avatar, Grid, Card, CardContent, TextField, Pagination, AvatarGroup, InputAdornment, CardActionArea } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const randomSpecialities = ['Allergy and immunology','Anesthesiology','Dermatology','Diagnostic radiology','Emergency medicine','Family medicine','Internal medicine','Medical genetics','Neurology','Nuclear medicine','Obstetrics and gynecology','Ophthalmology','Pathology','Pediatrics','Physical medicine and rehabilitation','Preventive medicine','Psychiatry','Radiation oncology','Surgery','Urology']
const forumsData = Array.from({ length: randomSpecialities.length }, (_, index) => ({
  id: index + 1,
  name: randomSpecialities[index],
  description: 'This is a random description that will apply to all since I put this in loop to generate the array, but make it long so its multi-line',
  membersCount: Math.floor(Math.random() * 1000),
  membersAvatars: ['/static/images/avatar/1.jpg', '/static/images/avatar/2.jpg', '/static/images/avatar/3.jpg'],
}));

const ForumsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const filteredForums = forumsData.filter((forum) =>
    forum.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedForums = filteredForums.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <Box sx={{ pb: 4, px: 4 }}>

      <TextField
        fullWidth
        placeholder="Search by forum name or attributes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{ marginBottom: 3 }}
      />

      <Grid container spacing={3}>
        {displayedForums.map((forum) => (
          <Grid item xs={12} key={forum.id}>
            <Card>
              <CardContent>
                <Grid container alignItems="center">
                  <Grid item>
                    <Avatar src={`/static/images/avatar/${forum.id}.jpg`} />
                  </Grid>
                  <Grid item sx={{ marginLeft: 2 }}>
                    <CardActionArea onClick={() => { navigate('/provider/forum/1'); }}>
                      <Typography variant="h6">{forum.name}</Typography>
                    </CardActionArea>
                    <Typography variant="body2">{forum.description}</Typography>
                    <AvatarGroup max={4}>
                      {forum.membersAvatars.map((avatar, i) => (
                        <Avatar key={i} src={avatar} />
                      ))}
                    </AvatarGroup>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Pagination
        count={Math.ceil(filteredForums.length / itemsPerPage)}
        page={currentPage}
        onChange={(event, value) => setCurrentPage(value)}
        sx={{ marginTop: 3 }}
      />
    </Box>
  );
};

export default ForumsPage;
