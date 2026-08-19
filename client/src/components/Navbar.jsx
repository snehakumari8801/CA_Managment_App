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
    <header className="navbar">
      <div>
        <h3>CA Management System</h3>
      </div>

      <div className="navbar-right">
        <div className="notification">
          🔔
        </div>

        <div className="user-profile">
          <div className="avatar">
            {user?.name?.charAt(0) || "A"}
          </div>

          <div>
            <strong>
              {user?.name || "Admin"}
            </strong>

            <small>
              {user?.role || "Administrator"}
            </small>
          </div>
        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Navbar;