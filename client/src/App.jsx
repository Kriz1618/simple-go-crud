import React from 'react'

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={async () => {
        const response = await fetch('http://localhost:3000/users');
        const data = await response.json();
        console.log('data', data);
      }}>Get data</button>

    </div>
  )
}

export default App;