import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TaxReturnForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    client: "",
    assessmentYear: "2026-27",
    type: "ITR-1",
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

    navigate("/tax");
  };

  return (
    <div>

      <div className="page-header">
        <h1>Add Tax Return</h1>
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
              <label>Assessment Year</label>

              <select
                name="assessmentYear"
                value={formData.assessmentYear}
                onChange={handleChange}
              >
                <option>2026-27</option>
                <option>2025-26</option>
              </select>
            </div>

            <div className="form-group">
              <label>Return Type</label>

              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option>ITR-1</option>
                <option>ITR-2</option>
                <option>ITR-3</option>
                <option>ITR-4</option>
                <option>ITR-6</option>
              </select>
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

          <button className="btn btn-primary">
            Save Tax Return
          </button>

        </form>

      </div>

    </div>
  );
}

export default TaxReturnForm;