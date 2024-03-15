import React, { useState } from 'react';

const EmployeeCRUD = () => {
  // Initial employee data
  const initialEmployees = [
    { empno: 1, ename: 'John Doe', job: 'Manager', sal: 50000, deptno: 10 },
    { empno: 2, ename: 'Jane Smith', job: 'Developer', sal: 40000, deptno: 20 },
  ];

  const [employees, setEmployees] = useState(initialEmployees);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleDelete = (empno) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      const updatedEmployees = employees.filter((emp) => emp.empno !== empno);
      setEmployees(updatedEmployees);
    }
  };

  const handleSelect = (emp) => {
    setSelectedEmployee(emp);
  };

  return (
    <div>
      <h1>Employee CRUD Operations</h1>
      <table>
        <thead>
          <tr>
            <th>Emp No</th>
            <th>Name</th>
            <th>Job</th>
            <th>Salary</th>
            <th>Dept No</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.empno}>
              <td>{emp.empno}</td>
              <td>{emp.ename}</td>
              <td>{emp.job}</td>
              <td>{emp.sal}</td>
              <td>{emp.deptno}</td>
              <td>
                <button onClick={() => handleSelect(emp)}>Select</button>
                <img
                  src="/logo192.png"
                  alt="Delete"
                  style={{ cursor: 'pointer', marginLeft: '0.5px' }}
                  onClick={() => handleDelete(emp.empno)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedEmployee && (
        <div>
          <h2>Selected Employee</h2>
          <p>Emp No: {selectedEmployee.empno}</p>
          <p>Name: {selectedEmployee.ename}</p>
          <p>Job: {selectedEmployee.job}</p>
          <p>Salary: {selectedEmployee.sal}</p>
          <p>Dept No: {selectedEmployee.deptno}</p>
        </div>
      )}
    </div>
  );
};

export default EmployeeCRUD;
