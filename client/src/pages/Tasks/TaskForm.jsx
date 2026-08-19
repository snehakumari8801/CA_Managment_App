import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TaskForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    client: "",
    assignedTo: "",
    priority: "Medium",
    dueDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    navigate("/tasks");
  };

  return (
    <div>

      <div className="page-header">
        <div>
          <h1>Add Task</h1>
          <p>Create a new task</p>
        </div>
      </div>

      <div className="card">

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Task Title</label>

            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Description</label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
            />
          </div>

          <div className="form-grid">

            <div className="form-group">
              <label>Client</label>

              <select
                name="client"
                value={formData.client}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select Client
                </option>
                <option>Rahul Sharma</option>
                <option>ABC Pvt Ltd</option>
              </select>
            </div>

            <div className="form-group">
              <label>Assign To</label>

              <select
                name="assignedTo"
                value={formData.assignedTo}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select Employee
                </option>
                <option>Rahul</option>
                <option>Priya</option>
              </select>
            </div>

            <div className="form-group">
              <label>Priority</label>

              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>

            <div className="form-group">
              <label>Due Date</label>

              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className="form-actions">

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() =>
                navigate("/tasks")
              }
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Create Task
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default TaskForm;