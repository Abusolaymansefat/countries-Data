import React, { use } from 'react'

function Countrice({countriesPromise}) {
          const countriesData = use(countriesPromise)
          const countries = countriesData.countries
          console.log(countries)
  return (
    <div>
      <h1>Countrice Component: {countries.length} countries</h1>
    </div>
  )
}

export default Countrice

