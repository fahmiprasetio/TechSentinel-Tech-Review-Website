import { NavLink, Outlet } from "react-router-dom";
import "../styles/navbar.css";

function RootLayout() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                {" "}
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${isActive ? "btn-active" : ""}`
                  }
                >
                  Homepage
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Riview"
                  className={({ isActive }) =>
                    ` ${isActive ? "btn-active" : ""}`
                  }
                >
                  Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/comparison"
                className={({isActive})=> 
                `${isActive ? 'btn-active': ""}`
                }
                >
                  Comparison
                  
                </NavLink>
                
              </li>
              <li>
                <NavLink to="/about"
                className={({isActive})=> 
                `${isActive ? 'btn-active': ""}`
                }
                >
                  About
                  
                </NavLink>
                
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">TechSentinel</a>
        </div>
        <div className="navbar-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <NavLink to="/Loginpage">
        <div className="w-10 rounded-full bg-white">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png" />
            
        </div>
        </NavLink>
        </div>
        </div>
      </div>

      <div className="p-6">
        <Outlet />
      </div>
    </>
  );
}

export default RootLayout;

// export default Homepage
// {/* <div className="navbar bg-base-100 shadow-md px-6">
//   <div className="flex-1">
// <NavLink to="/" className="btn btn-ghost normal-case text-xl">
//   Tech Sentinel
// </NavLink>
//   </div>

//   {/* Tambahkan div baru khusus untuk menu tengah */}
//   <div className="flex-none mx-auto hidden md:flex gap-2">
// <NavLink
//   to="/"
//   className={({ isActive }) =>
//     `btn btn-sm btn-outline btn-primary ${isActive ? "btn-active" : ""}`
//   }
// >
//   Homepage
// </NavLink>
//     <NavLink
//       to="/about"
//       className={({ isActive }) =>
//         `btn btn-sm btn-outline btn-primary ${isActive ? "btn-active" : ""}`
//       }
//     >
//       About
//     </NavLink>
// <NavLink
//   to="/review"
//   className={({ isActive }) =>
//     `btn btn-sm btn-outline btn-primary ${isActive ? "btn-active" : ""}`
//   }
// >
//   Review
// </NavLink>
//     <NavLink
//       to="/comparison"
//       className={({ isActive }) =>
//         `btn btn-sm btn-outline btn-primary ${isActive ? "btn-active" : ""}`
//       }
//     >
//       Comparison
//     </NavLink>
//   </div>

//   <div className="flex-1"></div> {/* Spacer kanan biar menu tetap di tengah */}
// </div> */}
