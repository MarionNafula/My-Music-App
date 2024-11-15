import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import AddSongForm from './components/AddSongForm';
import Genres from './components/Genres';  // Import Genres Component

const Home = ({ songs, onSongClick }) => (
  <div>
    <SongList songs={songs} onSongClick={onSongClick} />
  </div>
);

const About = () => <div><h2>About Us</h2><p>This React Music Website is designed as a modern, interactive platform for users to explore a wide variety of songs from different genres, artists, and styles. The primary goal of this project is to showcase a clean and intuitive user interface that allows music lovers to easily search for, discover, and manage a personal collection of songs.</p></div>;
const Artists = () =>
 <div>
    <h2>Artists</h2>
    <p>Based on the song data provided in the db.json, here are the artists featured on the website:.</p>
    <ul>
      <li>Victony</li>
      <li>Tempoe</li>
      <li>Bayani</li>
      <li>1da Banton</li>
      <li>Ruger</li>
      <li>Burna Boy</li>
      <li>Bad and Bouje</li>
      <li>Dababy</li>
      <li>Rae Sremmurd</li>
      <li>Pop Smoke</li>
      <li>Post Malone</li>
      <li>Ozuna</li>
      <li>Natti Natasha</li>
      <li>J Balvin</li>
    </ul>
  </div>;

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

  const addSong = (newSong) => {
    setSongs([...songs, { ...newSong, id: (songs.length + 1).toString() }]);
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
      <AddSongForm addSong={addSong} />
      <Routes>
        <Route path="/" element={<Home songs={filteredSongs} onSongClick={handleSongClick} />} />
        <Route path="/about" element={<About />} />
        <Route path="/genres" element={<Genres />} /> {/* Genres Route */}
        <Route path="/artists" element={<Artists />} />
      </Routes>
      {selectedSong && <SongDetail song={selectedSong} />}
      <Footer />
    </Router>
  );
};

export default App;
