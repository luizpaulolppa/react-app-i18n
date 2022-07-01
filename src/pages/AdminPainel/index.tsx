import React from "react";
import { Route, Routes } from "react-router-dom";
import Menu from "../../components/Menu";
import NavBar from "../../components/NavBar";
import CondominiumHome from "../CondominiumHome";
import Payments from "../Payments";
import { Container, Body, Children } from "./styles";
export interface IAdminPainel {}

const AdminPainel: React.FC<IAdminPainel> = () => {
  return (
    <Container>
      <NavBar />
      <Body>
        <Menu />
        <Children>
          <Routes>
            <Route path="/:cnpj/home" element={<CondominiumHome />} />
            <Route path="/:cnpj/payments" element={<Payments />} />
          </Routes>
        </Children>
      </Body>
    </Container>
  );
};

export default AdminPainel;
