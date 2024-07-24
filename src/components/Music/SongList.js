import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const SongList = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchSongs = async () => {
            const response = await api.get('/songs');
            setSongs(response.data);
        };

        fetchSongs();
    }, []);

    return (
        <div>
            <h2>Song List</h2>
            <ul>
                {songs.map(song => (
                    <li key={song.id}>
                        {song.title} by {song.artist}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SongList;
