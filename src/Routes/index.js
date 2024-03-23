import { createBrowserRouter } from "react-router-dom";
import UsersListing from "../Pages/usersListing";
import Courses from "../Pages/courses";
import NotFoundPage from "../Pages/notFoundPage";

export default createBrowserRouter([
  {
    path: "/",
    element: <UsersListing />,
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
