import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Customers from "../components/Customer Component/Customers";
import Homepage from "../components/Homepage/Homepage";
import Hosting from "../components/Hosting Component/Hosting";
import Packages from "../components/Packages Component/Packages";
import InvalidPage from "./InvalidPage";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Homepage />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/start-hosting" element={<Hosting />} />
        <Route path="*" element={<InvalidPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
