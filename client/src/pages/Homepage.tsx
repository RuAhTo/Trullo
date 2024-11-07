import React from 'react';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <nav className='navbar'>
          <button onClick={() => navigate('/register')}>Register</button>
          <button onClick={() => navigate('/login')}>Log in</button>
        </nav>
      </header>
      <main>
        <h1>Welcome to Trullo</h1>
      </main>
    </>
  );
}

export default Homepage;
