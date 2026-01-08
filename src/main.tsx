import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
import Layout from "./layout.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  return <RouterProvider router={router} />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Layout />,
    children: [],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
