import Home from "./Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./About";
import Project from "./Project";
import Skill from "./Skill";
import Experience from "./Experience";
import Contact from "./Contact";

export default function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error...</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/skill",
        element: <Skill />,
      },
      {
        path: "/journey",
        element: <Experience />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
