import React, { useState } from 'react'

function Hook() {
    let [count, setCount]=useState(15)

    let increment=()=>{
           setCount(count+1) 
    }
  return (
    <>
    <div className='container'>
        <h1>Hook Example PAGE </h1> <hr />

        <div><button className = "btn btn-primary" onClick={increment}>+</button></div>
        <h3> {count}</h3>
        <div><button className = "btn btn-danger" onClick={()=>setCount(count-1)}>-</button></div>

    </div>
</>
  )
}

export default Hook