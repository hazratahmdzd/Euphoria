import { createBrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import { Home, Auth, Women, Detail, Checkout } from "../pages";
=======
import { Home, Auth, Checkout } from "../pages";
>>>>>>> 0c0d2c3d7af56ff2d9e592d084043c198565c691
import Signin from "../components/Auth/sign in/Signin";
import CheckEmail from "../components/Auth/check email/CheckEmail";
import Verification from "../components/Auth/verification/Verification";
import Signup from "../components/Auth/sign up/Signup";
import ResetPassword from "../components/Auth/reset password/ResetPassword";
import Password from "../components/Auth/CreatePassword/password";
import ProductList from "../pages/ProductList/ProductList";
import Confirm from "../pages/ConfirmOrder/Confirm";
import AddtoCart from "../pages/AddToCart/AddToCart";

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
<<<<<<< HEAD
  },
  {
    path: "/women",
    element: <Women />,
  },
  {
    path: "/women/:id",
    element: <Detail />,
=======
>>>>>>> 0c0d2c3d7af56ff2d9e592d084043c198565c691
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
<<<<<<< HEAD
=======
  },
  {
    path: "/confirm-order",
    element: <Confirm />,
>>>>>>> 0c0d2c3d7af56ff2d9e592d084043c198565c691
  },
  {
    path: "/product list",
    element: <ProductList />,
  },
<<<<<<< HEAD
=======
  {
    path: "/addtocart",
    element: <AddtoCart />,
  },
>>>>>>> 0c0d2c3d7af56ff2d9e592d084043c198565c691
]);
