import React from 'react'
import { useParams } from 'react-router-dom'
import Student from '../../data/Student'
function Student_details() {
    let {std_id} = useParams()
    let getStudent_details =Student.find((std)=>std.id==std_id)
    
  return (
    <>
            <div className='container'>
                <h1>STUDENT DETAILS {std_id}</h1> <hr />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <img src={getStudent_details.image}></img>
                    </div>
                    <div className="col">
                        <h3> {getStudent_details.names} </h3>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Student_details