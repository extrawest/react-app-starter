import { lazy } from "react";
import { roles } from "utils/types/roles";

const AdminLogin = lazy(() => import("pages/dashboard/Login"));
const AdminRegister = lazy(() => import("pages/dashboard/Register"));
const AdminDashboard = lazy(() => import("pages/dashboard/Dashboard") );

export const privateRoutes = [
  {
    component: AdminLogin,
    path: "/admin/login",
    exact: true,
    denyShowLoginPage: true,
  },
  {
    component: AdminRegister,
    path: "/admin/register",
    exact: true,
    denyShowLoginPage: true,
  },
  {
    component: AdminDashboard,
    path: "/admin",
    exact: true,
    isAdminAuth: true,
    roles: [
      roles.ROLE_SUPER_ADMIN,
      roles.ROLE_ADMIN
    ],
  },
];