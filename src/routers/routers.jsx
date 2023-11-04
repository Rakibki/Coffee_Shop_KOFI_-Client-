import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main_layout from "../layout/main_layout/Main_layout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Shop from "../pages/shop/Shop";
import Products from "../pages/products/Products";
import Our_menus from "../pages/out_menus/Our_menus";
import Blog from "../pages/Blog/Blog";
import Product_details from "../pages/product_details/Product_details";
import Check_out from "../pages/check_out/Check_out";
import PrivateRouter from "../routers/PrivateRouter"


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main_layout />,
      children: [
        {
         index: true,
          element: <Home />
        },
        {
          path: "/shop",
          element: <Shop />
        },
        {
          path: "/products",
          element: <Products />
        },
        {
          path: "/ourMenus",
          element: <Our_menus />
        },
        {
          path: "/blog",
          element: <Blog />
        },
        {
          path: "/productDetails/:id",
          element: <Product_details />,
          loader: ({params}) => fetch(`http://localhost:4000/api/v1/productDetails/${params.id}`)
        }
      ] 
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "check_out/:id",
      element: <PrivateRouter> <Check_out /> </PrivateRouter>,
      loader: ({params}) => fetch(`http://localhost:4000/api/v1/productDetails/${params.id}`)
    }
  ])

  export default router