import { Home } from "@/presentation/pages/Home";
import Login from "@/presentation/pages/Login";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginRedirect, PrivateRoute } from "../components/features/Redirect";
import { Form } from "../pages/Form";

const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Form />} />
      </Route>
      <Route element={<LoginRedirect />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
