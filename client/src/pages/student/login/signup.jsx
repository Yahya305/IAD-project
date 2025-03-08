import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";


export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [seatnum, setSeatno] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Logging in with", email, password);
      };

    const handlelogin = (e) => {
      e.preventDefault();
      setIsLogin(true);
      navigate("/student/login");
    };



  return (
    <div className="container">
      <div className="form-container">
      <div className="form-toggle">
                    <button className={!isLogin ? "active" : ""}   onClick={handlelogin} >Login</button>
                    <button className={isLogin ? "active" : ""}  onClick={()=> {setIsLogin(false)}} >Signup</button>
        </div>
        <h1>Signup</h1>
        <form className="form">
          <input
            type="text"
            placeholder="Name"
          />
          <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
          <input type="text" 
          placeholder='Seat Number'
          value={seatnum}
          onChange={(e) => setSeatno(e.target.value)}/>

           <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
          <input
                        type="password"
                        placeholder="Confirm Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  )
}
