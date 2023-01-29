import React from 'react'

const EachHawker = (props) => {
    
    const {hawkerx}=props
  return (<>
    <div>EachHawker</div>
    <div className="col-md-3">
    
            <div className="card my-3" >
  <div className="card-body">
      <div className="d-flex align-items-center">
    <h1 className="card-title">{hawkerx} </h1> 
    
    {/* <p className="card-text">{hawker.x}</p> */}
    
       {/* <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id)
      props.showAlert("Deleted successfully","success")}}></i> */}
    {/* <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)
    }}></i> */}
    </div>
    {/* <p className="card-text">{hawker.name}</p> */}

  </div>
</div>
        </div>
        </>
  )
}

export default EachHawker