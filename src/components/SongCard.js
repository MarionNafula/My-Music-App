import React, { useState } from 'react';

const SongCard = ({ song }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div style={{ 
      border: '1px solid #ccc', 
      borderRadius: '8px', 
      padding: '15px', 
      margin: '10px', 
      width: '250px', 
      textAlign: 'center', 
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
    }}>
      <img 
        src={song.Cover} 
        alt={song.Song} 
        style={{ 
          width: '100%', 
          height: '250px', 
          objectFit: 'cover', 
          borderRadius: '8px 8px 0 0', 
        }} 
      />
      <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{song.Song}</h3>
      <p style={{ fontSize: '14px', margin: '5px 0' }}><strong>Artist:</strong> {song.Artist}</p>
      <p style={{ fontSize: '14px', margin: '5px 0' }}><strong>Genre:</strong> {song.Genre}</p>

      {/* Like and Dislike buttons section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
        <button 
          onClick={handleLike} 
          style={{ 
            flex: '1', 
            padding: '5px', 
            margin: '0 5px', 
            backgroundColor: '#28a745', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}
        >
          👍 Like ({likes})
        </button>
        <button 
          onClick={handleDislike} 
          style={{ 
            flex: '1', 
            padding: '5px', 
            margin: '0 5px', 
            backgroundColor: '#dc3545', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}
        >
          👎 Dislike ({dislikes})
        </button>
      </div>
    </div>
  );
};

export default SongCard;
