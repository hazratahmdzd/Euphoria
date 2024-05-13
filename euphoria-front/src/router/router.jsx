import { createBrowserRouter } from "react-router-dom";
import { Home, Auth } from "../pages"
import Signin from "../components/sign in/Signin";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: "/auth",
        element: <Auth />,
        children: [
            {
                path: "/auth/sign-in",
                element: <Signin />
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