// src/EmployeeService.js
const BASE_URL = 'http://localhost:3001';

async function getAllEmployees() {
  const response = await fetch(`${BASE_URL}/employees`);
  return await response.json();
}

async function createEmployee(employee) {
  const response = await fetch(`${BASE_URL}/employees`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(employee),
  });
  return await response.json();
}

async function updateEmployee(employee) {
  const response = await fetch(`${BASE_URL}/employees/${employee.empno}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(employee),
  });
  return await response.json();
}

async function deleteEmployee(empno) {
  const response = await fetch(`${BASE_URL}/employees/${empno}`, {
    method: 'DELETE',
  });
  return await response.json();
}

export { getAllEmployees, createEmployee, updateEmployee, deleteEmployee };
