import React from 'react'

function Event_handling() {
    let getMessage=(names)=>{
        alert("My Name is "+names)
    }
  return (
    <>
    <div className='container'>
        <h1>EVENT HANDLING </h1> <hr />

        <button className='btn btn-primary py-2' onClick={()=>getMessage("Prabhat", "")} >Click Me</button>
    </div>
    

    </>
  )
}

export default Event_handling