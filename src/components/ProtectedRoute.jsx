import React,{useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast  from 'react-hot-toast';
export const ProtectedRoute= ({ children }) => {
  const { token,logout } = useAuth();
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (token) {
        logout();
        toast.error('Session Expired');
      }
    }, 120000);
    return () => clearInterval(intervalId);
  }, [token, logout]);

  if (!token) {
    return <Navigate to="/" replace />;
  }



  return <>{children}</>;
};