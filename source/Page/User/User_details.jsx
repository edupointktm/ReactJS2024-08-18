import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function User_details() {
    let [userdata, setUserdata] = useState([])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        getUserdetails();

    }, [])
    let getUserdetails = () => {
        axios.get('http://localhost:3000/users').then((res) => { setUserdata(res.data) })
    }
    return (
        <>



            <div className="container">
                <h3 className='text-danger'>USER DETAILS</h3>
                <div className="row d-flex justify-content-around">
                    <div className="col-6  py-3">
                        <input type="text"  /> <button className='btn btn-primary'>Search</button>
                    </div>
                    <div className="col-6 py-3">
                        <button className='btn btn-primary' onClick={handleShow}>ADD</button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row bg-primary text-light py-2">
                    <div className="col">SN</div>
                    <div className="col">User Name</div>
                    <div className="col">Email</div>
                    <div className="col">Address</div>
                    <div className="col">Mobile No</div>
                    <div className="col">User Type</div>
                    <div className="col">Action</div>
                </div>
            </div>
            <div className="container">
                {userdata.map((ud) =>
                    <div className="row py-2 border-bottom">
                        <div className="col">{ud.id}</div>
                        <div className="col">{ud.user_name}</div>
                        <div className="col">{ud.email}</div>
                        <div className="col">{ud.address}</div>
                        <div className="col">{ud.mobile_no}</div>
                        <div className="col">{ud.user_type}</div>
                        <div className="col">
                            <div className='px-2'> <button className='btn btn-primary'>EDIT</button>
                                <button className='btn btn-danger'>Delete</button></div>
                        </div>
                    </div>

                )}
            </div>




            <Modal show={show} onHide={handleClose}>
                <form>
                    <Modal.Header closeButton>
                        <Modal.Title>User Create</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">User Name</label>
                                <input type="text" className="form-control py-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input type="email" className="form-control py-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Address</label>
                                <input type="text" className="form-control py-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Mobile No</label>
                                <input type="number" className="form-control py-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">User Type</label>
                                <input type="text" className="form-control py-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Password</label>
                                <input type="password" className="form-control py-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                           
                        </div>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}

export default User_details