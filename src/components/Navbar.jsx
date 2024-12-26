// src/components/Navbar.jsx

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // Logout handler
  const handleLogout = () => {
    // Remove any authentication-related data, e.g., token, from localStorage/sessionStorage or state
    localStorage.removeItem("authToken");  // Assuming you are storing the token here
    // You can also clear other data if needed
    // sessionStorage.clear(); 

    // Navigate the user to the login page after logout
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">My Application</h1>
        <div>
          <button onClick={handleLogout} className="bg-red-500 p-2 rounded">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
