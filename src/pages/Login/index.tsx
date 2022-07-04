import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DefaultButton from "../../components/DefaultButton";
import TextInputGroup from "../../components/TextInputGroup";
import { auth } from "../../services/User";

import {
  Container,
  LeftContainer,
  RightContainer,
  FormContainer,
  Title,
} from "./styles";

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [cpf, setCpf] = useState("07059371001");
  const [password, setPassword] = useState("12345");

  const navigate = useNavigate();

  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);
    await auth(cpf, password);
    navigate('/condominios');
    setLoading(false);
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
        <DefaultButton label="ENTRAR NO PORTAL" type="submit" loading={loading} />
        <DefaultButton label="QUERO ME CADASTRAR" secondary />
        <Link to={'/'}>ESQUECI A SENHA</Link>
      </FormContainer>
    </Container>
  );
};

export default Login;
