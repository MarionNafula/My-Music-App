import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

const Home = ({ songs, onSongClick, searchQuery }) => {
  // Filter songs based on the search query
  const filteredSongs = songs.filter(song => 
    song.Song.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.Artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.Genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Header />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SongList songs={filteredSongs} onSongClick={onSongClick} />
    </div>
  );
};

const App = () => {
  const [songs, setSongs] = useState([]);
  const [selectedSong, setSelectedSong] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
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
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              songs={songs}
              onSongClick={handleSongClick}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          }
        />
        <Route path="/about" element={<div><h2>About Us</h2><p>Information about the music website.</p></div>} />
        <Route path="/genres" element={<div><h2>Genres</h2><p>Explore various music genres.</p></div>} />
        <Route path="/artists" element={<div><h2>Artists</h2><p>List of popular artists.</p></div>} />
      </Routes>
      {selectedSong && <SongDetail song={selectedSong} />}
      <Footer />
    </Router>
  );
};

export default App;
