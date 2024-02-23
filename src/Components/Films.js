import React, { useState, useEffect } from 'react';
import './filmcard.css'
function Films({ films }) {
  const [filmDetails, setFilmDetails] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    const fetchFilmDetails = async () => {
      try {
        const promises = films.map(async (filmUrl) => {
          const response = await fetch(filmUrl);
          const data = await response.json();
          return {
            title: data.title,
            director: data.director,
            producer: data.producer,
            release_date: data.release_date
          };
        });
        const filmDetails = await Promise.all(promises);
        setFilmDetails(filmDetails);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching film details:', error);
      }
    };
    fetchFilmDetails();
  }, [films]);
  if(loading){
    return(
      <div>
        <h1 style={{"textAlign":"center"}}>Please Wait While We Fetch Some Details For You...</h1>
      </div>
    )
  }
  return (
      <div className='film-container'>
      <h2 style={{ textAlign: "center","margin":"0px","padding":"50px" }}>Planet Films</h2>
      <div className='films'>
          {filmDetails.map((film, index) => (
            <div className='film-card' key={index}>
              <div>
              <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQPs-qX5eTCSliDtYPhAEXHT3SW810GFHbma-ejB3lZb7h3rZQm&psig=AOvVaw0WevJzBdGnTaw9kfm_Xb5K&ust=1708769082722000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDkqYWbwYQDFQAAAAAdAAAAABAS' alt='film' style={{"width":"300px","height":"180px","marginBottom":"20px"}}/>
              </div>
              <strong>Film Name:</strong> {film.title}<br />
              <strong>Director:</strong> {film.director}<br />
              <strong>Producer:</strong> {film.producer}<br />
              <strong>Release Date:</strong> {film.release_date}<br />
            </div>
          ))}
      </div>
    </div>
  );
}
export default Films;


