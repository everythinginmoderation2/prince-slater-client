import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import HomePage from './Pages/HomePage';
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
          <Route path='/partners' element={<Partners />} />
          {/* <Route path='/booking' element={<Booking />} /> */}
        </Routes>
      </div>
      <div className="bright-border-bottom-double"></div>
    </ThemeProvider>
  );
}

export default App;
