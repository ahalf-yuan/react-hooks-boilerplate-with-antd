import React, { lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import MainLayout from '@layouts/MainLayout';

const slow = (comp, delay = 3000) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(comp), delay);
  });
};

const Welcome = lazy(() => import("@pages/Home"));
const Home = lazy(() => slow(import("@pages/Home")));
const Auth = lazy(() => import("@pages/Auth"));
const NotFound = lazy(() => import("@pages/Auth"));

function AppRoutes() {
  return useRoutes([
    {
      path: "/",
      element: <Welcome />,
      children: [{ path: "404", element: <NotFound /> }],
    },
    {
      path: "/auth",
      element: <Auth />,
      children: [],
    },
    {
      path: "main",
      element: <MainLayout />,
      children: [{ path: "402", element: <Home /> }],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

export default AppRoutes;
