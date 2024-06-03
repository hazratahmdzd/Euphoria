import { createBrowserRouter } from "react-router-dom";
import { Home, Auth, Women, Detail, Checkout } from "../pages";
import Signin from "../components/Auth/sign in/Signin";
import CheckEmail from "../components/Auth/check email/CheckEmail";
import Verification from "../components/Auth/verification/Verification";
import Signup from "../components/Auth/sign up/Signup";
import ResetPassword from "../components/Auth/reset password/ResetPassword";
import Password from "../components/Auth/CreatePassword/password";
import ProductList from "../pages/ProductList/ProductList";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "/auth/sign-in",
        element: <Signin />,
      },
      {
        path: "/auth/sign-up",
        element: <Signup />,
      },
      {
        path: "/auth/reset-password",
        element: <ResetPassword />,
      },
      {
        path: "/auth/check-email",
        element: <CheckEmail />,
      },
      {
        path: "/auth/verification",
        element: <Verification />,
      },
      {
        path: "/auth/create-new-password",
        element: <Password />,
      },
    ],
  },
  {
    path: "/women",
    element: <Women />,
  },
  {
    path: "/women/:id",
    element: <Detail />,
  },
  {
    path: "/cart",
    element: <Checkout />,
    children: [
      {
        path: "/cart/checkout",
        element: <Checkout />,
      },
    ],
  },
  {
    path: "/product list",
    element: <ProductList />,
  },
]);
