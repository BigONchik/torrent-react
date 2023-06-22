import React from "react";
import AdminPage from "../pages/AdminPage";
import NotFoundPage from "../pages/NotFoundPage";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductPage from "../pages/ProductPage";

import ProductDetails from "../components/ProductDetails/ProductDetails";

import EditProductPage from "../pages/EditProductPage";
import CartPage from "../pages/CartPage";
import AuthPage from "../pages/AuthPage";
import { useAuth } from "../contexts/AuthContextProvider";
import { ADMIN } from "../helpers/consts";
import SupportPage from "../pages/SupportPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "*",
      element: <NotFoundPage />,
      id: 3,
    },
    {
      link: "/",
      element: <ProductPage />,
      id: 1,
    },

    {
      link: "/details/:id",
      element: <ProductDetails />,
      id: 6,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 7,
    },
    {
      link: "/auth",
      element: <AuthPage />,
      id: 8,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 7,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 5,
    },
    {
      link: "/support",
      element: <SupportPage />,
    },
  ];

  const PRIVATE_ROUTES = [];

  const { user } = useAuth();
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}

      {user
        ? PRIVATE_ROUTES.map((item) => (
            <Route
              key={item.id}
              path={item.link}
              element={
                user.email === ADMIN ? item.element : <Navigate to="*" />
              }
            />
          ))
        : null}
    </Routes>
  );
};

export default MainRoutes;
