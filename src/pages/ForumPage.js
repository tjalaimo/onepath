import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardContent, CardActionArea, TextField, Grid, InputAdornment, Pagination } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const forumPosts = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  title: `Post ${index + 1}`,
  content: `This is the content of post ${index + 1}.`,
  image: index % 2 === 0 ? `https://i.pravatar.cc/150?img=${index}` : null,
  comments: Math.floor(Math.random() * 50),
  upvotes: Math.floor(Math.random() * 100),
}));

const ForumPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const filteredPosts = forumPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedPosts = filteredPosts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <Box sx={{ pb: 4, px: 4 }}>
      <Grid container>
        <Grid item xs={3} sm={2}>
          <Button variant="outlined" sx={{ mb: 1 }} onClick={ () => { window.history.back() }}><ArrowBackIcon /></Button>  
        </Grid>
        <Grid item xs={9} sm={10}>
          <TextField
            fullWidth
            placeholder="Search forum posts by title or content..."
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
        </Grid>
      </Grid>
      
      

      <Grid container spacing={3}>
        {displayedPosts.map((post) => (
          <Grid item xs={12} key={post.id}>
            <Card>
              <CardContent>
                <CardActionArea onClick={() => { navigate('/provider/forum/post/1'); }}>
                  <Typography variant="h6">{post.title}</Typography>
                </CardActionArea>
                {post.image && <img src={post.image} alt={post.title} style={{ width: '100%', height: 'auto' }} />}
                <Typography variant="body2">{post.content}</Typography>
                <Typography variant="body2">Comments: {post.comments} | Upvotes: {post.upvotes}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Pagination
        count={Math.ceil(filteredPosts.length / itemsPerPage)}
        page={currentPage}
        onChange={(event, value) => setCurrentPage(value)}
        sx={{ marginTop: 3 }}
      />
    </Box>
  );
};

export default ForumPage;
