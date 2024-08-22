import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import FontStyles from "./components/FontStyles.jsx";
import LayoutStyles from "./components/LayoutStyles.jsx";
import NotFound from "./components/NotFound.jsx";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/fonts",
        element: <FontStyles />,
      },
      {
        path: "/layouts",
        element: <LayoutStyles />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
