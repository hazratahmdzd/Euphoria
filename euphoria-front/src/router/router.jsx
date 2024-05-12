import { createBrowserRouter } from "react-router-dom";
import { Home, Auth } from "../pages"

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: "/auth",
        element: <Auth/>,
        children: [
            {
                path: "/auth/sign-in",
            },
            {
                path: "/auth/sign-up",
            },
            {
                path: "/auth/reset-password",
            },
            {
                path: "/auth/check-email",
            },
            {
                path: "/auth/verification",
            },
            {
                path: "/auth/create-new-password",
            }
        ]
    },
])