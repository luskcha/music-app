import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
    const { auth } = useContext(AuthContext);

    if (!auth) {
        return <p>You need to log in to see your profile.</p>;
    }

    return (
        <div className="container">
            <h2 className="title">Profile</h2>
            <p><strong>Username:</strong> {auth.username}</p>
            <p><strong>Email:</strong> {auth.email}</p>
        </div>
    );
};

export default Profile;
