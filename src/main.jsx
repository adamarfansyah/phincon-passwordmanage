import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/globals.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./containers/index.js";
import DetailUserPage from "./pages/detailUser/index.jsx";
import CategoryPage from "./pages/category/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user/:userId",
    element: <DetailUserPage />,
  },
  {
    path: "/category/:categoryId",
    element: <CategoryPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);
