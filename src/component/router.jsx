// component/Router.jsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout.jsx";
import Home from "../Layout/home";
import About from "../Layout/about";
import Teams from "../Layout/teams";
import Projects from "../Layout/projects";
import Labs from "../Layout/labs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/team", element: <Teams /> },
      { path: "/project", element: <Projects /> },
      { path: "/lab", element: <Labs /> },

    ],
  },
]);

export default router;
