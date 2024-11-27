import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import AddFood from"../Components/AddFood"
import Home from "../Components/Home";
import FoodDetails from "../Components/FoodDetails";
import UpdateFood from "../Components/UpdateFood";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/foods")
      },
      {
        path: "/addfood",
        element: <AddFood></AddFood>,
      },
      {
        path: "/fooddetails",
        element: <FoodDetails></FoodDetails>,
      },
      {
        path:"/updatefood/:id",
        element: <UpdateFood></UpdateFood>,
        loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
      }
    ]
  },
]);

export default router;
