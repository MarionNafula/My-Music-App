import React from 'react';
import SongCard from './SongCard';

const SongList = ({ songs, onSongClick }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {songs.map(song => (
        <SongCard key={song.id} song={song} onClick={onSongClick} />
      ))}
    </div>
  );
};

export default SongList;
