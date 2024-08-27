import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import LoginForm from './pages/LoginPage';
import MessagesPage from './pages/MessagesPage';
import ConversationPage from './pages/ConversationPage';
import NotificationsPage from './pages/NotificationsPage';
import SettingsPage from './pages/SettingsPage';
import CalendarPage from './pages/CalendarPage';
//import EventDetails from './pages/EventDetails';
import HelpPage from './pages/HelpPage';
import ProfilePage from './pages/ProfilePage';
import MyHealth from './pages/MyHealth';
import AIAssistant from './pages/AIAssistant';
import ProviderHome from './pages/ProviderHome';
import PatientList from './pages/PatientList';
import PatientDetails from './pages/PatientDetails';
import ForumsPage from './pages/ForumsPage';
import ForumPage from './pages/ForumPage';
import ForumPostPage from './pages/ForumPostPage';
import FormsPage from './pages/FormsPage';
import FormPage from './pages/FormPage';
import AppointmentDetailPage from './pages/AppointmentDetailPage';

import { AuthProvider } from './context/AuthContext';

function App() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Router>
      <CssBaseline />
      <AuthProvider>
        <NavBar />
        <Grid container spacing={2} sx={{ pt: 4 }}>
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
              <Route path="/myhealth" element={<MyHealth />} />
              <Route path="/network/:id" element={<NetworkPage />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/messages" element={<MessagesPage />} />
              <Route path="/assistant" element={<AIAssistant />} />
              <Route path="/messages/:id" element={<ConversationPage />} />
              <Route path="/notifications" element={<NotificationsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/help" element={<HelpPage />} />     
              <Route path="/profile/:id" element={<ProfilePage />} />

              {/* provider specific */}
              <Route  path="/provider/home" element={<ProviderHome />} />
              <Route  path="/provider/patientlist" element={<PatientList />} />
              <Route  path="/provider/patient/:id" element={<PatientDetails />} />
              <Route path="/provider/documents" element={<FormsPage />} />
              <Route path="/provider/document/:form" element={<FormPage />} />
              <Route path="/provider/forums" element={<ForumsPage />} />
              <Route path="/provider/forum/:id" element={<ForumPage />} />
              <Route path="/provider/forum/post/:id" element={<ForumPostPage />} />
              <Route path="/provider/appointment/:id" element={<AppointmentDetailPage />} />
            </Routes>
          </Grid>

          {!isSmallScreen && (
            <Grid item xs={3} sx={{}}>
              <HealthNews /> {/* Right sidebar with Health News */}
            </Grid>
          )}
        </Grid>
      </AuthProvider>
    </Router>
  );
}

export default App;
