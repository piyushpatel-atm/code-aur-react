import { useState, useEffect } from 'react'
import { TodoProvider } from './Contexts/TodoContext'
import './App.css'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'
function App() {
  const [todos, setTodo] = useState([])

  const addTodo =(todo) =>{
    setTodo((prev) => [...prev,{id:Date.now(),...todo}])
  }

  const updateTodo =(id,todo) =>{
    setTodo((prev)=> prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo =(id) =>{
    setTodo((prev)=> prev.filter((todo) => (todo.id !== id)))
  }

  const toggleComplete = (id) =>{
    setTodo((prev)=> prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo,completed:!prevTodo.completed} : prevTodo)))
  }
  // basic context functionality completed here 

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length > 0){
      setTodo(todos);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>

                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
