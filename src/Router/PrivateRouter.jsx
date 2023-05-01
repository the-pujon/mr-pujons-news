import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { toast } from "react-toastify";

const PrivateRouter = ({ children }) => {
  const { loggedUser, loader } = useContext(AuthContext);
  const location = useLocation();

  if (loader) {
    return <Spinner animation="grow" variant="dark" />;
  }

  if (loggedUser) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRouter;
