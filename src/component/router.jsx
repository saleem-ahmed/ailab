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
import LabRequestForm from "./labrequestform.jsx";
import EquipmentRequestForm from "./equiprequestform.jsx"
// Admin section pages
import General from "../pages/dashboard/General.jsx";
import Equipments from "../pages/dashboard/Equipments.jsx";
import Approvals from "../pages/dashboard/Approvals.jsx";

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
      { path: "labRequestForm", element: <LabRequestForm /> },
      { path: "equipRequestForm", element: <EquipmentRequestForm /> },
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
    children: [
      { index: true, element: <General /> }, // /admin
      { path: "general", element: <General /> }, // /admin/general
      { path: "equipment", element: <Equipments /> }, // /admin/teams
      { path: "approvals", element: <Approvals /> }, // /admin/approvals
    ],
  },
]);

export default router;
