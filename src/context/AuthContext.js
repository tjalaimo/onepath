import React, { createContext, useContext, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const navigate = useNavigate();

  const login = (userData) => {
    dispatch({ type: 'LOGIN', payload: userData });
    
    if (userData.role === 'provider') {
      navigate('/provider/home');
    } else {
      navigate('/');
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user: state.user, isAuthenticated: state.isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
