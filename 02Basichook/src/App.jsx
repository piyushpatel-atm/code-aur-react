import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const addValue=()=>{
    if(count < 20)
    {
    setCount(count+1)
    }else{
      setCount(count)
    }
  }
  const removeValue=()=>{
    if(count > 0)
    {
    setCount(count-1)
    }else{
      setCount(count)
    }
  }


  return (
    <>
     <h1>Counter value : {count}</h1>
     <h2>final value : {count}</h2>
     <br></br>
     <button onClick={addValue}>Add</button><br></br>
     <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
