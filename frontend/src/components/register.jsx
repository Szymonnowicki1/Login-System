import React from "react";
import "./register.css"
import { useState } from "react";
const Register = () => {

    const [email,setEmail] = useState("")
    const [registerLogin,setRegisterLogin] = useState("")
    const [registerPassword,setRegisterPassword] = useState("")
    const [errorEmail,setErrorEmail] = useState(false)
    const [errorlogin,setErrorLogin] = useState(false)
    const [errorPassword,setErrorPassword] = useState(false)
    const [success,setSuccess] = useState(false)

    const handleRegister = async () => {

        let hasError = false;
        
        if(!email.includes("@") || email === ""){
            setErrorEmail(true)
            hasError = true
        }
        else{
            setErrorEmail(false)
        }

        if(registerPassword.length < 7){
            setErrorPassword(true)
            hasError = true
        }
        else {
            setErrorPassword(false)
        }


        if(hasError) {
            setEmail("")
            setRegisterLogin("")
            setRegisterPassword("")
            return 
        }


        const res = await fetch("http://localhost:5000/register", {        
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email:email,
            login:registerLogin,
            password:registerPassword
        })

        
    })

    const data = await res.json()

    if(data.message == "User already exists"){
        setErrorLogin(true)
    }
    else {
        setErrorLogin(false)
    }

    if(data.message == "User created"){
        setSuccess(true)
    }
    
    setEmail("")
    setRegisterLogin("")
    setRegisterPassword("")
    
    }
    


    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleRegisterLogin = (e) => {
        setRegisterLogin(e.target.value)
    }

    const handleRegisterPassword = (e) => {
        setRegisterPassword(e.target.value)
    }

    return(
        <div className="registerContainer">
            <h1 className="title">Register to My App</h1>
            <h2 className="title2">{success ? "Successful register, go to login" : ""}</h2>
            <div className="registerDiv">
                <div className="errorWrapper">
                <div className="error">{errorEmail ? "Wrong email" : ""}</div>
                <input className="registerWrapper" type="text" placeholder="Email..." value={email} onChange={handleEmail}/>
                </div>
                <div className="errorWrapper">
                <div className="error">{errorlogin ? "Login has been used already" : ""}</div>
                <input className="registerWrapper" type="text" placeholder="Login..." value={registerLogin} onChange={handleRegisterLogin}/>
                </div>
                <div className="errorWrapper">
                <div className="error">{errorPassword ? "Password must be minimum 8 letters" : ""}</div>
                <input className="registerWrapper" type="password" placeholder="Password..." value={registerPassword} onChange={handleRegisterPassword}/>
                </div>
                <button className="submitBtn" type="text" onClick={handleRegister}>Submit</button>
            </div>
        </div>
    )
}

export default Register