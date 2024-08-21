import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1877F2', // Facebook-like Blue
    },
    background: {
      default: '#F0F2F5', // Light gray background
    },
    text: {
      primary: '#050505', // Dark text
    },
  },
  shape: {
    borderRadius: 12, // Modern rounded corners
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
