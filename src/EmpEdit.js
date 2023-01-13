import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
    const history = useNavigate();
    const url_parms = useParams();
    const [employeeData, setEmployeeData] = useState({
        name: "",
        email: "",
        phone_number: "",
    });

    let getEmployeeData = async () => {
        let res = await axios.get(
            `http://localhost:8000/employees/${url_parms.emp_id}`
        );
        setEmployeeData(res.data);
    };

    const handleEdit = (e, id) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/employees/${id}`, {
            id: id,
            ...employeeData,
        });
        history("/");
    };


    useEffect(() => {
        getEmployeeData();
    }, []);
    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container">
                        <div className="card" style={{ textAlign: "left" }}>
                            <div className="card-title">
                                <h2>Employee Edit</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input
                                                value={employeeData.name}
                                                onChange={(e) =>
                                                    setEmployeeData({
                                                        ...employeeData,
                                                        name: e.target.value,
                                                    })
                                                }
                                                required
                                                className="form-control"
                                            ></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input
                                                className="form-control"
                                                value={employeeData.email}
                                                onChange={(e) =>
                                                    setEmployeeData({
                                                        ...employeeData,
                                                        email: e.target.value,
                                                    })
                                                }
                                            ></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input
                                                className="form-control"
                                                value={employeeData.phone_number}
                                                onChange={(e) =>
                                                    setEmployeeData({
                                                        ...employeeData,
                                                        phone_number: e.target.value,
                                                    })
                                                }
                                            ></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button
                                                className="btn btn-success"
                                                type="submit"
                                                onClick={(e) => handleEdit(e, employeeData.id)}
                                            >
                                                update
                                            </button>
                                            <Link to="/" className="btn btn-danger">
                                                Back
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditEmployee;