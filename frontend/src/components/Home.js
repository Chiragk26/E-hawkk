import React from 'react'
// import FrontRegisterHawker from '../frontcomponents/FrontRegisterHawker';
import RegisterHawker from'./RegisterHawker'
// import '../Home.css'
import {
  Link
} from "react-router-dom";

const Home = () => {
  return (
    <>


 <div className="box__container">
          <div className="box__content box__content-1">


            <h3 className="box__header" >
              <strong>Reaching out to customers is easier than ever</strong>
            </h3>
            <span className="margin-top-medium">
              <strong>Connect to a large network of customers through the platform</strong>
            </span>
            <Link
              // to="/frontregisterhawker" component={FrontRegisterHawker}
              to='/registerhawker' element={<RegisterHawker/>} className="btn box__btn btn-black margin-top-medium"
              >Signup as Hawker</Link>
              <div>
               <Link
              // to="/frontregisterhawker" component={FrontRegisterHawker}
              to='/loginhawker' element={<RegisterHawker/>} className="btn box__btn btn-black margin-top-medium"
              >Login  as  Hawker</Link>
              </div>
            {/* <Link
              href="#"
              className="border-move margin-top-medium"
              style={{display:"block", width: "50.5%",marginTop:"6rem"}}
            >
              Learn more
            </Link> */}
          </div>
        </div>




 


       
        </>
  )
}

export default Home