// front-end, just test
import React, { useState, useEffect } from 'react';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8887/api/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div>
            {users.map(user => (
                <div key={user.name}>
                    <h2>{user.name}</h2>
                    <p>{user.age}</p>
                </div>
            ))}
        </div>
    );
}

export default App;