import { Link } from "react-router-dom";

function EmployeeList() {
  const employees = [
    {
      id: 1,
      name: "Rahul Kumar",
      email: "rahul@ca.com",
      role: "Accountant",
      department: "Accounts",
      status: "Active",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@ca.com",
      role: "CA",
      department: "Tax",
      status: "Active",
    },
  ];

  return (
    <div>

      <div className="page-header">
        <div>
          <h1>Employees</h1>
          <p>Manage CA firm employees</p>
        </div>

        <Link
          to="/employees/add"
          className="btn btn-primary"
        >
          + Add Employee
        </Link>
      </div>

      <div className="card">

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Department</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.role}</td>
                <td>{employee.department}</td>
                <td>
                  <span className="badge badge-success">
                    {employee.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default EmployeeList;