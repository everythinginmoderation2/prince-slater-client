import './App.css';
import HomePage from '../Pages/HomePage/HomePage';
import BookingPage from '../Pages/BookingPage/BookingPage';
import StreamPage from '../Pages/StreamPage/StreamPage';
import Apple from '../Components/MediaPlayers/Apple/Apple'
import Amazon from '../Components/MediaPlayers/Amazon/Amazon'
import Spotify from '../Components/MediaPlayers/Spotify/Spotify';
import Soundcloud from '../Components/MediaPlayers/Soundcloud/Soundcloud'
import Youtube from '../Components/MediaPlayers/Youtube/Youtube';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route exact path='/booking' element={<BookingPage />} />
          <Route path='/' element={<HomePage/>} />
          <Route path='/stream' element={<StreamPage />} />
          <Route path='/apple' element={<Apple/>} />
          <Route path='/amazon' element={<Amazon/>} />
          <Route path='/soundcloud' element={<Soundcloud />} />
           <Route path='/spotify' element={<Spotify />} />
          <Route path='/youtube' element={<Youtube />} />
        </Routes>
      </div>
  );
}

export default App;
