import RootLayout from "../layouts/layoutnavbar";
import { createBrowserRouter } from "react-router-dom";

import Homepage from "../pages/Homepage";
import Riview from "../pages/Review";
import About from "../pages/About"
import Comparison from "../pages/Comparison";
import Loginpage from "../pages/Loginpage";
import ErrorPage from "../pages/ErrorPage";
import RegisterPage from "../pages/RegisterPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children : [
      {
        path : "/",
        element: <Homepage/>,

      },
      {
        path: "/Riview",
        element: <Riview/>,
        
      },
      {
        path: "/About",
        element: <About/>,
        
      },
      {
        path: "/Comparison",
        element: <Comparison/>,
        
      },
      {
        path: "/Loginpage",
        element: <Loginpage/>,
        
      },
      {
        path: "/RegisterPage",
        element: <RegisterPage/>,
      }
    //   {
    //     path: "/blog/:id",
    //     element: <Post/>,
    //     loader: postByid,
    //   },
    //   {
    //     path: "/blog",
    //     element: <Blog/>,
    //     loader: posts,
    //   }
    ]
  },
  
]);
