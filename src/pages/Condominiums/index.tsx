import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { getCondos, ICondos } from "../../services/Utils";

import {
  Container,
  CondosContainer,
  FiltersContainers,
  Title,
  TextInput,
  Button,
  CondosListContainer,
  CondoCardContainer,
  LoadingCondos,
  Text,
} from "./styles";

const Condominiums: React.FC = () => {
  const [condos, setCondos] = useState<ICondos[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCondos();
  }, []);

  async function loadCondos() {
    setLoading(true);
    setCondos(await getCondos());
    setLoading(false);
  }

  return (
    <>
      <NavBar />
      <Container>
        <CondosContainer>
          <FiltersContainers>
            <Title>Meus condomínios</Title>
            <TextInput
              maxLength={100}
              placeholder="Buscar condomínio (nome, cnpj, síndico...)"
            />
            <Button>INCLUIR CONDOMÍNIO</Button>
          </FiltersContainers>
          <CondosListContainer>
            {loading && (
              <LoadingCondos>
                <Text>Carregando os condomínios...</Text>
              </LoadingCondos>
            )}
            {condos.map(({ name, cnpj, syndic }, index) => (
              <CondoCardContainer key={index}>
                <Text>{name}</Text>
                <Text>CNPJ: {cnpj}</Text>
                <Text>Síndico: {syndic}</Text>
              </CondoCardContainer>
            ))}
          </CondosListContainer>
        </CondosContainer>
      </Container>
      {/* <Link to={'/condominiums/dashboard'}>dashboard</Link> */}
    </>
  );
};

export default Condominiums;
