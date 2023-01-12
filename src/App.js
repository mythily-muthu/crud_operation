import EmpListing from "./EmpListing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmpCreate from "./EmpCreate";
import EmpEdit from "./EmpEdit";
import EmpDetails from "./EmpDetails";




function App() {
  return (
    <div className="App">
      <h2 className='text-center'>React CRUD application</h2>
      <Router>
        <Routes>
          <Route path="/" element={<EmpListing />} />
          <Route path="/employee/create" element={<EmpCreate />} />
          <Route path="/employee/edit/:emp_id" element={<EmpEdit />} />
          <Route path="/employee/details/:emp_id" element={<EmpDetails />} />

        </Routes>
      </Router>
    </div >
  );
}

export default App;
