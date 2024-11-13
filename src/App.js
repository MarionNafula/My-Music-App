import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SongList from './components/SongList';
import SongDetail from './components/SongDetail';
import Footer from './components/Footer';

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
        <Route path="/" element={<Home songs={songs} onSongClick={handleSongClick} />} />
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
