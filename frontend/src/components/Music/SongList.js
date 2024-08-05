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
        <div className="container">
            <h2 className="title">Song List</h2>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map(song => (
                        <tr key={song.id}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SongList;
