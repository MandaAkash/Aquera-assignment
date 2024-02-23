import React, { useState, useEffect } from 'react';
import "./ResidentList.css"
const ResidentList = ({ residents,films }) => {
  const [residentData, setResidentData] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    const fetchResidentData = async () => {
      try {
        const promises = residents.map(async (residentUrl) => {
          const response = await fetch(residentUrl);
          const data = await response.json();
          return data;
        });
        const residentData = await Promise.all(promises);
        setResidentData(residentData);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching resident data:', error);
      }
    };

    fetchResidentData();
  }, [residents]);
  if(loading)
  {
    return(
      <div>
        <h1 style={{"textAlign":"center"}}>Please wait for some time to fetch residents details...</h1>
      </div>
    )
  }
  if(residents.length===0) 
  {
    return(
      <div>
        <h1 style={{"textAlign":"center"}}>There are no residents</h1>
      </div>
    )
  }
  return (
    <div className='resident-container'>
    <h1 style={{"textAlign":"center","margin":"0px","padding":"50px"}}>Residents</h1>
    <div className="resident-list">
        {residentData.map((resident, index) => (
          <div key={index} className='resident-card'>
            <img src='https://c4.wallpaperflare.com/wallpaper/1005/778/557/star-wars-darth-vader-emperor-palpatine-stormtrooper-wallpaper-preview.jpg' alt='residents' style={{"width":"200px","height":"150px","borderRadius":"10px"}}/>
            <p>Name:{resident.name}</p> 
            <p>Height: {resident.height}</p>
            <p>Mass: {resident.mass}</p>
            <p>Gender: {resident.gender}</p>
          </div>
        ))}
    </div>
    </div>
  );
};

export default ResidentList;
