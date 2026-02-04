import React from "react";
import { Navigate } from "react-router-dom";

export const RedirectIfAuth = ({ children }: { children: React.JSX.Element }) => {
    const token = localStorage.getItem("token");
    if (token) return <Navigate to="/" replace />;

    return children;
};