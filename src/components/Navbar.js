import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', backgroundColor: '#333', color: 'white' }}>
      <div>
        <h2>Music Website</h2>
      </div>
      <ul style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 0 }}>
        <li style={{ margin: '0 15px' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
        </li>
        <li style={{ margin: '0 15px' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Genres</a>
        </li>
        <li style={{ margin: '0 15px' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Artists</a>
        </li>
        <li style={{ margin: '0 15px' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
