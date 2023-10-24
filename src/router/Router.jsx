import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import BrandNameSingle from "../components/BrandNameSingle/BrandNameSingle";
import BrandNameSingleDetails from "../components/BrandNameSingleDetails/BrandNameSingleDetails";
import AddProductUpdate from "../pages/AddProductUpdate/AddProductUpdate";
import MyCart from "../pages/MyCart/MyCart";
import Register from "../pages/Register/Register";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/brands.json')
            },
            {
                path: '/brand/:id',
                element: <BrandNameSingle></BrandNameSingle>,
                loader: () => fetch('http://localhost:5000/addProducts')
            },
            {
                path: '/details/:id',
                element: <BrandNameSingleDetails></BrandNameSingleDetails>,
                loader: () => fetch('http://localhost:5000/addProducts')
            },
            {
                path: '/product',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/updatedProduct/:id',
                element: <AddProductUpdate></AddProductUpdate>,
                loader: ({ params }) => fetch(`http://localhost:5000/addProducts/${params.id}`)
            },
            {
                path: '/cart',
                element: <MyCart></MyCart>,
                loader: () => fetch('http://localhost:5000/myCart')
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }
])

export default myCreatedRoute;