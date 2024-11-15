import React from 'react';
import SongCard from './SongCard';

const SongList = ({ songs }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {songs.map(song => (
        <SongCard key={song.id} song={song} />
      ))}
    </div>
  );
};

export default SongList;
