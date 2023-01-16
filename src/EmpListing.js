import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { Button, Modal } from 'react-bootstrap';

const EmpListing = () => {

    let [empData, setEmpData] = useState([])
    let navigate = useNavigate()

    const [showModal, setShowModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    const handleDelete = id => {
        setItemToDelete(id);
        setShowModal(true);
    }

    const handleConfirmDelete = async () => {
        // Delete the item here
        await axios.delete(`http://localhost:8000/employees/${itemToDelete}`);
        getAllEmployees()
        setShowModal(false);
    }



    let LoadEdit = (id) => {
        navigate(`/employee/edit/${id}`)
    }


    let LoadDetails = (id) => {
        navigate("/employee/details/" + id)
    }




    const deleteEmployee = async (id) => {
        if (window.confirm("You want to delete this item?")) {
            // Delete the item here

        }

    }




    const getAllEmployees = async () => {
        let res = await axios.get("http://localhost:8000/employees");
        setEmpData(res.data);
    };

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
                    <button className='btn  text-white bg-dark'> <Link to="employee/create">Add new employee</Link></button>

                    <table className='table table-bodered flex mt-4'>
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
                                        <td className='d-flex , gap-2'><a onClick={() => { LoadEdit(item.id) }} className='btn btn-success'>Edit</a>
                                            <a onClick={() => { handleDelete(item.id) }} className='btn btn-danger'>Remove</a>
                                            <a onClick={() => { LoadDetails(item.id) }} className='btn btn-primary'>Details</a></td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>

                    <Modal show={showModal} onHide={() => setShowModal(false)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Confirm Delete</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure you want to delete {itemToDelete} item?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => setShowModal(false)}>
                                Cancel
                            </Button>
                            <Button variant="danger" onClick={handleConfirmDelete}>
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div >
    )
}

export default EmpListing 