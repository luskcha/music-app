import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import api from '../../services/api';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await api.post('/auth/register', { username, password, email });
            await login(username, password);
            navigate('/');
        } catch (error) {
            console.error('Failed to register:', error);
            alert('Failed to register. Please check your network connection and try again.');
        }
    };

    return (
        <div className="container">
            <h2 className="title">Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input
                            className="input"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input
                            className="input"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button className="button is-link" type="submit">Register</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;
