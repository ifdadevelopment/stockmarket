import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../components/authContext";

const ProtectedRoute = () => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
