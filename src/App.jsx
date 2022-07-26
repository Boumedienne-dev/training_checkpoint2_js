import './App.css';
import GameList from './components/GameList';
import GameDetails from './components/GameDetails';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
      <header>
        <h1>Welcome to The Game</h1>
        </header>
        <Routes>
          <Route path='/' element={<GameList />} />
          <Route path='/games/:id' element={<GameDetails />} />

        </Routes>
      </div>  
  </Router>
  );
}

export default App;
