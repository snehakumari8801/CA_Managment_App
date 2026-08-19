import { Link } from "react-router-dom";

function GSTList() {
  const gstRecords = [
    {
      id: 1,
      client: "ABC Pvt Ltd",
      period: "July 2026",
      type: "GSTR-3B",
      dueDate: "20 Aug 2026",
      status: "Pending",
    },
    {
      id: 2,
      client: "Rahul Sharma",
      period: "July 2026",
      type: "GSTR-1",
      dueDate: "11 Aug 2026",
      status: "Filed",
    },
  ];

  return (
    <div>

      <div className="page-header">
        <div>
          <h1>GST Management</h1>
          <p>Manage GST filings</p>
        </div>

        <Link
          to="/gst/add"
          className="btn btn-primary"
        >
          + Add GST Record
        </Link>
      </div>

      <div className="card">

        <table>
          <thead>
            <tr>
              <th>Client</th>
              <th>Period</th>
              <th>Return</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {gstRecords.map((item) => (
              <tr key={item.id}>
                <td>{item.client}</td>
                <td>{item.period}</td>
                <td>{item.type}</td>
                <td>{item.dueDate}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default GSTList;