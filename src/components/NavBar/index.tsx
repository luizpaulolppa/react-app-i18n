import React from "react";

import { Container } from "./styles";

import condoContaLogo from '../../assets/condoconta_logo.svg';
import { Link } from "react-router-dom";

const NavBar: React.FC = () => (
  <Container>
    <img src={condoContaLogo} alt="CondoConta" />
    <Link to={'/login'}>Sair</Link>
  </Container>
);

export default NavBar;
