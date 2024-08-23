import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const ProtectedRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          navigate('/login')
        )
      }
    />
  );
};

export default ProtectedRoute;
