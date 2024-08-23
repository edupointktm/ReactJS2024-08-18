import React, { useEffect, useState } from 'react'

function Hook() {
    let [count, setCount]=useState(5)
    let [name, setName]=useState('Prabhat')

   let increment=()=>setCount(count+1)

   let nameChange=(n='')=>setName(n)

   useEffect(()=>{
      alert("welcome")
   },[]) //one time


  return (
    <>
    <div className='container'>
        <h1>Hook Example PAGE </h1> <hr />

        <div><button className = "btn btn-primary" onClick={increment}>+</button></div>
        <h3> {count}</h3>
        <div><button className = "btn btn-danger" onClick={()=>setCount(count-1)}>-</button></div>
        <br />

    {name} <button className='btn btn-success' onClick={()=>{nameChange('ganesh')}}>Change Name</button>
    </div>
</>
  )
}

export default Hook