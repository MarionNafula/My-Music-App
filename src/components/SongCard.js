import React from 'react';

const SongCard = ({ song, onClick }) => {
  return (
    <div 
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        margin: '10px',
        padding: '15px',
        maxWidth: '300px',
        textAlign: 'center',
        cursor: 'pointer',
      }}
      onClick={() => onClick(song)}
    >
      <img 
        src={song.Cover} 
        alt={song.Song} 
        style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
      />
      <h3>{song.Song}</h3>
      <p><strong>Artist:</strong> {song.Artist}</p>
      <p><strong>Genre:</strong> {song.Genre}</p>
    </div>
  );
};

export default SongCard;
