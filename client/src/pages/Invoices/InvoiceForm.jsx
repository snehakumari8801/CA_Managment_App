import { useState } from "react";
import { useNavigate } from "react-router-dom";

function InvoiceForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    client: "",
    amount: "",
    date: "",
    dueDate: "",
    description: "",
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

    navigate("/invoices");
  };

  return (
    <div>

      <div className="page-header">
        <h1>Create Invoice</h1>
      </div>

      <div className="card">

        <form onSubmit={handleSubmit}>

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
              <label>Amount</label>

              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="₹ Amount"
                required
              />
            </div>

            <div className="form-group">
              <label>Invoice Date</label>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
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

          <div className="form-group">
            <label>Description</label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
            />
          </div>

          <button className="btn btn-primary">
            Create Invoice
          </button>

        </form>

      </div>

    </div>
  );
}

export default InvoiceForm;