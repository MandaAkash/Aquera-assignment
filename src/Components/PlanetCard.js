// PlanetCard.js
import React from 'react';
import { useNavigate} from 'react-router-dom';
import "./PlanetCard.css"
const PlanetCard = ({ planet,setResidents,setFilms }) => {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate('/resident')
    setResidents(planet.residents);
  }
  const handleFilms=()=>{
    setFilms(planet.films)
    console.log(planet.films)
    navigate('/films')
  }
  return (
    <div className="card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq4A9rITLV5WVieY8sQql-Vjy4e41u6ce4zQ&usqp=CAU" alt="Avatar" style={{ width: "300px","backgroundSize":"cover","height":"130px","borderRadius":"10px"}} />
      <div className='container'>
      <h2 style={{"textAlign":"center"}}>{planet.name}</h2>
      <div style={{"marginBottom":"40px","marginLeft":"20px"}}>
          <p><strong>Climate:</strong> {planet.climate}</p>
          <p><strong>Terrain:</strong> {planet.terrain}</p>
          <p><strong>Population:</strong> {planet.population}</p>
        </div>
      <div className="button-container">
          <button onClick={handleFilms} style={{ cursor: "pointer", marginBottom: "10px", padding: "15px", borderRadius: "10px", "marginRight":"-5px" ,"backgroundColor":"yellow"}}>Films</button>
          <button onClick={handleClick} style={{ cursor: "pointer", marginBottom: "10px", padding: "15px", borderRadius: "10px","marginLeft":"80px","backgroundColor":"yellow" }}>Residents</button>
        </div>
      </div>
    </div>
  );
};
export default PlanetCard;
