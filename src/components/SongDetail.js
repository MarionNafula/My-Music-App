import React from 'react';

const SongDetail = ({ song }) => {
  return (
    <div style={{ marginLeft: '20px' }}>
      <h2>Now Playing</h2>
      <div>
        <img src={song.Cover} alt={song.Song} style={{ width: '200px', height: '200px' }} />
        <h3>{song.Song}</h3>
        <p><strong>Artist:</strong> {song.Artist}</p>
        <p><strong>Genre:</strong> {song.Genre}</p>
      </div>
    </div>
  );
};

export default SongDetail;
