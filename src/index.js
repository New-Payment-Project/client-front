import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Form as RouterForm,  // Rename the Form from react-router-dom
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Payment from "./pages/Payment";
import FormPage from "./pages/Form";  // Rename the custom Form component

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <FormPage /> },  // Use the renamed custom FormPage here
      { path: "/course-info", element: <Payment /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
