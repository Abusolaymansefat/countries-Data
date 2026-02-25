
import { Suspense } from 'react';
import './App.css'
import Countrice from './components/Countrice/Countrice';

const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
.then(res => res.json())

function App() {
  

  return (
    <>
      <Suspense fallback={<h1>loading...</h1>}>
        <Countrice countriesPromise={countriesPromise}/>
      </Suspense>
    </>
  )
}

export default App
