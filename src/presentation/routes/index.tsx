import { Home } from "@/presentation/pages/Home";
import React from "react";
import { Route, Routes } from "react-router-dom";

const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoute;
