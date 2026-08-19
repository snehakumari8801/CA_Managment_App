import { Link } from "react-router-dom";

function DocumentList() {
  const documents = [
    {
      id: 1,
      name: "PAN Card.pdf",
      client: "Rahul Sharma",
      type: "PAN",
      date: "19 Aug 2026",
      status: "Verified",
    },
    {
      id: 2,
      name: "GST Certificate.pdf",
      client: "ABC Pvt Ltd",
      type: "GST",
      date: "18 Aug 2026",
      status: "Pending",
    },
  ];

  return (
    <div>

      <div className="page-header">
        <div>
          <h1>Documents</h1>
          <p>Manage client documents</p>
        </div>

        <Link
          to="/documents/upload"
          className="btn btn-primary"
        >
          + Upload Document
        </Link>
      </div>

      <div className="card">

        <table>
          <thead>
            <tr>
              <th>Document</th>
              <th>Client</th>
              <th>Type</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {documents.map((document) => (
              <tr key={document.id}>
                <td>{document.name}</td>
                <td>{document.client}</td>
                <td>{document.type}</td>
                <td>{document.date}</td>
                <td>{document.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default DocumentList;