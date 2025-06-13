// // component/Router.jsx
// import { createBrowserRouter } from "react-router-dom";
// import Layout from "./layout.jsx";
// import Home from "../Layout/home";
// import About from "../Layout/about";
// import Teams from "../Layout/teams";
// import Projects from "../Layout/projects";
// import Labs from "../Layout/labs";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/about", element: <About /> },
//       { path: "/team", element: <Teams /> },
//       { path: "/project", element: <Projects /> },
//       { path: "/lab", element: <Labs /> },

//     ],
//   },
// ]);

// export default router;
import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout.jsx";
import Home from "../Layout/home";
import About from "../Layout/about";
import Teams from "../Layout/teams";
import Projects from "../Layout/projects";
import Labs from "../Layout/labs";
import Login from "../Layout/login";
import AdminDashboard from "../Layout/AdminDashboard";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "team", element: <Teams /> },
      { path: "project", element: <Projects /> },
      { path: "lab", element: <Labs /> },
    ],
  },
  { path: "/login", element: <Login /> },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
]);

export default router;
