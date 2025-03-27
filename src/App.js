import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import Login from './pages/Login';
import UserList from './pages/UserList';
import EditUser from './pages/EditUser';
function App() {
  return (
    <BrowserRouter>
          <AuthProvider>
            <Toaster position="top-right" />
            <Routes>
              <Route path="/" element={<Login />} />
              <Route
                path="/users"
                element={
                  <ProtectedRoute>
                    <UserList />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/users/:id/edit"
                element={
                  <ProtectedRoute>
                    <EditUser />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Navigate to="/users" replace />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
  );
}

export default App;
