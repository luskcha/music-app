import React, { useState } from 'react';
import axios from 'axios';
import 'bulma/css/bulma.min.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/auth/register', {
        username,
        email,
        password,
      });

      setSuccessMessage(response.data.message);
      setErrorMessage('');
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage(
        error.response ? error.response.data.message : error.message
      );
    }
  };

  return (
    <div className="container">
      <div className="column is-half is-offset-one-quarter">
        <div className="box">
          <h1 className="title has-text-centered">Music App</h1>
          <h2 className="subtitle has-text-centered">Register</h2>
          {errorMessage && (
            <div className="notification is-danger is-light">{errorMessage}</div>
          )}
          {successMessage && (
            <div className="notification is-success is-light">{successMessage}</div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Username</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
            </div>

            <div className="field is-grouped">
              <div className="control">
                <button type="submit" className="button is-primary">
                  Register
                </button>
              </div>
              <div className="control">
                <button type="reset" className="button is-light">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
