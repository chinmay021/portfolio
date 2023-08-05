import Home from "./Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./About";
import Project from "./Project";
import Skill from "./Skill";
import Experience from "./Experience";
import Contact from "./Contact";

import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-Q4Q5K6N2R1";
ReactGA.initialize(MEASUREMENT_ID);

export default function App() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Homepage",
    });
  }, []);

  return (
    <>
      {/* <AnimatePresence mode="wait"> */}
      <Outlet />
      {/* </AnimatePresence> */}
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
        path: "/skills",
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
