import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.scss";
import root from "./root";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={root} />
  </StrictMode>
);
