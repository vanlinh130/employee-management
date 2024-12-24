'use client'

import { useEffect, useState } from 'react';
import { fetchEmployees, deleteEmployee } from '../utils/api';
import Link from 'next/link';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  console.log(employees);
  

  useEffect(() => {
    fetchEmployees().then(setEmployees);
  }, []);

  const handleDelete = (id) => {
    deleteEmployee(id).then(() =>
      setEmployees(employees.filter((emp) => emp.id !== id))
    );
  };  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Employee Management</h1>
      <Link href="/employees/create">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
          Add Employee
        </button>
      </Link>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Address</th>
            <th className="border border-gray-300 px-4 py-2">email</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{emp.name}</td>
              <td className="border border-gray-300 px-4 py-2">{emp.address.city}</td>
              <td className="border border-gray-300 px-4 py-2">{emp.email}</td>
              <td className="border border-gray-300 px-4 py-2">
                <Link href={`/employees/edit/${emp.id}`}>
                  <button className="bg-green-500 text-white px-2 py-1 rounded mr-2">
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(emp.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
