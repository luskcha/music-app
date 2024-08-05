import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Albums from './components/Albums';
import Songs from './components/Songs'; // Componente nuevo para las canciones
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/albums/:id/songs" element={<Songs />} /> {/* Ruta para canciones */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
