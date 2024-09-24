import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Form,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Payment from "./pages/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "/form", element: <Form/> },
      { path: "/course-info", element: <Payment/> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);