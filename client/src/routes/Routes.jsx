import Root from "@/layout/root/Root";
import Error from "@/pages/error/Error";
import Home from "@/pages/home/home/Home";
import SingleCategory from "@/pages/singleCategory/SingleCategory";

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
                path: "/category/:categoryName",
                element: <SingleCategory />,
            },
        ],
    },
]);

export default Routes;
