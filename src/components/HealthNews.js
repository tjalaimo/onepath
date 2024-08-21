import React from 'react';
import { Card, CardContent, CardMedia, Typography, List, ListItem, Divider, Box } from '@mui/material';

const HealthNews = () => {
  const articles = [
    {
      title: 'New Advances in Heart Disease Treatment',
      description: 'Breakthrough treatments could revolutionize heart health.',
      image: 'https://via.placeholder.com/150',
      link: '#1'
    },
    {
      title: 'How to Maintain a Healthy Diet',
      description: 'Expert advice on creating a balanced diet plan.',
      image: 'https://via.placeholder.com/150',
      link: '#2'
    },
    {
      title: 'Mental Health Resources During Stressful Times',
      description: 'Find out how to manage stress with these resources.',
      image: 'https://via.placeholder.com/150',
      link: '#3'
    }
  ];

  return (
    <Card sx={{ marginBottom: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: 2, borderRadius: '12px' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Health News
        </Typography>
        <List>
          {articles.map((article, index) => (
            <>
              <ListItem key={index} button component="a" href={article.link}>
                <CardMedia
                  component="img"
                  image={article.image}
                  alt={article.title}
                  sx={{ width: 60, height: 60, marginRight: 2 }}
                />                
                <Box>
                  <Typography variant="subtitle1">{article.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {article.description}
                  </Typography>
                </Box>
              </ListItem>
              <Divider variant="middle" component="li" />
            </>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default HealthNews;
