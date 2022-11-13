import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const PrivateAuth = ({ children }) => {
  const checkAuth = useSelector((state) => state.isAuth.isAuth);
  const Auth2 = useSelector((state) => state.isAuth2);
  if (checkAuth) {
    return <>{children}</>;
  }
  if (Auth2) {
    return <>{children}</>;
  }

  return <Navigate to={"/signUp"} />;
};

export default PrivateAuth;
