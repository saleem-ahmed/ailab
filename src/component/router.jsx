// component/Router.jsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout.jsx";
import Home from "../Layout/home";
import About from "../Layout/about";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },

    ],
  },
]);

export default router;
