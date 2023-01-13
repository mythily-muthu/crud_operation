import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const EmpListing = () => {

    let [empData, setEmpData] = useState([])
    let navigate = useNavigate()



    let LoadEdit = (id) => {
        navigate("/employee/edit/" + id)
    }


    let LoadDetails = (id) => {
        navigate("/employee/details/" + id)
    }



    let RemoveFunction = (id) => {
        navigate("/")
    }





    const getAllEmployees = async () => {
        let res = await axios.get("http://localhost:8000/employees");
        setEmpData(res.data);
    };
    console.log(empData)
    useEffect(() => {
        getAllEmployees();
    }, []);

    return (
        <div className='container'>
            <div className='card'>
                <div className='card-title' style={{ marginTop: "10px" }}>
                    <h2 className='text-center' >Employee Listing</h2>
                </div>
                <div className='card-body'>
                    <button className='btn btn-warning '> <Link to="employee/create">Add new employee</Link></button>

                    <table className='table table-bodered'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {empData &&
                                empData.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td><a onClick={() => { LoadEdit(item.id) }} className='btn btn-success'>Edit</a>
                                            <a onClick={() => { RemoveFunction(item.id) }} className='btn btn-danger'>Remove</a>
                                            <a onClick={() => { LoadDetails(item.id) }} className='btn btn-primary'>Details</a></td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmpListing 