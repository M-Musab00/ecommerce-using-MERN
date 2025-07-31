import Body from "./components/Body"
import SingleProduct from "./components/SingleProduct";
import { createBrowserRouter, RouterProvider, Routes} from "react-router-dom";
import AllProducts from "./components/AllProducts";
import Cart from "./components/Cart";
import ProductDashboard from "./components/ProductDashboard";
import EPage from "./components/EPage";
import AppLayout from "./components/layouts/appLayout";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";
import { SearchContext, SearchToggle } from "./components/SearchContext";

function App() {


  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<EPage />,
      children:[
        {
          path:"/",
          element:<Body/>
        },
        {
          path:"/cart",
          element:<Cart/>
        },
        {
          path:"/shop",
          element:<AllProducts/>
        },
        {
          path:"/product",
          element:<SingleProduct/>
        },
        {
          path:"/dashboard",
          element:<ProductDashboard/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/signup",
          element:<SignUp/>
        },
      ]
    }
  ]);


  return (
    <SearchToggle>
      <RouterProvider router={router}/>
    </SearchToggle>
)
  
}

export default App
