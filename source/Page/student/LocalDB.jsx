import React from 'react'
import Student from '../../data/Student'
import { Link } from 'react-router-dom'
function LocalDB() {


    return (
        <>
            <div className='container'>
                <h1>Get Local Data  </h1> <hr />
            </div>

            <div className="container">
                <div className='row'>
                    {Student.map((std) =>
                        <div className="col-2 py-2">
                            <Link to={`/studentdetails/${std.id}`}>
                            <div className="card">
                                <div className='image-area'>
                                    <img src={std.image} alt="Avatar" style={{ width: '100%' }} />
                                </div>
                                <div className="container">
                                    <h4><b>{std.names}</b></h4>
                                    <p>{std.Faculty}</p>
                                </div>
                            </div>
                            </Link>
                        </div>
                    )}

                </div>
            </div>
        </>

    )
}

export default LocalDB