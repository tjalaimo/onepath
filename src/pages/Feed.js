import React from 'react';
import { Box, Paper, Typography, Button, Avatar, Grid } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import SendIcon from '@mui/icons-material/Send';
import CommentIcon from '@mui/icons-material/Comment';

const posts = [
  { id: 1, user: 'John Doe', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', avatar: 'https://i.pravatar.cc/40' },
  { id: 2, user: 'Jane Smith', content: 'New heart medication recall!', avatar: 'https://i.pravatar.cc/40?u=jane', media: 'https://via.placeholder.com/150' },
  { id: 3, user: 'Jane Smith', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', avatar: 'https://i.pravatar.cc/40?u=jane', media: 'https://via.placeholder.com/150' },
  { id: 4, user: 'Jane Smith', content: 'Just had a healthy checkup.', avatar: 'https://i.pravatar.cc/40?u=jane', media: 'https://via.placeholder.com/150' },
  { id: 5, user: 'Jane Smith', content: 'A random post.', avatar: 'https://i.pravatar.cc/40?u=jane', media: 'https://via.placeholder.com/150' },
  { id: 6, user: 'Jane Smith', content: 'Filler text', avatar: 'https://i.pravatar.cc/40?u=jane', media: 'https://via.placeholder.com/150' },
  { id: 7, user: 'Jane Smith', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', avatar: 'https://i.pravatar.cc/40?u=jane' },
  { id: 8, user: 'Jane Smith', content: 'Just had a healthy checkup.', avatar: 'https://i.pravatar.cc/40?u=jane', media: 'https://via.placeholder.com/150' },
];

const Feed = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {posts.map((post) => (
        <Grid item xs={10} key={post.id}> {/* Responsive columns */}
          <Paper
            sx={{
              padding: 2,
              borderRadius: '12px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              marginBottom: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
              <Avatar src={post.avatar} sx={{ marginRight: 2 }} />              
              <Typography variant="h6">{post.user}</Typography>
            </Box>
            <Typography variant="body1" gutterBottom>
              {post.media && <img src={post.media} alt="Post media" style={{ width: '100%', marginTop: 8 }} />}
              <br />
              {post.content}
            </Typography>
            
            <Grid container>
              <Grid item xs={4}>
                <Button variant="text" color="primary"><ThumbUpOffAltIcon />Like</Button>
              </Grid>
              <Grid item xs={4}>
                <Button variant="text" color="primary"><CommentIcon />Comment</Button>
              </Grid>
              <Grid item xs={4} container justifyContent="flex-end">
                <Button variant="text" color="primary"><SendIcon />Share</Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Feed;