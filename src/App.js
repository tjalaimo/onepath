import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, useMediaQuery, Grid } from '@mui/material';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import HealthNews from './components/HealthNews';
import Briefcase from './pages/Briefcase';
import Feed from './pages/Feed';
import Home from './pages/Home';
import Networks from './pages/Networks';
import NetworkPage from './pages/NetworkPage';
import Providers from './pages/Providers';
import LoginForm from './pages/LoginForm';

function App() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Router>
      <CssBaseline />
      <NavBar />
      <Grid container spacing={2} sx={{ pt: 8 }}>
        {!isSmallScreen && (
          <Grid item xs={2} sx={{ }}>
            <Sidebar /> {/* Left sidebar with user information */}
          </Grid>
        )}

        <Grid item xs={12} md={7}>        
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/briefcase" element={<Briefcase />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/networks" element={<Networks />} />
            <Route path="/providers" element={<Providers />} />
            <Route path="/network" element={<NetworkPage />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </Grid>

        {!isSmallScreen && (
          <Grid item xs={3} sx={{}}>
            <HealthNews /> {/* Right sidebar with Health News */}
          </Grid>
        )}
      </Grid>
    </Router>
  );
}

export default App;
