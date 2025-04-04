import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import AuthPage from './pages/AuthPage';
import BecomeProviderPage from './pages/BecomeProviderPage';
import ProviderDashboard from './pages/provider/ProviderDashboard';
import ProviderDashboardPage from './pages/provider/ProviderDashboardPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserDashboard from './pages/user/UserDashboard';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProfilePage from './pages/ProfilePage';
import BookingsPage from './pages/BookingsPage';
import TestPage from './pages/TestPage';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { servicesData } from './data/servicesData';

// Protected route component
const ProtectedRoute: React.FC<{
  children: React.ReactNode;
  requiredRole: 'user' | 'provider' | 'admin';
}> = ({ children, requiredRole }) => {
  const { user, isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }
  
  if (requiredRole && user?.role !== requiredRole) {
    return <Navigate to="/profile" replace />;
  }
  
  return <>{children}</>;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage services={servicesData} />} />
      <Route path="/services/:id" element={<ServiceDetailPage services={servicesData} />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/become-provider" element={<BecomeProviderPage />} />
      <Route path="/provider/signup" element={<BecomeProviderPage />} />
      <Route 
        path="/provider/dashboard" 
        element={
          <ProtectedRoute requiredRole="provider">
            <ProviderDashboardPage />
          </ProtectedRoute>
        } 
      />
      <Route path="/profile" element={<ProfilePage />} />
      <Route 
        path="/admin/dashboard" 
        element={
          <ProtectedRoute requiredRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        } 
      />
      <Route path="/user/dashboard" element={<UserDashboard />} />
      <Route path="/bookings" element={<BookingsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Layout>
            <AppRoutes />
          </Layout>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
