import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

const Home = ({ songs, onSongClick }) => (
  <div>
    <SongList songs={songs} onSongClick={onSongClick} />
  </div>
);

const About = () => <div><h2>About Us</h2><p>Information about the music website.</p></div>;
const Genres = () => <div><h2>Genres</h2><p>Explore various music genres.</p></div>;
const Artists = () => <div><h2>Artists</h2><p>List of popular artists.</p></div>;

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

  // Filter songs based on the search query
  const filteredSongs = songs.filter(song =>
    song.Song.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.Artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
    song.Genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <Navbar />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home songs={filteredSongs} onSongClick={handleSongClick} />} />
        <Route path="/about" element={<About />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/artists" element={<Artists />} />
      </Routes>
      {selectedSong && <SongDetail song={selectedSong} />}
      <Footer />
    </Router>
  );
};

export default App;
