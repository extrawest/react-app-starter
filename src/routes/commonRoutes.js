import { lazy } from "react";

// Common routes with using React code splitting approach
const Main = lazy(() => import("pages/common/Main"));
const NotFound = lazy(() => import("pages/common/NotFound"));

export const commonRoutes = [
  {
    component: Main,
    path: "/",
    exact: true,
  },
  {
    component: NotFound,
  },
];
