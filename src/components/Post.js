import React from 'react';
import { Card, CardHeader, Avatar, CardContent, Typography, CardActions, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

const Post = ({ post }) => {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardHeader
        avatar={<Avatar src={post.user.avatar} alt={post.user.name} />}
        title={post.user.name}
        subheader={post.timestamp}
      />
      <CardContent>
        <Typography variant="body1">{post.content}</Typography>
        {post.media && <img src={post.media} alt="Post media" style={{ width: '100%', marginTop: 8 }} />}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="comment">
          <CommentIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
