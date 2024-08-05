import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bulma/css/bulma.min.css';
import { useParams } from 'react-router-dom';

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams(); // Obtener el ID del álbum desde la URL

  useEffect(() => {
    // Función para obtener las canciones de un álbum desde la API
    const fetchSongs = async () => {
      try {
        const response = await axios.get(`https://sandbox.academiadevelopers.com/harmonyhub/albums/${id}/songs/`);
        setSongs(response.data);
      } catch (err) {
        setError('Failed to load songs');
        console.error(err);
      }
    };

    fetchSongs();
  }, [id]);

  return (
    <div className="container">
      <h2 className="title is-2">Songs</h2>
      {error && <p className="notification is-danger">{error}</p>}
      <div className="columns is-multiline">
        {songs.map((song) => (
          <div className="column is-half" key={song.id}>
            <div className="card">
              <div className="card-content">
                <p className="title is-5">{song.title}</p>
                <p className="subtitle is-6">Duration: {song.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Songs;
