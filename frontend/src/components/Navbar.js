import React, { useEffect } from 'react'
import { Link, useLocation, useHistory, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Navbar = () => {
  let navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
    console.log('token')
    alert("Logout Successfull")
  }
  let location = useLocation()
  // useEffect(() => {
  //   console.log(location.pathname)
  //   }, [location]);
  return (
    //         <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" href="#">iNotebook</Link>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <Link className={`nav-link ${location.pathname==='/'?'active':"" }`} aria-current="page" to="/">Home</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className={`nav-link ${location.pathname==='/about'?'active':"" }`} to="/about">About</Link>
    //         </li>


    //       </ul>
    //       {!localStorage.getItem('token')?<form className="d-flex">
    //       <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
    //       <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
    //       <Link className="btn btn-primary mx-1" to="/registerhawker" role="button">Register Hawker</Link>
    //       </form>:<button onClick={handleLogout} className="btn btn-primary">Logout</button>}
    //     </div>
    //   </div>
    // </nav>

    <>
      <nav className="nav">
        <div className="nav__left">
          {/* <span className="nav__left-logo" style={{fontSize:"5rem"}}>E-Hawk</span> */}
          <Link className="navbar-brand" to="/" style={{ fontSize: "5rem" }}>E-Hawk</Link>

          {/* <span className="nav__left-rest">
           
            <span className="nav__left-item nav__left-item--2">Safety</span>
            <span className="nav__left-item nav__left-item--3">Help</span>
          
          </span> */}
        </div>

        <div className="nav__right">
          {/* <a className="nav__right-item nav__right-item--1">
            <span className="nav__right-icon--world">
              <i className="icon-basic-world nav__right-icon"></i>
            </span>
            EN
          </a> */}







          {/* PRODUCTS */}

          {/* <a className="dropdown nav__right-item nav__right-item--2  " href="#nav__product" data-bs-toggle="dropdown">Products</a>
  

  
  <ul className="dropdown-menu ">
  <ul className="nav__product-content ">
   
    <div className="nav__product-item">
            
            <i className="fa-brands fa-apple"></i>
            Fruits
          </div>
         
          <div className="nav__product-item">
          <i className="fa-solid fa-leaf"></i>
            Flower
          </div>
          <div className="nav__product-item">
          <i className="fa-solid fa-utensils"></i>
            Utensils
          </div>
          <div className="nav__product-item">
          <i className="fa-solid fa-trash"></i>
            Scrap
          </div>
          <div className="nav__product-item">
          <i className="fa-solid fa-seedling"></i>
            Gardening
          </div>
          <div className="nav__product-item">
          <i className="fa-solid fa-pepper-hot"></i>
            Vegetables
          </div>
          </ul> 
  </ul>
   */}



          {/* <Link to="/login" className="btn box__btn btn-black margin-top-medium" style={{fontSize:"2rem",marginTop:"8px"}}>Customer Login</Link>


          <Link to="/signup" className="btn box__btn btn-black margin-top-medium" style={{fontSize:"2rem",marginTop:"8px"}}>Customer Signup</Link> */}



          {!localStorage.getItem('token') ?
            <form className="d-flex">
              <Link to="/login" className="btn box__btn btn-black margin-top-medium" style={{ fontSize: "2rem", marginTop: "8px" }}>Customer Login</Link>

              <Link to="/signup" className="btn box__btn btn-black margin-top-medium" style={{ fontSize: "2rem", marginTop: "8px" }}>Customer Signup</Link>
            </form>
           
            : <Link to="/" className="btn box__btn btn-black margin-top-medium" onClick={handleLogout} style={{ fontSize: "2rem", marginTop: "8px" }}> Logout</Link>
            // <button onClick={handleLogout} className="btn btn-primary">Logout</button>
          }

        </div>
      </nav>
      {/* <div className="nav__background" id="nav__background">
        <a className="nav__background-close" href="index.html"></a>
        <div className="nav__background-content hidden">
          Select Your Preferred Language
          <div className="nav__language">ENGLISH</div>
        </div>

       
          </div> */}


      {/* <div className="nav__product " id="nav__product">
        <div className="nav__product-content ">
          <div className="nav__product-item">
            <i className="fa-brands fa-apple nav__product-icon"></i>
            Fruits
          </div>
          <div className="nav__product-item">
            <i className="fa solid fa-leaf nav__product-icon"></i>
            Flower
          </div>
          <div className="nav__product-item">
            <i className="nav__product-icon fas fa-utensils"></i>
            Utensils
          </div>
          <div className="nav__product-item">
            <i className="nav__product-icon fa-solid fa-trash"></i>
            Scrap
          </div>
          <div className="nav__product-item">
            <i className="nav__product-icon fa-solid fa-seedling"></i>
            Gardening
          </div>
          <div className="nav__product-item">
            <i className="nav__product-icon fa-solid fa-pepper-hot"></i>
            Vegetables
          </div>
         
        </div>
      </div> */}



















    </>

  )
}

export default Navbar
