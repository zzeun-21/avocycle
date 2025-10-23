import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Plants from "./pages/Plants.jsx";
import PlantDetail from "./pages/PlantDetail.jsx";
import Monitoring from "./pages/Monitoring.jsx";
import Report from "./pages/Report.jsx";

const router = createBrowserRouter([
  // Layout login & register (2 panel)
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },

    ],
  },

  // Layout dashboard Avocycle
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
       { path: "plants", element: <Plants /> },
        { path: "plants/:id", element: <PlantDetail /> },
         { path: "monitoring", element: <Monitoring /> }, 
         { path: "report", element: <Report /> },
    ],
  },

 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
