import React from "react";
import NavBar from "../../components/NavBar";

import { Container, Title } from "./styles";

const NewCondominium: React.FC = () => {
  return (
    <Container>
      <NavBar />
      <Title>Novo condomínio</Title>
    </Container>
  );
};

export default NewCondominium;
