import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import HomePage from './Pages/HomePage';
import Streaming from './Pages/Streaming';
import Gallery from './Pages/Gallery';
import Partners from './Pages/Partners';

import { Routes, Route } from "react-router-dom";

const theme = createMuiTheme({
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
           <Route path='/gallery' element={<Gallery />} />
          <Route path='/partners' element={<Partners />} />
        </Routes>
      </div>
      <div className="bright-border-bottom-double"></div>
    </ThemeProvider>
  );
}

export default App;
