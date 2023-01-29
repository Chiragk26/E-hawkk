import React,{useState} from 'react'
import { useHistory, useNavigate } from 'react-router-dom'

const Login = (props) => {
  const [credentials,setCredentials]=useState({email:"",password:""})
let navigate=useNavigate()

  const handleSubmit=async(e)=>{
     e.preventDefault()
    //  fetch("http://localhost:5000/api/auth/login")
     const response = await fetch("/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email: credentials.email,password:credentials.password})
    });
    const json=await response.json()
    console.log(json)
    // console.log(json.success)
   
    if(json.authtoken){
      console.log("hurray")
      //save the auth token and redirect
      localStorage.setItem('token',json.authtoken)
      // navigate("/join")
      navigate("/display")
      props.showAlert("success","Logged in successfully")
      alert("Login Successfull")
  }else {
    props.showAlert("danger", "Invalid details")
    alert("Invalid details")
  }



  }
  const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }

    return (
      <>
       <div className="mt-5 login container" >
      <h1 style={{fontSize:"5rem",marginBottom:"2rem"}}> Customer Login </h1>

<form onSubmit={handleSubmit} style={{backgroundColor:"#e3e2e2",outline:"5px inset grey"}}>
  <div className="mb-3" style={{fontSize:"3rem"}}>
  <i className="fa-solid fa-envelope" style={{marginLeft:"2rem"}}></i>
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" style={{width:"30rem",height:"3rem",fontSize:"2rem"}} value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-5" style={{fontSize:"3rem"}}>
  <i className="fa-solid fa-lock" style={{marginLeft:"2rem"}}></i>
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" style={{width:"30rem",height:"3rem",fontSize:"2rem"}} value={credentials.password} onChange={onChange} id="password" name="password"/>
  </div>

  <button type="submit" className="btn btn-secondary" style={{margin:"2rem",fontSize:"3rem"}} >Submit</button>
</form>        </div>

{/* -------------------------------------------------------------- */}

{/* new */}


{/* <div className="container">
      <htmlForm method="post" autocomplete="on">
        
        <div className="box">
          <label htmlFor="firstName" className="fl fontLabel">Name: </label>
          <div className="new iconBox">
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
          <div className="fr">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="textBox"
              autofocus="on"
              required
            />
          </div>
          <div className="clr"></div>
        </div>
        


        <div className="box">
          <label htmlFor="phone" className="fl fontLabel"> Phone No: </label>
          <div className="fl iconBox">
            <i className="fa fa-phone-square" aria-hidden="true"></i>
          </div>
          <div className="fr">
            <input
              type="text"
              required
              name="phoneNo"
              maxlength="10"
              placeholder="Phone No."
              className="textBox"
            />
          </div>
          <div className="clr"></div>
        </div>


        <div className="box">
          <label htmlFor="email" className="fl fontLabel"> Email ID: </label>
          <div className="fl iconBox">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </div>
          <div className="fr">
            <input
              type="email"
              required
              name="email"
              placeholder="Email Id"
              className="textBox"
            />
          </div>
          <div className="clr"></div>
        </div>


        <div className="box">
          <label htmlFor="password" className="fl fontLabel"> Password </label>
          <div className="fl iconBox">
            <i className="fa fa-key" aria-hidden="true"></i>
          </div>
          <div className="fr">
            <input
              type="Password"
              required
              name="password"
              placeholder="Password"
              className="textBox"
            />
          </div>
          <div className="clr"></div>
        </div>


        <div className="box" style="background: #2d3e3f">
          <input type="Submit" name="Submit" className="submit" value="SUBMIT" />
        </div>


        </htmlForm>
    </div> */}

</>
    )
}

export default Login
