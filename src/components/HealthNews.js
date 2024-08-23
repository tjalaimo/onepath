import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, List, ListItem, Divider, Box } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const HealthNews = () => {
  const navigate = useNavigate();
  const { user } = useAuth(); 
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  useEffect(() => {
    console.log(user);
    setUserAuthenticated(user != null);
  }, [user, navigate]);

  useEffect(() => {
    setUserAuthenticated(user != null);
  }, []);

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
    <Box sx={{ display: userAuthenticated ? 'block' : 'none' }}>
      <Card sx={{ marginBottom: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: 2, borderRadius: '12px' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Health News
          </Typography>
          <List>
            {articles.map((article, index) => (
              <Box key={index}>
                <ListItem button component="a" href={article.link}>
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
              </Box>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default HealthNews;
