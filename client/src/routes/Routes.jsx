import Root from "@/layout/root/Root";
import Home from "@/pages/Home";

import { createBrowserRouter } from "react-router-dom";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
]);

export default Routes;
