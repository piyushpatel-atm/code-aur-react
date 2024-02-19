import {React,useContext} from "react";
import UserContext from "../Context/Context";
import { useState } from "react";

function Login(){
    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} =useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({password,userName})
    }
    return(
        <div>
            <input type="text" placeholder="userName" value={userName} onChange={(e)=>setUserName(e.target.value)}
            className="bg-gray-700 text-2xl text-white m-3"/><br></br>
            <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-700 text-2xl text-white m-3"/><br></br>
            <button onClick={handleSubmit} className="bg-blue-700 text-white text-2xl">Submit</button>
        </div>
    )
}

export default Login