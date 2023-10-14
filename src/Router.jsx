import { createBrowserRouter } from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Pages/Home";
import AddCoffee from "./Pages/AddCoffee";
import ErrorPage from "./Pages/ErrorPage";
import UpdateCoffee from "./Pages/UpdateCoffee";
import Details from "./Pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/coffees"),
      },
      {
        path: "/coffee/details/:id",
        element: <Details />,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/coffees/${params.id}`);
        },
      },
      {
        path: "/addcoffee",
        element: <AddCoffee />,
      },
      {
        path: "/coffee/update/:id",
        element: <UpdateCoffee />,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/coffees/${params.id}`);
        },
      },
    ],
  },
]);
export default router;
