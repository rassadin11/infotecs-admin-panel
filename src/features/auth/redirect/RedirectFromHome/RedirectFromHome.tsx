import React from "react";
import { Navigate } from "react-router-dom";

export const RedirectFromHome = () => {
    const token = localStorage.getItem("token");
    if (token) return <Navigate to="/users" replace />;
    return <Navigate to="/login" replace />;
};
