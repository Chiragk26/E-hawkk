import React from 'react'
import { Link } from 'react-router-dom'

const HawkerNew = () => {
  return (
    <div>
        {/* <button type="button" className="btn btn-dark btn-lg">Dark</button> */}
        <div className="d-grid gap-2 col-6 mx-auto">
  {/* <button className="btn btn-primary" type="button" to="/chat">Button</button> */}
  <Link to="/join" className="btn box__btn btn-black margin-top-medium" style={{ fontSize: "2rem", marginTop: "8px" }}>Chat</Link>

</div>
    </div>
  )
}

export default HawkerNew