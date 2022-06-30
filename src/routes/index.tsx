import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPainel from "../pages/AdminPainel";
import Condominiums from "../pages/Condominiums";
import Login from "../pages/Login";

const RoutesApp: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/condominios" element={<Condominiums />} />
      <Route path="/condominios/*" element={<AdminPainel />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesApp;
