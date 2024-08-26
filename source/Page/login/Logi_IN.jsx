import React from 'react'
import { Link } from 'react-router-dom'

function Logi_IN() {
    return (
        <>
            <div className="login-wrap">
                <h2>Login</h2>
                <div className="form">
                    <input type="text" placeholder="Username" name="un" />
                    <input type="password" placeholder="Password" name="pw" />
                    <Link to = "/userdetails">
                    <button> Sign in </button>
                    </Link>
                    <a href="#"> <p> Don't have an account? Register </p></a>
                </div>
            </div>

        </>
    )
}

export default Logi_IN