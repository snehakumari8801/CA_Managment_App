import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DocumentUpload() {
  const navigate = useNavigate();

  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(file);

    navigate("/documents");
  };

  return (
    <div>

      <div className="page-header">
        <div>
          <h1>Upload Document</h1>
          <p>Upload a client document</p>
        </div>
      </div>

      <div className="card">

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Client</label>

            <select required>
              <option value="">
                Select Client
              </option>
              <option>Rahul Sharma</option>
              <option>ABC Pvt Ltd</option>
            </select>
          </div>

          <div className="form-group">
            <label>Document Type</label>

            <select required>
              <option value="">
                Select Type
              </option>
              <option>PAN</option>
              <option>GST</option>
              <option>ITR</option>
              <option>Bank Statement</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>File</label>

            <input
              type="file"
              onChange={(e) =>
                setFile(e.target.files[0])
              }
              required
            />
          </div>

          <div className="form-actions">

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() =>
                navigate("/documents")
              }
            >
              Cancel
            </button>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Upload
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default DocumentUpload;