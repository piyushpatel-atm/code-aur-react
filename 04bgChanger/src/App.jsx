import { useState } from 'react'

import './App.css'


function App() {
  const [color, setColor] = useState("olive")


  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>

    </div>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}} onClick={()=> setColor("red")}>
          Red
        </button>
        <button
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green"}} onClick={()=> setColor("Green")}>
          Green
        </button>
        <button
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}} onClick={()=> setColor("Blue")}>
          Blue
        </button>
        <button
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"olive"}} onClick={()=> setColor("olive")}>
          olive
        </button>
        <button
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"pink"}} onClick={()=> setColor("Pink")}>
          Pink
        </button>
        <button
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"orange"}} onClick={()=> setColor("Orange")}>
          Orange
        </button>
        <button
        className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Black"}} onClick={()=> setColor("Black")}>
          Black
        </button>
      </div>
    </div>
    </>
  )
}

export default App
