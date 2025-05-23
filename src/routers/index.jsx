import RootLayout from "../layouts/layout";
import { createBrowserRouter } from "react-router-dom";

import Homepage from "../pages/Homepage";
import About from "../pages/About";
import Comparison from "../pages/Comparison";
import Loginpage from "../pages/Loginpage";
import ProfilePage from "../pages/ProfilePage";
import ErrorPage from "../pages/ErrorPage";
import RegisterPage from "../pages/RegisterPage";
import TechPage from "../pages/Tech";
import ProductDetail from "../pages/ProductDetail";
import Article from "../pages/Article";
import DetailArticle from "../pages/DetailArticle";


export const router = createBrowserRouter([
  {
    path: "/", 
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/article",
        element: <Article/>,
      },
      {
        path: "/article/:slug",
        element: <DetailArticle/>,
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
      {
        path: "/technology/detail/:id", 
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />, 
  },
]);

