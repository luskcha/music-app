import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Albums from './components/Music/Albums';
import Songs from './components/Music/Songs';
import Artists from './components/Music/Artists';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Albums />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/artists" element={<Artists />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

