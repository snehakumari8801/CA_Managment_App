import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6 shadow-sm">
      {/* Logo / Title */}
      <div>
        <h3 className="text-xl font-bold text-gray-800">
          CA Management System
        </h3>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* Notification */}
        <button
          className="relative rounded-full p-2 text-xl transition hover:bg-gray-100"
          title="Notifications"
        >
          🔔

          {/* Notification Badge */}
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
          
          {/* Avatar */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
            {user?.name?.charAt(0)?.toUpperCase() || "A"}
          </div>

          {/* User Info */}
          <div className="flex flex-col">
            <strong className="text-sm font-semibold text-gray-800">
              {user?.name || "Admin"}
            </strong>

            <small className="text-xs text-gray-500">
              {user?.role || "Administrator"}
            </small>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Navbar;
