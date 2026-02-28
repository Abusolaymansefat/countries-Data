
import { Suspense } from 'react';
import './App.css'
import Countrice from './components/Countrice/Countrice';
import WaterBottles from './components/waterBottles/WaterBottles';

// const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
// .then(res => res.json())

const waterBottlesPromise = fetch('bottle.json')
.then(res => res.json())

function App() {
  

  return (
    <>
      {/* <Suspense fallback={<h1>loading...</h1>}>
        <Countrice countriesPromise={countriesPromise}/>
      </Suspense> */}

      <Suspense fallback={<h1>Loading Water Bottles...</h1>}>
        <WaterBottles waterBottlesPromise={waterBottlesPromise}/>
      </Suspense>
    </>
  )
}

export default App
