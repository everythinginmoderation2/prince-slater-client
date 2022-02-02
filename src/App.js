import './App.css';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import HomePage from './Pages/HomePage';
import Streaming from './Pages/Streaming';
import Upcoming from './Pages/Upcoming';
import Partners from './Pages/Partners';

import { Routes, Route } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Chilanka',
      'cursive',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<HomePage />} />
           <Route path='/streaming' element={<Streaming />} />
           <Route path='/upcoming' element={<Upcoming />} />
          <Route path='/partners' element={<Partners />} />
        </Routes>
      </div>
      <div className="bright-border-bottom-double"></div>
    </ThemeProvider>
  );
}

export default App;
