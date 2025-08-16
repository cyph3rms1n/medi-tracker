import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // login logic
    
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
        style={{ padding: '8px', borderRadius: '6px', border: '1px solid #ccc' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        style={{ padding: '8px', borderRadius: '6px', border: '1px solid #ccc' }}
      />
      <button type="submit" style={{ padding: '10px', borderRadius: '6px', background: '#007bff', color: '#fff', border: 'none' }}>
        Login
      </button>
      <button
        type="button"
        onClick={() => navigate('/register')}
        style={{ padding: '10px', borderRadius: '6px', background: '#f0f2f5', color: '#007bff', border: '1px solid #007bff' }}
      >
        Register
      </button>
    </form>
  );
};

export default Login;
