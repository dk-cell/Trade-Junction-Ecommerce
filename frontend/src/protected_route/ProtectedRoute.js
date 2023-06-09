import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../Loader";

const ProtectedRoute = ({ children }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  if (loading) {
    return <Loader />;
  }

  if (loading === false) {
    if (!isAuthenticated) {
      return <Navigate to={`/login`} replace />;
    } else if (isAuthenticated && user.role === "Admin")
      return <Navigate to={`/admin/dashboard`} replace />;
    return children;
  }
};

export default ProtectedRoute;
