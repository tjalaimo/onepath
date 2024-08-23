import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography, Snackbar } from '@mui/material';

const CreatePostModal = ({ open, onClose }) => {
  const [postText, setPostText] = useState('');
  const [postImage, setPostImage] = useState(null);

  const [toastMessage, setToastMessage] = useState(null);
  const [openToast, setOpenToast] = useState(false);

  const handlePostSubmit = () => {
    setToastMessage('Post Created!');
    setOpenToast(true);
    onClose();
  };

  const handleCloseToast = () => {
    setOpenToast(false);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ width: 500, margin: 'auto', padding: 4, backgroundColor: 'white', mt: 8 }}>
      <TextField
            fullWidth
            label="Enter Patient Notes"
            multiline
            rows={4}
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            margin="dense"
          />
          <Button variant="outlined" component="label" sx={{ marginTop: 2 }}>
            Upload Image
            <input type="file" hidden onChange={(e) => setPostImage(e.target.files[0])} />
          </Button>
          {postImage && <Typography variant="body2">Image: {postImage.name}</Typography>}
          <Box sx={{ marginTop: 2 }}>
            <Button variant="contained" onClick={handlePostSubmit} color="primary">
              Submit
            </Button>
            <Button variant="text" onClick={onClose} sx={{ marginLeft: 2 }}>
              Cancel
            </Button>
          </Box>

        <Snackbar open={openToast} autoHideDuration={3000} onClose={handleCloseToast} message={toastMessage} />
      </Box>
    </Modal>
  );
};

export default CreatePostModal;