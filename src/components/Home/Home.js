import React, { useEffect, useState } from 'react';

const Home = () => {
    // Show users from server 2.1
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    return (
        <div>
            <h1>Available Users: {users.length}</h1>
            <ul>
                {
                    users.map(user => <li key={user._id}>{user.name} || {user.email}</li>)
                }
            </ul>
        </div>
    );
};

export default Home;