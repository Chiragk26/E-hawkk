import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const RegisterHawker = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, email, password } = credentials

    //  fetch("http://localhost:5000/api/auth/login")
    const response = await fetch("/api/auth/registerhawker", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json()
    console.log(json)
    if (json.authtoken) {
      //save the auth token and redirect
      localStorage.setItem('token', json.authtoken)
      navigate("/display2")
      props.showAlert("success", "Account created successfully")
      alert("Account created successfully")
    } else {
      props.showAlert("danger", "Invalid details")
      alert("Invalid credentials")
      if(name.length<=3)
      alert('Name must be atleast 3 characters')
    }

  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    
    <div className="mt-5 container login" style={{height:"30rem"}}>
      <h1 style={{fontSize:"5rem",marginBottom:"2rem"}}>Create hawker account </h1>
      <form onSubmit={handleSubmit} style={{backgroundColor:"#e3e2e2",outline:"5px inset grey"}}>
        <div className="mb-3" style={{fontSize:"3rem"}}>
        <i className="fa-solid fa-user" style={{marginLeft:"2rem"}}></i>
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" style={{width:"30rem",height:"3rem",fontSize:"2rem"}} onChange={onChange} id="name" name="name" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3" style={{fontSize:"3rem"}}>
        <i className="fa-solid fa-envelope" style={{marginLeft:"2rem"}}></i>
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" style={{width:"30rem",height:"3rem",fontSize:"2rem"}} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
         
        </div>
        <div className="mb-3" style={{fontSize:"3rem"}}>
        <i className="fa-solid fa-lock" style={{marginLeft:"2rem"}}></i>
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" style={{width:"30rem",height:"3rem",fontSize:"2rem"}} onChange={onChange} id="password" name="password" minLength={5} required />
        </div>
        {/* <div className="mb-3" style={{fontSize:"3rem"}}>
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" style={{width:"30rem",height:"3rem"}} onChange={onChange} id="cpassword" name="cpassword" minLength={5} required />
        </div> */}

        <button type="submit" className="btn btn-secondary" style={{margin:"2rem",fontSize:"3rem"}}>Submit</button>
      </form>        </div>
     
  )
}

export default RegisterHawker
