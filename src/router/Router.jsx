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
import PrivateRoute from "./PrivateRoute";

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
                loader: () => fetch('https://entertainment-media-server.vercel.app/addProducts')
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><BrandNameSingleDetails></BrandNameSingleDetails>,</PrivateRoute>,
                loader: () => fetch('https://entertainment-media-server.vercel.app/addProducts')
            },
            {
                path: '/product',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/updatedProduct/:id',
                element: <AddProductUpdate></AddProductUpdate>,
                loader: ({ params }) => fetch(`https://entertainment-media-server.vercel.app/addProducts/${params.id}`)
            },
            {
                path: '/cart/:email',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: ({params}) => fetch(`https://entertainment-media-server.vercel.app/myCart/${params.email}`)
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