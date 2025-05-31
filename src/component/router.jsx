// component/Router.jsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout.jsx";
import Home from "../Layout/home";
import About from "../Layout/about";
import Teams from "../Layout/teams";
import Projects from "../Layout/ipads.jsx";
import Labs from "../Layout/labs";
import LMS from "../Layout/lms.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/team", element: <Teams /> },
      { path: "/ipads", element: <Projects /> },
      { path: "/lms", element: <LMS /> },
      { path: "/lab", element: <Labs /> },

    ],
  },
]);

export default router;
