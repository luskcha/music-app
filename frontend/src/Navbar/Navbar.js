import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          Music App
        </Link>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/albums">
            Albums
          </Link>
          <Link className="navbar-item" to="/songs">
            Songs
          </Link>
          <Link className="navbar-item" to="/artists">
            Artists
          </Link>
        </div>

        <div className="navbar-end">
          <Link className="navbar-item" to="/login">
            Login
          </Link>
          <Link className="navbar-item" to="/register">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
