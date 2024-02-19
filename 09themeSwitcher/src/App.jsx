import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './Context/theme'
import { useEffect } from 'react'
import ThemeBtn from './Components/Themebutton'
import Card from './Components/Card'
import Register from './Components/Register'

function App() {
  const [themeMode,setThemeMode] =useState("light")
  const [data,setdata]=useState()

  const lightTheme =()=>{
    setThemeMode("light")
  }

  const darkTheme = ()=>{
    setThemeMode("dark")
  }

  const setData =(val)=>{
    setdata(val)
  }


  

  //actual change in theme

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (

    <ThemeProvider value={{themeMode,lightTheme,darkTheme,setData}}>
     <div className="flex flex-wrap min-h-screen items-center">
      <div>
    {data}
      </div>
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>

                   <div>
                    <Register />
                   </div>

                   
                </div>
            </div>
    </ThemeProvider>
  )
}

export default App
