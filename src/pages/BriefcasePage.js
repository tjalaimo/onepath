import React from 'react';
import { Box, Grid, Card, CardContent, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';

// Example document data
const documents = [
  {
    id: 1,
    name: 'Lab Results.pdf',
    lastModified: '2024-08-10',
    thumbnail: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'X-Ray Results.pdf',
    lastModified: '2024-07-22',
    thumbnail: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'CAT scan Result.pdf',
    lastModified: '2024-08-22',
    thumbnail: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'Dr Peters Notes.pdf',
    lastModified: '2024-08-22',
    thumbnail: 'https://via.placeholder.com/150',
  },
];

const BriefcasePage = () => (
  <Grid container spacing={2} justifyContent="center">
    <Grid item xs={12}>
      <Card sx={{ marginBottom: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: 2, borderRadius: '12px' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            My Briefcase
          </Typography>
          <Grid container spacing={2}>
            {documents.map((doc) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={doc.id}>
                <Card>
                  <img src={doc.thumbnail} alt={doc.name} style={{ width: '100%' }} />
                  <CardContent>
                    <Typography variant="h6">{doc.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Last Modified: {doc.lastModified}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
                      <IconButton color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton color="secondary">
                        <ShareIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
);

export default BriefcasePage;
