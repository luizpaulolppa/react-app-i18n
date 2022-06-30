import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DefaultButton from "../../components/DefaultButton";
import TextInputGroup from "../../components/TextInputGroup";

import {
  Container,
  LeftContainer,
  RightContainer,
  FormContainer,
  Title,
} from "./styles";

const Login: React.FC = () => {
  const [cpf, setCpf] = useState("07059371001");
  const [password, setPassword] = useState("12345");

  const navigate = useNavigate();

  function handleSubmit() {
    navigate('/condominios');
  }

  return (
    <Container>
      <LeftContainer></LeftContainer>
      <RightContainer></RightContainer>
      <FormContainer onSubmit={handleSubmit}>
        <Title>Login</Title>
        <TextInputGroup
          label="CPF"
          onChange={setCpf}
          value={cpf}
        />
        <TextInputGroup
          label="Senha"
          onChange={setPassword}
          value={password}
        />
        <DefaultButton label="ENTRAR NO PORTAL" type="submit" />
        <DefaultButton label="QUERO ME CADASTRAR" secondary />
        <Link to={'/'}>ESQUECI A SENHA</Link>
      </FormContainer>
    </Container>
  );
};

export default Login;
