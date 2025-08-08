import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '32px',
      padding: '40px 0'
    }}>
      <h1 style={{
        fontSize: '2.8rem',
        fontWeight: 'bold',
        marginBottom: '16px',
        color: '#007bff',
        letterSpacing: '2px'
      }}>
        Medi Tracker
      </h1>
      <div style={{ display: 'flex', gap: '32px' }}>
        <button
          onClick={() => navigate('/login')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '24px 32px',
            fontSize: '1.2rem',
            borderRadius: '12px',
            border: 'none',
            background: '#007bff',
            color: '#fff',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}
        >
          <span role="img" aria-label="login" style={{ fontSize: '2rem', marginBottom: '8px' }}>🔑</span>
          Login
        </button>
        <button
          onClick={() => navigate('/register')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '24px 32px',
            fontSize: '1.2rem',
            borderRadius: '12px',
            border: 'none',
            background: '#28a745',
            color: '#fff',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}
        >
          <span role="img" aria-label="register" style={{ fontSize: '2rem', marginBottom: '8px' }}>📝</span>
          Register
        </button>
      </div>
    </div>
  );
};

export default Home;