import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import TextStyles from "./components/TextStyles.jsx";
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
        path: "/text",
        element: <TextStyles />,
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
