import React, { useState } from 'react';
import axios from 'axios';
import 'bulma/css/bulma.min.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        username,
        password,
      });

      if (response.status === 200) {
        setMessage('Login successful');
        // Redirige a la página de álbumes después del inicio de sesión exitoso
        navigate('/albums');
      }
    } catch (error) {
      setMessage('Failed to login. Please check your username and password.');
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2 className="title is-2">Music App</h2>
      <h3 className="subtitle is-3">Login</h3>

      {message && (
        <div className={`notification ${message.includes('successful') ? 'is-success' : 'is-danger'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="control">
          <button type="submit" className="button is-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
