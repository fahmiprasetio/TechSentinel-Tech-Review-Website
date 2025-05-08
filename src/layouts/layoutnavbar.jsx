import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "../styles/navbar.css";

function RootLayout() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; // Cek status login di localStorage
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn && window.location.pathname !== "/Loginpage") {
      navigate("/");
    } else if (isLoggedIn && window.location.pathname === "/Loginpage") {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 navbar bg-base-200 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => `${isActive ? "btn-active" : ""}`}
                >
                  Homepage
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Riview"
                  className={({ isActive }) => `${isActive ? "btn-active" : ""}`}
                >
                  Review
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/comparison"
                  className={({ isActive }) => `${isActive ? "btn-active" : ""}`}
                >
                  Comparison
                </NavLink>
              </li>
              <li>
    <NavLink to="/technology" className={({ isActive }) => `${isActive ? "btn-active" : ""}`}>
      Technology
    </NavLink>
  </li> 
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => `${isActive ? "btn-active" : ""}`}
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
           <NavLink to="/" className="btn btn-ghost text-xl animate-pulse hover:text-white hover:bg-slate-700 hover:animate-none">
           TechSentinel
            </NavLink> 
        </div>
        <div className="navbar-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            {/* Jika sudah login, arahkan ke profile page */}
            <NavLink to={isLoggedIn ? "/ProfilePage" : "/Loginpage"}>
              <div className="w-10 rounded-full bg-white">
                <img
                  alt="Profile"
                  src="https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png"
                />
              </div>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="pt-[3rem]">
        <Outlet />
      </div>

    </>
  );
}

export default RootLayout;
