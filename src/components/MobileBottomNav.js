import React from 'react';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FeedIcon from '@mui/icons-material/Feed';
import GroupIcon from '@mui/icons-material/Group';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { useNavigate } from 'react-router-dom';

const MobileBottomNav = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleNavChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) navigate('/briefcase');
    if (newValue === 1) navigate('/feed');
    if (newValue === 2) navigate('/networks');
    if (newValue === 3) navigate('/providers');
  };

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation value={value} onChange={handleNavChange}>
        <BottomNavigationAction label="Briefcase" icon={<MedicalServicesIcon />} />
        <BottomNavigationAction label="Feed" icon={<FeedIcon />} />
        <BottomNavigationAction label="Networks" icon={<GroupIcon />} />
        <BottomNavigationAction label="Providers" icon={<LocalHospitalIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default MobileBottomNav;