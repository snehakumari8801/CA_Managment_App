function Reports() {
  return (
    <div>

      <div className="page-header">
        <div>
          <h1>Reports</h1>
          <p>View management reports</p>
        </div>
      </div>

      <div className="stats-grid">

        <div className="card">
          <h3>Total Revenue</h3>
          <h1>₹2,50,000</h1>
        </div>

        <div className="card">
          <h3>Total Clients</h3>
          <h1>125</h1>
        </div>

        <div className="card">
          <h3>Invoices</h3>
          <h1>87</h1>
        </div>

        <div className="card">
          <h3>Pending</h3>
          <h1>15</h1>
        </div>

      </div>

      <div className="card">

        <h2>Monthly Revenue</h2>

        <div className="report-bars">

          <div>
            <span>Jan</span>
            <div className="bar" style={{ height: "40%" }} />
          </div>

          <div>
            <span>Feb</span>
            <div className="bar" style={{ height: "60%" }} />
          </div>

          <div>
            <span>Mar</span>
            <div className="bar" style={{ height: "75%" }} />
          </div>

          <div>
            <span>Apr</span>
            <div className="bar" style={{ height: "55%" }} />
          </div>

          <div>
            <span>May</span>
            <div className="bar" style={{ height: "90%" }} />
          </div>

        </div>

      </div>

    </div>
  );
}

export default Reports;