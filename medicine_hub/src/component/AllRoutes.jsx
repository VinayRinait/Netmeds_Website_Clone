import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin";
import AdminSignup from "../pages/AdminSignup";
import Cart from "../pages/Cart";
import CovidEssentialsPage from "../pages/CovidEssentialsPage";
import Home from "../pages/Home";
import Payment from "../pages/Payment";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Success from "../pages/Success";
import PrivateAuth from "./PrivateAuth";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/wellness/covidEssentials"
          element={<CovidEssentialsPage />}
        />
        <Route path="/wellness/admin" element={<Admin />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route
          path="/checkout/payment-information"
          element={
            <PrivateAuth>
              <Payment />
            </PrivateAuth>
          }
        />
        <Route
          path="/success"
          element={
            <PrivateAuth>
              <Success></Success>
            </PrivateAuth>
          }
        />
        <Route
          path="/adminlogin"
          element={
            <PrivateAuth>
              <AdminSignup></AdminSignup>
            </PrivateAuth>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
