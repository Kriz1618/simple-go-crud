import React, { useState, useEffect } from 'react';

import './index.css';

const App = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await fetch(import.meta.env.VITE_API + '/users', {
      method: 'POST',
      body: JSON.stringify({ name }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    setName('');

    await loadUsers();
  }

  async function loadUsers() {
    const response = await fetch(import.meta.env.VITE_API + "/users");
    const data = await response.json();

    setUsers(data.users || []);
  }

  useEffect(() => {
    loadUsers()
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Type your name' value={name} onChange={e => setName(e.target.value)} />
        <button>Save</button>
      </form>

      <ul>
        {users.map(user => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;