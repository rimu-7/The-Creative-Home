import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage /> // This makes it use Main layout
      },
      {
        path: "*", // catch-all route
        element: <ErrorPage />
      }
    ],
  },
]);
