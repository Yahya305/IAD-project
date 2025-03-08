import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css'

export default function Loginpage() {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [isLogin, setIsLogin] = useState(true);
        const navigate = useNavigate();
      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log("Logging in with", email, password);
        };

        const handleSignup = (e) => {
          e.preventDefault();
          console.log("Signing")
          setIsLogin(false); navigate("/student/Signup") 
        }
      
        return (
          <div className="container">
            <div className="form-container">
                <div className="form-toggle">
                    <button className={isLogin ? "active" : ""}   onClick={()=> setIsLogin(true)} >Login</button>
                    <button className={!isLogin ? "active" : ""}  onClick={handleSignup} >Signup</button>
                </div>
                    <h1>Login</h1>
                    <form  className='form'  onSubmit={handleSubmit}>
                    <input  className='form input'
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                    </form>
           </div>
          </div>
        );
};

