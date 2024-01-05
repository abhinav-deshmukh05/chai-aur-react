import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter]= useState(0);
  //let counter =5

  const addValue =()=>{
    console.log("clicked"  + counter)
   setCounter(counter+1);
  }
  const remvalue = ()=>{
    if(counter<=0){return }
    console.log("decrease value" + counter);
    setCounter(counter-1);
  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>Count value : {counter}</h2>

    <button onClick={addValue}>Add value : {counter}</button>
    <br />
    <button onClick={remvalue}>Remove value : {counter}</button>
    </>
  )
}

export default App
