import React from "react";
import "./login.css"
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate()

    const [login,setLogin] = useState("")
    const [loginPassword,setloginPassword] = useState("")
    const [errorLoginPassword,setErrorLoginPassword] = useState(false)

    const handleLogin = async () => {

        const res = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                login:login,
                password:loginPassword
            })
        })

        const data= await res.json()

        if(data.message == "Login success"){
            navigate("/home")
        }
        else{
            setErrorLoginPassword(true)
        }
    }

    const loginValidation = (e) => {
        setLogin(e.target.value)
    }
    const loginpasswordValidation = (e) => {
        setloginPassword(e.target.value)
    }

    return(
        <div className="mainContainer">
            <h1 className="title">Login to my App</h1>
            <div className="inpurContainer">
                <div className="errorWrapper">
                <div className="error">{errorLoginPassword ? "Wrong login or password" : ""}</div>
                <input className="inputWrapper" type="text" placeholder="Login..." value={login} onChange={loginValidation}/>
                </div>
                <input className="inputWrapper" type="password" placeholder="Password..." value={loginPassword} onChange={loginpasswordValidation}/>
                <button className="submitBtn" type="text" onClick={handleLogin}>Submit</button>
            </div>
            <Link to="/register"  className="registerBtn">Don't have account?<span className="registerSpan">Register</span></Link>
        </div>
    )
}

export default Login;