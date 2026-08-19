import { useState } from "react";
import { useNavigate } from "react-router-dom";

function GSTForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    client: "",
    period: "",
    type: "GSTR-1",
    dueDate: "",
    status: "Pending",
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

    navigate("/gst");
  };

  return (
    <div>

      <div className="page-header">
        <h1>Add GST Record</h1>
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

                <option>
                  Rahul Sharma
                </option>

                <option>
                  ABC Pvt Ltd
                </option>
              </select>
            </div>

            <div className="form-group">
              <label>Return Type</label>

              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option>GSTR-1</option>
                <option>GSTR-3B</option>
                <option>GSTR-9</option>
              </select>
            </div>

            <div className="form-group">
              <label>Period</label>

              <input
                name="period"
                value={formData.period}
                onChange={handleChange}
                placeholder="July 2026"
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
                required
              />
            </div>

          </div>

          <button className="btn btn-primary">
            Save GST Record
          </button>

        </form>

      </div>

    </div>
  );
}

export default GSTForm;