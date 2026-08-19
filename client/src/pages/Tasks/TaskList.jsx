import { Link } from "react-router-dom";

function TaskList() {
  const tasks = [
    {
      id: 1,
      title: "Prepare ITR",
      client: "Rahul Sharma",
      assigned: "Priya",
      priority: "High",
      status: "Pending",
    },
    {
      id: 2,
      title: "GST Filing",
      client: "ABC Pvt Ltd",
      assigned: "Rahul",
      priority: "Medium",
      status: "In Progress",
    },
  ];

  return (
    <div>

      <div className="page-header">
        <div>
          <h1>Tasks</h1>
          <p>Manage work and assignments</p>
        </div>

        <Link
          to="/tasks/add"
          className="btn btn-primary"
        >
          + Add Task
        </Link>
      </div>

      <div className="card">

        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Client</th>
              <th>Assigned To</th>
              <th>Priority</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.client}</td>
                <td>{task.assigned}</td>
                <td>{task.priority}</td>
                <td>{task.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default TaskList;