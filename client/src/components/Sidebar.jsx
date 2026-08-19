import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/",
      icon: "📊",
    },
    {
      name: "Clients",
      path: "/clients",
      icon: "👥",
    },
    {
      name: "Employees",
      path: "/employees",
      icon: "👨‍💼",
    },
    {
      name: "Documents",
      path: "/documents",
      icon: "📁",
    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: "✅",
    },
    {
      name: "GST",
      path: "/gst",
      icon: "🧾",
    },
    {
      name: "Tax Returns",
      path: "/tax",
      icon: "💰",
    },
    {
      name: "Invoices",
      path: "/invoices",
      icon: "📄",
    },
    {
      name: "Payments",
      path: "/payments",
      icon: "💳",
    },
    {
      name: "Reports",
      path: "/reports",
      icon: "📈",
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">CA</div>

        <div>
          <h2>CA Manager</h2>
          <small>Management System</small>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <span className="nav-icon">
              {item.icon}
            </span>

            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <small>CA Management v1.0</small>
      </div>
    </aside>
  );
}

export default Sidebar;