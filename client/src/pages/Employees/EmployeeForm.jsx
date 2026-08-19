import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EmployeeForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Accountant",
    department: "Accounts",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Employee:", formData);

    navigate("/employees");
  };

  return (
    <div>

      <div className="page-header">
        <div>
          <h1>Add Employee</h1>
          <p>Create a new employee</p>
        </div>
      </div>

      <div className="card">

        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            <div className="form-group">
              <label>Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Role</label>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option>Accountant</option>
                <option>CA</option>
                <option>Manager</option>
                <option>Admin</option>
              </select>
            </div>

            <div className="form-group">
              <label>Department</label>

              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
              >
                <option>Accounts</option>
                <option>Tax</option>
                <option>GST</option>
                <option>Audit</option>
                <option>Administration</option>
              </select>
            </div>

          </div>

          <div className="form-actions">

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() =>
                navigate("/employees")
              }
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Save Employee
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default EmployeeForm;