import React from 'react';
import './Country.css'

const Country = ({ country }) => {
          // console.log(country.population.population)

          const handleVisited = () => {
                    console.log('visited', country.name.common)
          }
          return (
                    <div className='country'>
                              <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
                              <h4>Country Component: {country.name.common}</h4>
                              <p>population: {country.population.population}</p>
                              <p>Area: {country.area.area} {country.area.area > 3000 ? "Large Country" : "Small Country"}</p>
                              <button onClick={handleVisited}>Mark as visited</button>
                    </div>
          );
};

export default Country;
