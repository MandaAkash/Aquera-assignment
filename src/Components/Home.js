import React,{useState,useEffect} from 'react'
import PlanetCard from './PlanetCard';
import Pagination from './Pagination';
function Home({residents,setResidents,setFilms}) {
  const [planets, setPlanets] = useState([]);
  const [nextPage, setNextPage] = useState('');
  useEffect(() => {
    fetchPlanets('https://swapi.dev/api/planets/?format=json');
  }, []);

  const fetchPlanets = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPlanets(data.results);
      setNextPage(data.next);
    } catch (error) {
      console.error('Error fetching planets:', error);
    }
  };
  const handleNextPage = () => {
    if (nextPage) {
      fetchPlanets(nextPage);
    }
  };
  return (
    <div style={{"backgroundColor": "#4800ff"}} className='maincontainer'>
      <h1 style={{"textAlign":"center","margin":"0px","padding":"50px"}}>Planets Directory</h1>
      <div className="planet-container"> 
        {planets.map((planet, index) => (
          <PlanetCard key={index} planet={planet} setResidents={setResidents} setFilms={setFilms}/>
        ))}
      </div>
      <div style={{"textAlign":"center","marginTop":"15px"}}>
        <Pagination onNextPage={handleNextPage}/>
      </div>
    </div>
  )
}

export default Home;
