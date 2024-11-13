import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';
import Footer from './components/Footer';

const App = () => {
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);

  useEffect(() => {
    // Fetch data from db.json
    axios.get('http://localhost:5000/Songs')
      .then(response => {
        setSongs(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSongClick = (song) => {
    setSelectedSong(song);
  };

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <SongList songs={songs} onSongClick={handleSongClick} />
        {selectedSong && <SongDetail song={selectedSong} />}
      </div>
      <Footer />
    </div>
  );
};

export default App;
