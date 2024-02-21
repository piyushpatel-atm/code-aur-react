import { useState } from 'react'

import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {

  return (
    <>
    <h1>Learn Redux toolkit</h1>
    <AddTodo />
    <Todos />
    </>
  )
}

export default App
