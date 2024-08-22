import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, useMediaQuery, Grid } from '@mui/material';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import HealthNews from './components/HealthNews';
import BriefcasePage from './pages/BriefcasePage';
import Feed from './pages/Feed';
import Home from './pages/Home';
import Networks from './pages/Networks';
import NetworkPage from './pages/NetworkPage';
import ProvidersPage from './pages/ProvidersPage';
import LoginForm from './pages/LoginForm';
import MessagesPage from './pages/MessagesPage';
import ConversationPage from './pages/ConversationPage';
import NotificationsPage from './pages/NotificationsPage';
import SettingsPage from './pages/SettingsPage';
import CalendarPage from './pages/CalendarPage';
import EventDetails from './pages/EventDetails';
import HelpPage from './pages/HelpPage';
import ProfilePage from './pages/ProfilePage';

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
            <Route path="/briefcase" element={<BriefcasePage />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/networks" element={<Networks />} />
            <Route path="/providers" element={<ProvidersPage />} />
            <Route path="/network/:id" element={<NetworkPage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/messages/:id" element={<ConversationPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/event" element={<EventDetails />} />
            <Route path="/help" element={<HelpPage />} />     
            <Route path="/profile/:id" element={<ProfilePage />} />   
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
