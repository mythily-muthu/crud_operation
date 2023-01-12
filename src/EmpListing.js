import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const EmpListing = () => {

    let [empData, setEmpData] = useState([])


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
                                <td>Acrion</td>
                            </tr>
                        </thead>
                        <tbody>
                            {empData &&
                                empData.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.eamil}</td>
                                        <td>{item.phone}</td>
                                        <td><a className='btn btn-success'>Edit</a>
                                            <a className='btn btn-danger'>Remove</a>
                                            <a className='btn btn-primary'>Details</a></td>
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