import './App.css';
import HomePage from '../Pages/HomePage/HomePage';
import AboutMePage from '../Pages/AboutMePage/AboutMePage';
import PerformancePage from '../Pages/PerformancePage/PerformancePage';
import LessonsPage from '../Pages/LessonsPage/LessonsPage';
import StreamPage from '../Pages/StreamPage/StreamPage';
import AboutWebPage from '../Pages/AboutWebPage/AboutWebPage';
// import Youtube from '../Components/MediaPlayers/Youtube/Youtube';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/live' element={<PerformancePage />} />
        <Route path='/lessons' element={<LessonsPage />} />
        <Route path='/stream' element={<StreamPage />} />
        <Route path='/about' element={<AboutMePage />} />
        <Route path='/dev' element={<AboutWebPage />} />
        {/* <Route path='/youtube' element={<Youtube />} /> */}
      </Routes>
    </div>
  );
}

export default App;
