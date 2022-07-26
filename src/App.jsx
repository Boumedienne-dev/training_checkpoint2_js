import './App.css';
import GameList from './components/GameList';
import GameDetail from './components/GameDetail';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";



function App() {
  return (
    <Router>
      <div>
      <Header name='React Game' />
        <Routes>
          <Route path='/' element={<GameList />} />
          <Route path='/games/:id' element={<GameDetail />} />
        </Routes>
      </div>  
  </Router>
  );
}

export default App;
