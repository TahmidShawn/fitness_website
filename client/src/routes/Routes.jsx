import Root from "@/layout/root/Root";
import Login from "@/pages/authentication/login/Login";
import Register from "@/pages/authentication/register/Register";
import Error from "@/pages/error/Error";
import Home from "@/pages/home/home/Home";
import Programs from "@/pages/programs/Programs";

import { createBrowserRouter, Navigate } from "react-router-dom";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/category",
                element: <Navigate to="/" />,
            },
            {
                path: "/programs",
                element: <Programs />,
            },
        ],
    },
    {
        path: "/auth/register",
        element: <Register />,
    },
    {
        path: "/auth/login",
        element: <Login />,
    },
]);

export default Routes;
