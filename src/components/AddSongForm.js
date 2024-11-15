import React, { useState } from 'react';

const AddSongForm = ({ addSong }) => {
  const [newSong, setNewSong] = useState({
    id: '',
    Song: '',
    Genre: '',
    Artist: '',
    Cover: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSong({ ...newSong, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newSong.Song && newSong.Artist) {
      addSong(newSong);
      setNewSong({ id: '', Song: '', Genre: '', Artist: '', Cover: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px 0', textAlign: 'center' }}>
      <input
        type="text"
        name="Song"
        placeholder="Song Name"
        value={newSong.Song}
        onChange={handleChange}
        required
        style={{ marginRight: '10px' }}
      />
      <input
        type="text"
        name="Genre"
        placeholder="Genre"
        value={newSong.Genre}
        onChange={handleChange}
        required
        style={{ marginRight: '10px' }}
      />
      <input
        type="text"
        name="Artist"
        placeholder="Artist"
        value={newSong.Artist}
        onChange={handleChange}
        required
        style={{ marginRight: '10px' }}
      />
      <input
        type="text"
        name="Cover"
        placeholder="Cover URL"
        value={newSong.Cover}
        onChange={handleChange}
        style={{ marginRight: '10px' }}
      />
      <button type="submit" style={{ padding: '8px 15px' }}>Add Song</button>
    </form>
  );
};

export default AddSongForm;
