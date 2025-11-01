import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../components/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyProducts from "../pages/MyProducts/MyProducts";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    
    children:[
      {
        index:true,
        Component:Home,
      },
      {
        path:'/login',
        Component:Login
      },
      {
        path:'/register',
        Component:Register
      },
      {
        path:'/my-products',
        element : <PrivateRoutes><MyProducts></MyProducts></PrivateRoutes>
      }
    ]
  },
]);