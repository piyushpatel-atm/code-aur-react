import {React,useContext} from "react";
import UserContext from "../Context/Context";

function Profile(){
    const {user} =useContext(UserContext)

    if(!user) return <div>Please Login</div>
    else return <h1>Welcome {user.userName}</h1>
}

export default Profile