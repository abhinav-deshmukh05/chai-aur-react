import { useState } from "react"

function App() {
  const [color, setColor] = useState("black");

  return (
    
   <div className="w-full h-screen duration-200"
   style={{backgroundColor: color}}>
    <div className="fixed flex flex-wrap 
    justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center
      gap-3 shadow-lg bg-white px-3 py-2 
      rounded-3xl">
        <button onClick={() => setColor("red")} className="outline-none px-4 py-1 
        rounded-full text-white shadow-lg" 
        style={{backgroundColor:"red"}}>Red</button>
         <button onClick={() => setColor("green")} className="outline-none px-4 py-1 
        rounded-full text-white shadow-lg" 
        style={{backgroundColor:"Green"}}>Green</button>
         <button onClick={() => setColor("Blue")}className="outline-none px-4 py-1 
        rounded-full text-white shadow-lg" 
        style={{backgroundColor:"Blue"}}>Blue</button>
         <button onClick={() => setColor("olive")}className="outline-none px-4 py-1 
        rounded-full text-white shadow-lg" 
        style={{backgroundColor:"Olive"}}>Olive</button>
        <button onClick={() => setColor("olive")}className="outline-none px-4 py-1 
        rounded-full text-white shadow-lg" 
        style={{backgroundColor:"gray"}}>gray</button>
        <button onClick={() => setColor("olive")}className="outline-none px-4 py-1 
        rounded-full text-white shadow-lg" 
        style={{backgroundColor:"yellow"}}>yellow</button>
        <button onClick={() => setColor("olive")}className="outline-none px-4 py-1 
        rounded-full text-white shadow-lg" 
        style={{backgroundColor:"purple"}}>purple</button>
        <button onClick={() => setColor("lavender")}className="outline-none px-4 py-1 
        rounded-full text-white shadow-lg" 
        style={{backgroundColor:"Lavender"}}>Lavender</button>
        <button onClick={() => setColor("white")}className="outline-none px-4 py-1 
        rounded-full text-white shadow-lg" 
        style={{backgroundColor:"black"}}>White</button>
         
      </div>
    </div>
   </div>
   
    
  )
  
  
}

export default App
