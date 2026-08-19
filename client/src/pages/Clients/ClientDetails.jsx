import { Link, useParams } from "react-router-dom";

function ClientDetails() {
  const { id } = useParams();

  const client = {
    id,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "9876543210",
    type: "Individual",
    pan: "ABCDE1234F",
    gstin: "07ABCDE1234F1Z5",
    address: "New Delhi, India",
    status: "Active",
  };

  return (
    <div>

      <div className="page-header">
        <div>
          <h1>{client.name}</h1>
          <p>Client details</p>
        </div>

        <Link
          to={`/clients/${id}/edit`}
          className="btn btn-primary"
        >
          Edit Client
        </Link>
      </div>

      <div className="card">

        <div className="details-grid">

          <div>
            <label>Name</label>
            <strong>{client.name}</strong>
          </div>

          <div>
            <label>Email</label>
            <strong>{client.email}</strong>
          </div>

          <div>
            <label>Phone</label>
            <strong>{client.phone}</strong>
          </div>

          <div>
            <label>Type</label>
            <strong>{client.type}</strong>
          </div>

          <div>
            <label>PAN</label>
            <strong>{client.pan}</strong>
          </div>

          <div>
            <label>GSTIN</label>
            <strong>{client.gstin}</strong>
          </div>

          <div>
            <label>Status</label>
            <span className="badge badge-success">
              {client.status}
            </span>
          </div>

          <div>
            <label>Address</label>
            <strong>{client.address}</strong>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ClientDetails;