import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Courses from "../Pages/courses";
import NotFoundPage from "../Pages/notFoundPage";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/view-courses/:id",
    element: <Courses />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
