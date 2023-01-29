import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Hawker from './Hawker'
import EachHawker from './EachHawker'

const HawkersList = () => {
    


    const [usernew, setUsernew] = useState([])

    const fetchData = () => {
        fetch(`/api/auth/fetchhawkers`).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data)
            
            setUsernew(data)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (<>
    

     

{/* 

        <div className="container " >

            <div className="row">
                <div className='col-2' >

                    {usernew?.map(data => (
                        <div className="card text-center" style={{ width: "350px", height: "200px",margin:"20px",backgroundColor:"#e3e2e2",outline:"5px inset grey" }}>

                            <div className="card-body "   >
                                <div className="card-title" key={data._id} >{data.name}</div>
                                <div className="card-text" >{data.email}</div>

                                <div >
                                    <Link to="/chat" className="btn box__btn btn-black margin-top-medium" style={{ fontSize: "2rem", marginTop: "8px" }}>Chat</Link>
                                </div>

                            </div>
                        </div>



                    ))}

                </div>

                <div className='col-8' >
               

                    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1O0ba5mZ-eyPP6QjeFkcsVXOaHkXBLos&ehbc=2E312F" style={{ width: "100%", height: "100%" ,outline:"5px inset grey", alignItems:"flex-end"}}></iframe>
                </div>
            </div>
        </div>
 */}




<div className='container' style={{minWidth:"1500px"}}>

    <div className='row' style={{minWidth:"1500px"}}>
        <div className='col-3' >
        {usernew?.map(data => (
                        <div className="card text-center" style={{ width: "350px", height: "200px",margin:"20px",marginRight:"15px",backgroundColor:"#e3e2e2",outline:"5px inset grey" }}>

                            <div className="card-body "   >
                                <div className="card-title" key={data._id} style={{fontSize:"30px"}}>{data.name}</div>
                                <div className="card-text" style={{fontSize:"30px"}}>{data.email}</div>

                                <div >
                                    <Link to="/join" className="btn box__btn btn-black margin-top-medium" style={{ fontSize: "2rem", marginTop: "8px" }}>Chat</Link>
                                </div>

                            </div>
                        </div>



                    ))}
        </div>



        <div className='col-8'>
            
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1O0ba5mZ-eyPP6QjeFkcsVXOaHkXBLos&ehbc=2E312F" style={{ width: "100%", height: "100%" ,outline:"5px inset grey", alignItems:"flex-end"}}></iframe>
            
        </div>
    </div>
</div>



    </>
    )
}

export default HawkersList