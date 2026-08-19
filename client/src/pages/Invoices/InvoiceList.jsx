import { Link } from "react-router-dom";

function InvoiceList() {
  const invoices = [
    {
      id: 1,
      number: "INV-001",
      client: "Rahul Sharma",
      amount: "₹10,000",
      date: "10 Aug 2026",
      status: "Paid",
    },
    {
      id: 2,
      number: "INV-002",
      client: "ABC Pvt Ltd",
      amount: "₹25,000",
      date: "15 Aug 2026",
      status: "Pending",
    },
  ];

  return (
    <div>

      <div className="page-header">

        <div>
          <h1>Invoices</h1>
          <p>Manage client invoices</p>
        </div>

        <Link
          to="/invoices/add"
          className="btn btn-primary"
        >
          + Create Invoice
        </Link>

      </div>

      <div className="card">

        <table>
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Client</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.number}</td>
                <td>{invoice.client}</td>
                <td>{invoice.amount}</td>
                <td>{invoice.date}</td>
                <td>{invoice.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default InvoiceList;