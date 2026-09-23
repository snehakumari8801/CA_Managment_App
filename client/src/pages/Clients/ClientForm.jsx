import { useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

function ClientForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const isEdit = Boolean(id);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Individual",
    pan: "",
    gstin: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      isEdit
        ? "Update Client"
        : "Create Client",
      formData
    );

    navigate("/clients");
  };

  return (
    <div>

      <div className="page-header">
        <div>
          <h1>
            {isEdit
              ? "Edit Client"
              : "Add Client"}
          </h1>

          <p>
            {isEdit
              ? "Update client information"
              : "Create a new client"}
          </p>
        </div>
      </div>

      <div className="card">

        <form onSubmit={handleSubmit}>

          <div className="form-grid">

            <div className="form-group">
              <label>Client Name *</label>

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Client name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email *</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
              />
            </div>

            <div className="form-group">
              <label>Client Type</label>

              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option>Individual</option>
                <option>Company</option>
                <option>Partnership</option>
                <option>LLP</option>
              </select>
            </div>

            <div className="form-group">
              <label>PAN</label>

              <input
                name="pan"
                value={formData.pan}
                onChange={handleChange}
                placeholder="PAN"
              />
            </div>

            <div className="form-group">
              <label>GSTIN</label>

              <input
                name="gstin"
                value={formData.gstin}
                                placeholder="GSTIN"

                onChange={handleChange}
              />
            </div>

          </div>

          <div className="form-group">
            <label>Address</label>

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="4"
              placeholder="Full address"
            />
          </div>

          <div className="form-actions">

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() =>
                navigate("/clients")
              }
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn btn-primary"
            >
              {isEdit
                ? "Update Client"
                : "Save Client"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default ClientForm;