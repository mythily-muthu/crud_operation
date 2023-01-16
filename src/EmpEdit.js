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
        phone: "",
    });

    let getEmployeeData = async () => {
        let res = await axios.get(
            `http://localhost:8000/employees/${url_parms.emp_id}`
        );
        setEmployeeData(res.data);
    };

    const handleUpdate = (e, id) => {
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
                    <form onSubmit={(e) => handleUpdate(e, employeeData.id)} className="container">
                        <div className="card" style={{ textAlign: "left", marginTop: "30px" }}>
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
                                                type="email"
                                                pattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
                                                required
                                                name="email"
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
                                                required
                                                className="form-control"
                                                value={employeeData.phone}
                                                type="tel"
                                                pattern="[0-9]{10}" title="Enter the 10 degit number"
                                                onChange={(e) =>
                                                    setEmployeeData({
                                                        ...employeeData,
                                                        phone: e.target.value,
                                                    })
                                                }
                                            ></input>
                                        </div>
                                    </div>


                                    <div className="col-lg-12 ">
                                        <div className="form-group   d-flex gap-2 mt-3 align-items-center " >
                                            <button
                                                className="btn btn-success"
                                                type="submit"
                                            // onClick={}
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