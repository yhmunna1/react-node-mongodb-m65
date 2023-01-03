import React, { useEffect, useState } from 'react';

const Home = () => {
    // Show users from server 2.1
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    // Delete User by using id 3.1
    const handleUserDelete = id => {
        const proceed = window.confirm('Are you sure you want to DELETE?');
        if (proceed) {
            console.log('ID', id);
            // 3.2
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('Deleted');
                        const remaining = users.filter(user => user._id !== id);
                        setUsers(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <h1>Available Users: {users.length}</h1>
            <ul>
                {
                    users.map(user => <li key={user._id}>
                        {user.name} || {user.email}
                        <button onClick={() => handleUserDelete(user._id)}>X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Home;