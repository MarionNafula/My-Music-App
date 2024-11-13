import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', backgroundColor: '#333', color: 'white' }}>
      <div>
        <h2>Music Website</h2>
      </div>
      <ul style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 0 }}>
        <li style={{ margin: '0 15px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        </li>
        <li style={{ margin: '0 15px' }}>
          <Link to="/genres" style={{ color: 'white', textDecoration: 'none' }}>Genres</Link>
        </li>
        <li style={{ margin: '0 15px' }}>
          <Link to="/artists" style={{ color: 'white', textDecoration: 'none' }}>Artists</Link>
        </li>
        <li style={{ margin: '0 15px' }}>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
