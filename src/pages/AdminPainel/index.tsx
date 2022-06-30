import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Dashboard from "../Dashboard";
import Payments from "../Payments";
import { Menu, Container, Body, Children } from "./styles";

export interface IAdminPainel {
  children?: React.ReactNode;
}

const AdminPainel: React.FC<IAdminPainel> = ({ children }) => {
  return (
    <Container>
      <NavBar />
      <Body>
        <Menu>
          <h1>menu</h1>
          <br/><br/>
          <Link to={'/condominios'}>condominiums</Link>
          <br/><br/>
          <Link to={'/condominios/:cnpj/dashboard'}>dashboard</Link>
          <br/><br/>
          <Link to={'/condominios/:cnpj/payments'}>payments</Link>
          <br/><br/>
          <Link to={'/login'}>login</Link>
        </Menu>
        <Children>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/payments" element={<Payments />} />
          </Routes>
        </Children>
      </Body>
    </Container>
  );
};

export default AdminPainel;
