import { Link } from "react-router-dom";

function TaxReturnList() {
  const returns = [
    {
      id: 1,
      client: "Rahul Sharma",
      assessmentYear: "2026-27",
      type: "ITR-3",
      dueDate: "31 Jul 2026",
      status: "Filed",
    },
    {
      id: 2,
      client: "ABC Pvt Ltd",
      assessmentYear: "2026-27",
      type: "ITR-6",
      dueDate: "30 Sep 2026",
      status: "Pending",
    },
  ];

  return (
    <div>

      <div className="page-header">

        <div>
          <h1>Tax Returns</h1>
          <p>Manage income tax returns</p>
        </div>

        <Link
          to="/tax/add"
          className="btn btn-primary"
        >
          + Add Tax Return
        </Link>

      </div>

      <div className="card">

        <table>
          <thead>
            <tr>
              <th>Client</th>
              <th>Assessment Year</th>
              <th>Return Type</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {returns.map((item) => (
              <tr key={item.id}>
                <td>{item.client}</td>
                <td>{item.assessmentYear}</td>
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

export default TaxReturnList;