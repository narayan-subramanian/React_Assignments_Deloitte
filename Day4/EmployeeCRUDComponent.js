// src/EmployeeCRUDComponent.js
import React, { useState, useEffect } from 'react';
import { getAllEmployees, createEmployee, updateEmployee, deleteEmployee } from './EmployeeService';

const EmployeeCRUDComponent = () => {
  // State for storing employees and form data
  const [employees, setEmployees] = useState([]);
  const [employeeForm, setEmployeeForm] = useState({
    empno: '',
    ename: '',
    job: '',
    sal: '',
    deptno: '',
  });

  // Fetch all employees on component mount
  useEffect(() => {
    fetchEmployees();
  }, []);

  // Function to fetch all employees
  const fetchEmployees = async () => {
    const data = await getAllEmployees();
    setEmployees(data);
  };

  // Handle input change in form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeForm((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  // Handle create employee
  const handleCreateEmployee = async () => {
    await createEmployee(employeeForm);
    fetchEmployees();
  };

  // Handle update employee
  const handleUpdateEmployee = async (empno) => {
    await updateEmployee({ ...employeeForm, empno });
    fetchEmployees();
  };

  // Handle delete employee
  const handleDeleteEmployee = async (empno) => {
    await deleteEmployee(empno);
    fetchEmployees();
  };

  return (
    <div>
      <h1>Employee CRUD</h1>
      {/* Your CRUD UI goes here */}
    </div>
  );
};

export default EmployeeCRUDComponent;
