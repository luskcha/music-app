import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
    const { auth, logout } = useContext(AuthContext);

    return (
        <nav className="navbar is-dark">
            <div className="navbar-brand">
                <h1 className="navbar-item">Music App</h1>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" to="/">Home</Link>
                    {!auth ? (
                        <>
                            <Link className="navbar-item" to="/login">Login</Link>
                            <Link className="navbar-item" to="/register">Register</Link>
                        </>
                    ) : (
                        <>
                            <Link className="navbar-item" to="/profile">Profile</Link>
                            <Link className="navbar-item" to="/songs">Songs</Link>
                            <button className="button is-light" onClick={logout}>Logout</button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
