import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    // Find User 4.1
    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    }, []);

    // Update User 4.2
    const handleUpdateUser = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;

        const updatedUser = { name, email };

        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method: 'PUT', // (Use PUT only for update user)
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success', data);
                alert('User Updated successfully!!!');
                event.target.reset();
            })
    }

    return (
        <div>
            <h2>Updating user: {user.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name='name' placeholder='Name' required />
                <br />
                <input type="email" name='email' placeholder='Email' required />
                <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default UpdateUser;