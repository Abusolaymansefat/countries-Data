import React, { use } from 'react'
import Country from '../Country/Country'
import './Countries.css'

function Countrice({countriesPromise}) {
          const countriesData = use(countriesPromise)
          const countries = countriesData.countries
          // console.log(countries)
  return (
    <div>
      <h1>Countrice Component: {countries.length} countries</h1>

      <div className='countries'>
        {
          countries.map(country => <Country key={country.cca3.cca3} country ={country}></Country>)
      }
      </div>
    </div>
  )
}

export default Countrice

