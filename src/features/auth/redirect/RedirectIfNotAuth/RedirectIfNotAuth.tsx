import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const RedirectIfNotAuth = ({ children }: { children?: React.JSX.Element }) => {
    const token = localStorage.getItem("token");
    if (!token) return <Navigate to="/login" replace />;

    return children ? children : <Outlet />;
};