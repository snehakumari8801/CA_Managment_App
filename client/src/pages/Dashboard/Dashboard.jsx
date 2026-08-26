import StatCard from "../../components/StatCard";

function Dashboard() {
  return (
    <div>
      <h1>DASHBOARD</h1>
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>
            Overview of your CA management system
          </p>
        </div>
      </div>

      <div className="stats-grid">

        <StatCard
          title="Total Clients"
          value="125"
          icon="👥"
          color="blue"
        />

        <StatCard
          title="Employees"
          value="18"
          icon="👨‍💼"
          color="green"
        />

        <StatCard
          title="Pending Tasks"
          value="32"
          icon="✅"
          color="orange"
        />

        <StatCard
          title="Pending Payments"
          value="₹45,000"
          icon="💳"
          color="purple"
        />

      </div>

      <div className="dashboard-grid">

        <div className="card">
          <h2>Recent Activities</h2>

          <table>
            <thead>
              <tr>
                <th>Activity</th>
                <th>User</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>New client added</td>
                <td>Admin</td>
                <td>19 Aug 2026</td>
              </tr>

              <tr>
                <td>GST document uploaded</td>
                <td>Rahul</td>
                <td>19 Aug 2026</td>
              </tr>

              <tr>
                <td>Task completed</td>
                <td>Priya</td>
                <td>18 Aug 2026</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="card">
          <h2>Upcoming Deadlines</h2>

          <div className="deadline">
            <strong>GST Return</strong>
            <span>25 Aug 2026</span>
          </div>

          <div className="deadline">
            <strong>ITR Filing</strong>
            <span>31 Aug 2026</span>
          </div>

          <div className="deadline">
            <strong>TDS Return</strong>
            <span>30 Sep 2026</span>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;