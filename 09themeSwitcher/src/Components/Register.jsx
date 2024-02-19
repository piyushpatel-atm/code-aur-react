
import React from "react";
import useTheme from "../Context/theme";
import { useState } from "react";


export default function Register() {
    const {setData} =useTheme()
    const [user1,setUser1] =useState('')
    const [user2,setUser2] =useState('')
    const [user3,setUser3] =useState('')
    const [user4,setUser4] =useState('')
    const onchangeval = ()=>{
        setData([user1,user2,user3,user4])

    }

    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <div className="px-5 pb-5">

                <div className="flex items-center mt-2.5 mb-5">
                    <input type="text" placeholder="user1" value={user1} onChange={(e)=>setUser1(e.target.value)}
                        className="bg-gray-700 text-2xl text-white m-3 rounded-lg" />
                </div>
                <div className="flex items-center mt-2.5 mb-5">
                    <input type="text" placeholder="user2" value={user2} onChange={(e)=>setUser2(e.target.value)}
                        className="bg-gray-700 text-2xl text-white m-3" />
                </div>
                <div className="flex items-center mt-2.5 mb-5">
                    <input type="text" placeholder="user3" value={user3} onChange={(e)=>setUser3(e.target.value)}
                        className="bg-gray-700 text-2xl text-white m-3" />
                </div>
                <div className="flex items-center mt-2.5 mb-5">
                    <input type="text" placeholder="user4" value={user4} onChange={(e)=>setUser4(e.target.value)}
                        className="bg-gray-700 text-2xl text-white m-3" />
                </div>
                <div className="flex items-center justify-between" >

                    <button onClick={onchangeval}>Submit</button>

                </div>

            </div>
        </div>
    );
}