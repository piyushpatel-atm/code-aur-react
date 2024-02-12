import { useState } from 'react'

import './App.css'
import Card from './components/card'

function App() {
  

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Piyush Patel</h1>
     <Card  username="Piyush" btntext="View Me"/>
     <Card username="Junaid" btntext="check Me"/>
     <Card username="Rhythem" btntext="See Me"/>
     <Card username="Yasir" btntext="look Me"/>

    </>
  )
}

export default App
