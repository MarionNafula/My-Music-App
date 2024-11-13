import React from 'react';

const SongList = ({ songs, onSongClick }) => {
  return (
    <div>
      <h2>Song List</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {songs.map(song => (
          <li key={song.id} style={{ margin: '10px 0', cursor: 'pointer' }} onClick={() => onSongClick(song)}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={song.Cover} alt={song.Song} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
              <span>{song.Song} by {song.Artist}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
