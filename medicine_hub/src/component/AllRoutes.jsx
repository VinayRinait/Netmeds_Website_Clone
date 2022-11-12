import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin";
import Cart from "../pages/Cart";
import CovidEssentialsPage from "../pages/CovidEssentialsPage";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";

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
      </Routes>
    </div>
  );
};

export default AllRoutes;
