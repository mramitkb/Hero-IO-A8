import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../Pages/Apps/AppDetails";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/apps",
                loader: () => fetch("/appsData.json"),
                Component: Apps
            },
            {
                path: "/installation",
                Component: Installation
            },
            {
                path: "/appDetails/:id",
                loader: () => fetch("/appsData.json"),
                Component: AppDetails
            }
        ]
    },
    {
        path: "*",
        Component: ErrorPage
    }
])

export default router;