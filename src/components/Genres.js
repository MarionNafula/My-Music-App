import React from 'react';

const Genres = () => {
  const genres = [
    'Afrobeat', 'Pop', 'Hip Hop', 'Rock', 'Reggaeton', 'Jazz',
    'Classical', 'Electronic', 'R&B', 'Blues', 'Country', 'Soul',
    'Folk', 'Indie', 'Punk', 'Alternative'
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Explore Music Genres</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {genres.map((genre, index) => (
          <li key={index} style={{ margin: '10px 0', fontSize: '18px' }}>
            {genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Genres;
