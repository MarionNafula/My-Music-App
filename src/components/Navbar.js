import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', backgroundColor: '#333', color: 'white' }}>
      <div>
        <h2>Music Website</h2>
      </div>
      <ul style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 0 }}>
        <li style={{ margin: '0 15px' }}>
          <button style={{ color: 'white', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer' }}>Home</button>
        </li>
        <li style={{ margin: '0 15px' }}>
          <button style={{ color: 'white', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer' }}>Genres</button>
        </li>
        <li style={{ margin: '0 15px' }}>
          <button style={{ color: 'white', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer' }}>Artists</button>
        </li>
        <li style={{ margin: '0 15px' }}>
          <button style={{ color: 'white', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer' }}>About</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
