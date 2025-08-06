import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Add your registration logic here
    navigate('/login');
  };

  return (
    <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h2 style={{ textAlign: 'center' }}>Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
        style={{ padding: '8px', borderRadius: '6px', border: '1px solid #ccc' }}
      />
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
        Register
      </button>
      <button
        type="button"
        onClick={() => navigate('/login')}
        style={{ padding: '10px', borderRadius: '6px', background: '#f0f2f5', color: '#007bff', border: '1px solid #007bff' }}
      >
        Back to Login
      </button>
    </form>
  );
};

export default Register;
