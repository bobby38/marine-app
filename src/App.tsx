import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import AuthPage from './pages/AuthPage';
import BecomeProviderPage from './pages/BecomeProviderPage';
import ProviderDashboardPage from './pages/provider/ProviderDashboardPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserDashboard from './pages/user/UserDashboard';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProfilePage from './pages/ProfilePage';
import BookingsPage from './pages/BookingsPage';
import TestPage from './pages/TestPage';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { servicesData } from './data/servicesData';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage services={servicesData} />} />
              <Route path="/services/:id" element={<ServiceDetailPage services={servicesData} />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/become-provider" element={<BecomeProviderPage />} />
              <Route path="/provider/signup" element={<BecomeProviderPage />} />
              <Route path="/provider/dashboard/*" element={<ProviderDashboardPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/admin/dashboard/*" element={<AdminDashboard />} />
              <Route path="/user/dashboard/*" element={<UserDashboard />} />
              <Route path="/bookings" element={<BookingsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/test" element={<TestPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </Router>
      </AuthProvider>

      {/* Chat toggle button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg transition-colors z-50 text-3xl"
        title="Chat with us"
      >
        💬
      </button>

      {/* Dummy chat window */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-4 w-96 max-w-full bg-white text-black rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-300">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 flex justify-between items-center">
            <span className="font-semibold">Chat Support</span>
            <button onClick={() => setIsChatOpen(false)} className="text-white font-bold text-xl">×</button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-2">
            <div className="bg-gray-100 text-black p-3 rounded-2xl self-start max-w-xs shadow">
              Hello! How can we assist you today?
            </div>
            <div className="bg-blue-600 text-white p-3 rounded-2xl self-end max-w-xs shadow">
              I have a question about your services.
            </div>
          </div>
          <div className="p-2 border-t border-gray-300 dark:border-gray-700 flex">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 rounded-l-lg border border-gray-300 dark:border-gray-700 focus:outline-none"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r-lg">
              Send
            </button>
          </div>
        </div>
      )}
    </ThemeProvider>
  );
};

export default App;
