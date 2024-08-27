import React, { useEffect, useState } from 'react'

function Hook() {
  let [count, setCount] = useState(5)
  let [name, setName] = useState('Prabhat')

  let increment = () => setCount(count + 1)

  let nameChange = (n = '') => setName(n)

  let [full_name, setFull_name] = useState('')

  let [getuser_name, setGetUser_name] = useState('')

  useEffect(() => {

  }, []) //one time

  let getInputValue = (e) => {
    setFull_name(e.target.value)
  }

  let SetUserName = (e) => {
    e.preventDefault()
    setGetUser_name(full_name)
  }
  return (
    <>
      <div className='container'>
        <h1>Hook Example PAGE </h1> <hr />

        <div><button className="btn btn-primary" onClick={increment}>+</button></div>
        <h3> {count}</h3>
        <div><button className="btn btn-danger" onClick={() => setCount(count - 1)}>-</button></div>
        <br />

        {name} <button className='btn btn-success' onClick={() => { nameChange('ganesh') }}>Change Name</button>
      </div>
      <hr />
      <div className="cont">
        <h1>Use of Form</h1>
        {/* <input type="text" name='full_name'  onChange={(e)=>setFull_name(e.target.value)}/> */}
        <form onSubmit={SetUserName}>
          <input type="text" name='full_name' onChange={getInputValue} />
          {/* <button className='btn btn-success' onClick={SetUserName}>Submit</button> */}
          <input type='submit' className='btn btn-success'/>
          <div> Name : {full_name}  </div> <br />
          <div> By Submit : {getuser_name}   </div>
        </form>
        <br />
      </div>
    </>
  )
}

export default Hook