import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EmpDetails = () => {

    let params = useParams();

    let [empData, setEmpData] = useState({})

    const getEmployeeData = async () => {
        let res = await axios.get(`http://localhost:8000/employees/${params.emp_id}`);
        setEmpData(res.data);
    };


    useEffect(() => {
        getEmployeeData();
    }, []);

    console.log("emp dat:", empData)

    return (
        <div>
            {empData && <h1>the emp name is : {empData.name}</h1>}
        </div>
    )
}

export default EmpDetails


