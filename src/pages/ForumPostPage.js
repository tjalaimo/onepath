import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, TextField, Avatar, Grid, Divider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const postDetails = {
  title: 'The importance of AI in medical imaging',
  content: 'This is the content of the post. It would have information input by the creator.',
  image: 'https://i.pravatar.cc/150?img=1',
  poster: {
    id: 9,
    user: 'Bob Post',
    avatar: ''
  },
  comments: [
    {
      id: 1,
      user: 'John Doe',
      content: 'This is a comment.',
      replies: [{ id: 2, user: 'Jane Smith', content: 'This is a reply.' }],
    },
    {
      id: 3,
      user: 'Alice Johnson',
      content: 'Another comment.',
      replies: [],
    },
  ],
};

const ForumPostPage = () => {
  const [commentText, setCommentText] = useState('');

  const handleCommentSubmit = () => {
    console.log('Comment submitted:', commentText);
    setCommentText('');
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={10}>        
        <Card sx={{ marginBottom: 2, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: 2, borderRadius: '12px' }}>        
          <CardContent>
            <Grid container>
              <Grid item>
                <Button variant="outlined" sx={{ }} onClick={ () => { window.history.back() }}><ArrowBackIcon /></Button>                
              </Grid>
              <Grid item sx={{ marginLeft: 2 }}>
                <Avatar>{postDetails.poster.avatar}</Avatar>                
              </Grid>
              <Grid item sx={{ marginLeft: 2 }}>                
                <Typography variant="h6">{postDetails.poster.user}</Typography>                
              </Grid>
            </Grid>
            <Box>
              
            </Box>
            <Typography variant="h4" gutterBottom>
              {postDetails.title}
            </Typography>

            <Box sx={{ mb: 2}}>
              
                {postDetails.image && <img src={postDetails.image} alt={postDetails.title} style={{ width: '100%', height: 'auto' }} />}
                <Typography variant="body1">{postDetails.content}</Typography>
                <Box sx={{ marginTop: 2 }}>
                  <Button variant="contained" color="primary">
                    Upvote
                  </Button>
                  <Button variant="outlined" sx={{ marginLeft: 2 }}>
                    Comment
                  </Button>
                </Box>
              
            </Box>

            <Divider variant="middle" />

            <Box sx={{ marginTop: 4 }}>
              <Typography variant="h6">Comments</Typography>

              {postDetails.comments.map((comment) => (
                <Box key={comment.id} sx={{ marginBottom: 3 }}>
                  <Grid container>
                    <Grid item>
                      <Avatar>{comment.user[0]}</Avatar>
                    </Grid>
                    <Grid item sx={{ marginLeft: 2 }}>
                      <Typography variant="subtitle1">{comment.user}</Typography>
                      <Typography variant="body2">{comment.content}</Typography>
                    </Grid>
                  </Grid>

                  {comment.replies.map((reply) => (
                    <Grid container key={reply.id} sx={{ marginLeft: 5, marginTop: 2 }}>
                      <Grid item>
                        <Avatar>{reply.user[0]}</Avatar>
                      </Grid>
                      <Grid item sx={{ marginLeft: 2 }}>
                        <Typography variant="subtitle1">{reply.user}</Typography>
                        <Typography variant="body2">{reply.content}</Typography>
                      </Grid>
                    </Grid>
                  ))}
                </Box>
              ))}

              <TextField
                fullWidth
                placeholder="Write a comment..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                sx={{ marginBottom: 2 }}
              />
              <Button variant="contained" onClick={handleCommentSubmit}>
                Submit
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ForumPostPage;
