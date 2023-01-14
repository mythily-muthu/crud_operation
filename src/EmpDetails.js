import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EmpDetails = () => {

    let emp_id = useParams()
    let [empData, setEmpData] = useState([])

    const getAllEmployees = async () => {
        let res = await axios.get("http://localhost:8000/employees" + emp_id);
        setEmpData(res.data);
    };
    console.log(empData)
    useEffect(() => {
        getAllEmployees();
    }, []);

    return (
        <div>
            {empData && <h1>the emp name is : {empData.name}</h1>}
        </div>
    )
}

export default EmpDetails


