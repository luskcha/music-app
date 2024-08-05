import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';

const Music = () => {
  // Lista de canciones (puedes reemplazar esto con una API o datos dinámicos)
  const [songs] = useState([
    { id: 1, title: 'Song One', artist: 'Artist A', url: 'song1.mp3' },
    { id: 2, title: 'Song Two', artist: 'Artist B', url: 'song2.mp3' },
    { id: 3, title: 'Song Three', artist: 'Artist C', url: 'song3.mp3' },
  ]);

  const [currentSong, setCurrentSong] = useState(null);

  const playSong = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className="container">
      <h2 className="title is-2">Music App</h2>
      <h3 className="subtitle is-3">Explore Music</h3>

      <div className="columns is-multiline">
        {songs.map((song) => (
          <div className="column is-one-third" key={song.id}>
            <div className="card">
              <div className="card-content">
                <p className="title is-4">{song.title}</p>
                <p className="subtitle is-6">by {song.artist}</p>
                <button
                  className="button is-link"
                  onClick={() => playSong(song)}
                >
                  Play
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {currentSong && (
        <div className="notification is-info">
          <strong>Now Playing:</strong> {currentSong.title} by {currentSong.artist}
          <audio controls autoPlay src={currentSong.url}>
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default Music;
