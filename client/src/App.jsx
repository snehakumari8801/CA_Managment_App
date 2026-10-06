import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "./layouts/AdminLayout";
import AuthLayout from "./layouts/AuthLayout";

import ProtectedRoute from "./components/ProtectedRoute";

// Auth
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

// Dashboard
import Dashboard from "./pages/Dashboard/Dashboard";

// Clients
import ClientList from "./pages/Clients/ClientList";
import ClientDetails from "./pages/Clients/ClientDetails";
import ClientForm from "./pages/Clients/ClientForm";

// Employees
import EmployeeList from "./pages/Employees/EmployeeList";
import EmployeeForm from "./pages/Employees/EmployeeForm";

// Documents
import DocumentList from "./pages/Documents/DocumentList";
import DocumentUpload from "./pages/Documents/DocumentUpload";

// Tasks
import TaskList from "./pages/Tasks/TaskList";
import TaskForm from "./pages/Tasks/TaskForm";

// GST
import GSTList from "./pages/GST/GSTList";
import GSTForm from "./pages/GST/GSTForm";

// Tax
import TaxReturnList from "./pages/Tax/TaxReturnList";
import TaxReturnForm from "./pages/Tax/TaxReturnForm";

// Invoice
import InvoiceList from "./pages/Invoices/InvoiceList";
import InvoiceForm from "./pages/Invoices/InvoiceForm";

// Payments
import PaymentList from "./pages/Payments/PaymentList";

// Reports
import Reports from "./pages/Reports/Reports";

function App() {
  return (
    <Routes>
      {/* Authentication */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Protected Application */}
      <Route element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<Dashboard />} />

          {/* Clients */}
          <Route path="/clients" element={<ClientList />} />
          <Route path="/clients/add" element={<ClientForm />} />
          <Route path="/clients/:id" element={<ClientDetails />} />
          <Route path="/clients/:id/edit" element={<ClientForm />} />

          {/* Employees */}
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/employees/add" element={<EmployeeForm />} />

          {/* Documents */}
          <Route path="/documents" element={<DocumentList />} />
          <Route
            path="/documents/upload"
            element={<DocumentUpload />}
          />

          {/* Tasks */}
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/tasks/add" element={<TaskForm />} />

          {/* GST */}
          <Route path="/gst" element={<GSTList />} />
          <Route path="/gst/add" element={<GSTForm />} />

          {/* Tax */}
          <Route path="/tax" element={<TaxReturnList />} />
          <Route path="/tax/add" element={<TaxReturnForm />} />

          {/* Invoices */}
          <Route path="/invoices" element={<InvoiceList />} />
          <Route path="/invoices/add" element={<InvoiceForm />} />

          {/* Payments */}
          <Route path="/payments" element={<PaymentList />} />

          {/* Reports */}
          <Route path="/reports" element={<Reports />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;