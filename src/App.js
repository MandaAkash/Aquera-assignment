// App.js
import React,{useState} from 'react';
import PlanetCard from './Components/PlanetCard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResidentList from './Components/ResidentList';
import Home from './Components/Home';
import './App.css'
import Films from './Components/Films';
const App = () => {
  const [residents, setResidents] = useState([]);
  const [films,setFilms] = useState([])
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home residents={residents} setResidents={setResidents} setFilms={setFilms}/>} />
        <Route path="/planetcard" element={<PlanetCard />} />
        <Route path="/resident" element={<ResidentList residents={residents}/>} />
        <Route path='/films' element={<Films films={films}/>}/>
      </Routes>
    </Router>
    </div>
  );
};

export default App;
