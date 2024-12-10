import React, { lazy } from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Loadable from "./others/Loadable";

const App = Loadable(lazy(() => import("./App")));
const Payment = Loadable(lazy(() => import("./pages/Payment")));
const FormPage = Loadable(lazy(() => import("./pages/Form")));
const NotFound = Loadable(lazy(() => import("./pages/NotFound")));
const Oferta = Loadable(lazy(() => import("./pages/Oferta")));

const router = createBrowserRouter([
  {
    path: "/",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/:route", element: <FormPage /> },
      { path: "/oferta", element: <Oferta /> },
      { path: "/course-info", element: <Payment /> },
    ],
  },
  { path: "/*", element: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
