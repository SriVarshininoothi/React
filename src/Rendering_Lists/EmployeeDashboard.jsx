import React, { useState } from "react";

const EmployeeDashboard = () => {
    const employees = [
        { id: 1, name: "Varshini", department: "Development", salary: 60000, experience: 2 },
        { id: 2, name: "RamaDevi", department: "Testing", salary: 40000, experience: 3 },
        { id: 3, name: "Durga", department: "Development", salary: 60000, experience: 3 },
        { id: 4, name: "Naryana", department: "HR", salary: 100000, experience: 5 },
        { id: 5, name: "Arjun", department: "Manager", salary: 80000, experience: 4 },
        { id: 6, name: "Shiva Krishna", department: "Networking", salary: 60000, experience: 2 }
    ];

    const [displayedEmployees, setDisplayedEmployees] = useState([]);
    const [totalSalary, setTotalSalary] = useState(null);

    // Show all employees
    const handleAll = () => {
        setDisplayedEmployees(employees);
        setTotalSalary(null); // Reset total display
    };

    // Filter salary > 50000
    const handleSalary = () => {
        const filtered = employees.filter((emp) => emp.salary > 50000);
        setDisplayedEmployees(filtered);
        setTotalSalary(null);
    };

    // Find employee with ID 3
    const handleByid = () => {
        const found = employees.find((emp) => emp.id === 3);
        setDisplayedEmployees(found ? [found] : []);
        setTotalSalary(null);
    };

    // Sort displayed employees by salary (high to low)
    const handleSort = () => {
        const sorted = [...displayedEmployees].sort((a, b) => b.salary - a.salary);
        setDisplayedEmployees(sorted);
    };

    // Calculate total salary of all employees using reduce
    const handleTotalSalary = () => {
        const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
        setTotalSalary(total);
    };

    return (
        <div className="container my-4">
            <h2>Employee Details</h2>

            <div className="row mb-4">
                <div className="d-flex justify-content-center gap-3 mb-4 mt-3">
                    <button className="btn btn-primary" onClick={handleAll}>All</button>
                    <button className="btn btn-primary" onClick={handleSalary}>Salary</button>
                    <button className="btn btn-primary" onClick={handleByid}>ID</button>
                    <button className="btn btn-primary" onClick={handleSort}>Sort</button>
                    <button className="btn btn-primary" onClick={handleTotalSalary}>Total Salary</button>
                </div>
            </div>

            {/* Total Salary Display banner */}
            {totalSalary !== null && (
                <div className="alert alert-info text-center fw-bold">
                    Total Salary of All Employees: ${totalSalary.toLocaleString()}
                </div>
            )}

            {/* Render Employee Cards */}
            <div className="row">
                {displayedEmployees.map((employee) => (
                    <div className="col-md-4 mb-3" key={employee.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5>Name: {employee.name}</h5>
                                <p>Department: {employee.department}</p>
                                <p>Salary: ${employee.salary}</p>
                                <p>Experience: {employee.experience} years</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmployeeDashboard;