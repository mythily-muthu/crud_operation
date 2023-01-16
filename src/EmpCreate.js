import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const EmpCreate = () => {

    const history = useNavigate();

    let [employees, setEmployees] = useState(
        {
            name: "",
            email: "@gmail.com",
            phone: "",
        });

    let handleSubmit = async () => {
        let id = Math.floor(Math.random() * 1000);
        await axios.post(" http://localhost:8000/employees", {
            id,
            ...employees,
        })
        console.log("hisfwafew")
    }
    return (
        <div>
            <div className='row'>
                <div className='offset-lg-3 col-lg-6'>
                    <form className='container' onSubmit={handleSubmit}>
                        <div className='card'>
                            <div className='card-title'>
                                <h2 className='flex mt-3 p-4'>Create employee</h2>
                            </div>
                            <div className='card-body'>
                                <div className='row'>

                                    <div className='col-lg-12'>
                                        <div className='form-group p-2'>
                                            <label className='p-2'>Name</label>
                                            <input
                                                required
                                                className='form-control'
                                                placeholder='Name'
                                                type="text"
                                                value={employees.name}
                                                onChange={(e) => { setEmployees({ ...employees, name: e.target.value }) }}
                                            ></input>

                                        </div>
                                    </div>

                                    <div className='col-lg-12'>
                                        <div className='form-group p-2'>
                                            <label className='p-2'>Email</label>
                                            <input
                                                required
                                                className='form-control'
                                                placeholder='Email'
                                                type="email"
                                                value={employees.email}
                                                onChange={(e) => { setEmployees({ ...employees, email: e.target.value }) }}
                                            ></input>
                                        </div>
                                    </div>

                                    <div className='col-lg-12'>
                                        <div className='form-group p-2'>
                                            <label className='p-2'>Phone</label>
                                            <input
                                                required
                                                type="number"
                                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" title="XXX-XXX-XXXX"

                                                className='form-control'
                                                placeholder='Phone'
                                                value={employees.phone}
                                                onChange={(e) => {
                                                    setEmployees({ ...employees, phone: e.target.value })
                                                }}></input>
                                        </div>
                                    </div>

                                    <div className='col-lg-12 '  >
                                        <div className='form-group  d-flex gap-2 mt-3 justify-content-end' >
                                            <button type='submit' className='btn btn-success' >Save</button>
                                            <Link to="/" className='btn btn-danger '>Back</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default EmpCreate 