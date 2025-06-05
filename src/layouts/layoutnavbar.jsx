import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/navbar.css";

function RootLayout() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
  const storedUser = localStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : null;
});


  useEffect(() => {
    if (!isLoggedIn && window.location.pathname !== "/Loginpage") {
      navigate("/");
    } else if (isLoggedIn && window.location.pathname === "/Loginpage") {
      navigate("/");
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (isLoggedIn && storedUser) {
      setUser(storedUser);
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
  const interval = setInterval(() => {
    const updatedUser = JSON.parse(localStorage.getItem("user"));
    setUser(updatedUser);
  }, 100); // cek setiap detik

  return () => clearInterval(interval);
}, []);


  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 navbar bg-gray-900 shadow-sm text-white">
        <div className="navbar-start ">
          <NavLink
            to="/"
            className=" hidden lg:block py-2 btn btn-ghost text-xl animate-pulse hover:text-white hover:bg-slate-700 hover:animate-none"
          >
            TechSentinel
          </NavLink>

          <div className="dropdown lg:hidden ml-2 ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
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
            <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-slate-400 rounded-box w-52 text-black z-50 ">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${isActive ? "btn-active" : ""} `
                  }
                >
                  Homepage
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/technology"
                  className={({ isActive }) =>
                    `${isActive ? "btn-active" : ""}`
                  }
                >
                  Technology
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/article"
                  className={({ isActive }) =>
                    `${isActive ? "btn-active" : ""}`
                  }
                >
                  Article
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/comparison"
                  className={({ isActive }) =>
                    `${isActive ? "btn-active" : ""}`
                  }
                >
                  Comparison
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${isActive ? "btn-active" : ""}`
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-center ">
          <div className="lg:hidden">
            <NavLink
              to="/"
              className="btn btn-ghost text-xl animate-pulse hover:text-white hover:bg-slate-700 hover:animate-none "
            >
              TechSentinel
            </NavLink>
          </div>
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${isActive ? "btn-active" : ""} text-base mx-2 hover:bg-slate-700 `
                  }
                >
                  Homepage
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/technology"
                  className={({ isActive }) =>
                    `${isActive ? "btn-active" : ""} text-base mx-2  hover:bg-slate-700`
                  }
                >
                  Technology
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/article"
                  className={({ isActive }) =>
                    `${isActive ? "btn-active" : ""} text-base mx-2  hover:bg-slate-700`
                  }
                >
                  Article
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/comparison"
                  className={({ isActive }) =>
                    `${isActive ? "btn-active" : ""} text-base mx-2  hover:bg-slate-700`
                  }
                >
                  Comparison
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${isActive ? "btn-active" : ""} text-base mx-2  hover:bg-slate-700`
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-end">
          <NavLink
            to={isLoggedIn ? "/ProfilePage" : "/Loginpage"}
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white">
             <img
  alt="Profile"
  src={
    user?.photo
      ? user.photo
      : "https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png"
  }
/>
            </div>
          </NavLink>
        </div>
      </div>

      <div className="pt-16">
        <Outlet />
      </div>
    </>
  );
}

export default RootLayout;
