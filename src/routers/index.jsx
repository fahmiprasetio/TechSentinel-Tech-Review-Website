import RootLayout from "../layouts/layout";
import { createBrowserRouter } from "react-router-dom";

import Homepage from "../pages/Homepage";
import Riview from "../pages/Review";
import About from "../pages/About";
import Comparison from "../pages/Comparison";
import Loginpage from "../pages/Loginpage";
import ProfilePage from "../pages/ProfilePage";
import ErrorPage from "../pages/ErrorPage";
import RegisterPage from "../pages/RegisterPage";
import TechPage from "../pages/tech"; 


export const router = createBrowserRouter([
  {
    path: "/",  // root path hanya ada sekali
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/Riview",
        element: <Riview />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Comparison",
        element: <Comparison />,
      },
      {
        path: "/Loginpage",
        element: <Loginpage />,
      },
      {
        path: "/RegisterPage",
        element: <RegisterPage />,
      },
      {
        path: "/ProfilePage",
        element: <ProfilePage />,
      },
      {
        path: "/technology",
        element: <TechPage />,
      },      
    ],
  },
]);
