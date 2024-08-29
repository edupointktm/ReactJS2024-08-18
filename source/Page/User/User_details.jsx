import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function User_details() {
    let usenaviage = useNavigate()
    let [userdata, setUserdata] = useState([])
    let [isEdit, setIsEdit] = useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    const [search, setSearch] = useState('')
    const [error, setError] = useState({})

    const [input_data, setInput_data] = useState(
        {
            user_name: '',
            address: '',
            email: '',
            mobile_no: '',
            user_type: '',
            password: ''
        }
    )

    let setData = (e) => {
        setInput_data({ ...input_data, [e.target.name]: e.target.value })
    }

    let saveTo_database = () => {
        let dataValidation = {}
        if (!input_data.user_name) {
            dataValidation.user_name = "name is required"
        }
        if (!input_data.address) {
            dataValidation.address = "address is required"
        }
        if (!input_data.email) {
            dataValidation.email = "email is required"
        }
        setError(dataValidation)
        // console.log(object.key(error).length)
        if (Object.keys(dataValidation).length == 0) {
            if (isEdit == '') {
                axios.post('http://localhost:3000/users', input_data)
                    .then(() => {
                        toast.success("Sucessfully Add your new Data")
                        handleClose()
                        clear()
                    }
                    )
            }
            else {
                axios.put('http://localhost:3000/users/' + isEdit, input_data)
                    .then(() => {
                        toast.error("Sucessfully Modify your Data")
                        handleClose()
                        clear()
                    }
                    )
            }
        }
    }
    let getEdit_data = (id) => {
        axios.get('http://localhost:3000/users/' + id)
            .then((res) => setInput_data(res.data))
    }
    useEffect(() => {
        getUserdetails();

    }, [input_data])
    let getUserdetails = () => {
        axios.get('http://localhost:3000/users').then((res) => { setUserdata(res.data) })
    }
    let clear = () => {
        setInput_data({
            user_name: '',
            address: '',
            email: '',
            mobile_no: '',
            user_type: '',
            password: ''
        })
    }
    let testTostify=()=>{
        toast.error("Wow so easy!");
    }

    let logOut=()=>{
        usenaviage('/login')
    }
    let allowDelete = (id) => {
        axios.delete('http://localhost:3000/users/' + id).then((res) => {
            alert("Data Deleted sucesfully...")
            getUserdetails();
        })

    
    }
    return (
        <>



            <div className="container">
                <h3 className='text-danger'>USER DETAILS</h3>
                <div className="row d-flex justify-content-around">
                    <div className="col-4  py-3">
                        <input type="text" onChange={(e) => { setSearch(e.target.value) }} />
                        <button className='btn btn-primary' onClick={testTostify}>Search</button>
                    </div>
                    <div className="col-5 py-3">
                        <button className='btn btn-primary' onClick={() => { handleShow() }}>ADD</button>
                    </div>
                    <div className="col-3 py-3">
                        <button className='btn btn-danger' onClick={logOut}>Log Out</button>
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
                {userdata.filter((ud) => ud.user_name.toLowerCase().includes(search.toLocaleLowerCase())).map((ud, i) =>
                    <div className="row py-2 border-bottom" key={i}>
                        <div className="col">{i + 1}</div>
                        <div className="col">{ud.user_name}</div>
                        <div className="col">{ud.email}</div>
                        <div className="col">{ud.address}</div>
                        <div className="col">{ud.mobile_no}</div>
                        <div className="col">{ud.user_type}</div>
                        <div className="col">
                            <div className='px-2'> <button className='btn btn-primary' onClick={() => { handleShow(); getEdit_data(ud.id); setIsEdit(ud.id) }}  >EDIT</button>
                                <button className='btn btn-danger' onClick={() => { allowDelete(ud.id) }}>Delete</button></div>
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
                                <input type="text" name='user_name' value={input_data.user_name} onChange={setData} className="form-control py-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div className='text-danger'>{error.user_name}</div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email</label>
                                <input type="email" name='email' value={input_data.email} onChange={setData} className="form-control py-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div className='text-danger'>{error.email}</div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Address</label>
                                <input type="text" name='address' value={input_data.address} onChange={setData} className="form-control py-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div className='text-danger'>{error.address}</div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Mobile No</label>
                                <input type="number" name='mobile_no' value={input_data.mobile_no} onChange={setData} className="form-control py-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">User Type</label>
                                <input type="text" name='user_type' value={input_data.user_type} onChange={setData} className="form-control py-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Password</label>
                                <input type="password" name='password' value={input_data.password} onChange={setData} className="form-control py-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                        </div>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={saveTo_database}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>

            <ToastContainer />
        </>
    )
}

export default User_details