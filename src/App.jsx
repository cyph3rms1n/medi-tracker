import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Appointment from './pages/Appointment.jsx';
import Prescription from './pages/Prescription.jsx';

const containerStyle = {
  minHeight: '100vh',
  minWidth: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#f0f2f5',
};

const contentStyle = {
  background: '#fff',
  color: '#222',
  padding: '32px',
  borderRadius: '12px',
  boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
  width: '100%',
  maxWidth: '400px',
  boxSizing: 'border-box',
};

const App = () => {
  return (
    <Router>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/appointments" element={<Appointment />} />
            <Route path="/prescriptions" element={<Prescription />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
