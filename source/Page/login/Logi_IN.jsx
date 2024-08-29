import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Logi_IN() {
    let [user_data, setUser_data] = useState([])
    let [email, setEmail] = useState('')
    let [password, setPasswrod] = useState('')

    let usenaviage = useNavigate()
    
    useEffect(() => {
        sessionStorage.clear()
    }, [])

    let getAllData = () => {
        axios.get('http://localhost:3000/users')
        .then((res)=> setUser_data(res.data));
        
        let isValid = user_data.find((ud)=> ud.email==email && ud.password==password)
        if(Object.keys(isValid).length>0){
            usenaviage("/userdetails")
            sessionStorage.getItem('id',isValid)
        }
            

}
return (
    <>
        <div className="login-wrap">
            <h2>Login</h2>
            <div className="form">
                <input type="text" placeholder="Username" name="un" onChange={(event) => setEmail(event.target.value)} />
                <input type="password" placeholder="Password" name="pw" onChange={(event) => setPasswrod(event.target.value)} />

                <button onClick={getAllData}> Sign in </button>

                <a href="#" > <p> Don't have an account? Register </p></a>
            </div>
        </div>

    </>
)
}

export default Logi_IN