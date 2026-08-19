import { Link } from "react-router-dom";
import { useState } from "react";

function ClientList() {
  const [search, setSearch] = useState("");

  const clients = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "9876543210",
      type: "Individual",
      pan: "ABCDE1234F",
      status: "Active",
    },
    {
      id: 2,
      name: "ABC Pvt Ltd",
      email: "abc@gmail.com",
      phone: "9876543211",
      type: "Company",
      pan: "XYZDE1234F",
      status: "Active",
    },
    {
      id: 3,
      name: "Priya Enterprises",
      email: "priya@gmail.com",
      phone: "9876543212",
      type: "Company",
      pan: "PQRST1234F",
      status: "Inactive",
    },
  ];

  const filteredClients = clients.filter(
    (client) =>
      client.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      client.email
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div>

      <div className="page-header">
        <div>
          <h1>Clients</h1>
          <p>Manage your CA clients</p>
        </div>

        <Link
          to="/clients/add"
          className="btn btn-primary"
        >
          + Add Client
        </Link>
      </div>

      <div className="card">

        <div className="table-toolbar">

          <input
            className="search-input"
            placeholder="Search clients..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        <div className="table-responsive">

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Type</th>
                <th>PAN</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredClients.map((client) => (
                <tr key={client.id}>

                  <td>
                    <strong>{client.name}</strong>
                  </td>

                  <td>{client.email}</td>

                  <td>{client.phone}</td>

                  <td>{client.type}</td>

                  <td>{client.pan}</td>

                  <td>
                    <span
                      className={
                        client.status === "Active"
                          ? "badge badge-success"
                          : "badge badge-danger"
                      }
                    >
                      {client.status}
                    </span>
                  </td>

                  <td>
                    <Link
                      to={`/clients/${client.id}`}
                      className="action-link"
                    >
                      View
                    </Link>

                    <Link
                      to={`/clients/${client.id}/edit`}
                      className="action-link"
                    >
                      Edit
                    </Link>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>

        </div>

      </div>

    </div>
  );
}

export default ClientList;