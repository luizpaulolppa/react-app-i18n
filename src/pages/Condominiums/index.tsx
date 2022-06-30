import React, { useEffect, useState } from "react";
import DefaultButton from "../../components/DefaultButton";
import NavBar from "../../components/NavBar";
import TextInput from "../../components/TextInput";
import { getCondos, ICondos } from "../../services/Condominium";

import {
  Container,
  CondosContainer,
  FiltersContainers,
  Title,
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
            <DefaultButton label="INCLUIR CONDOMÍNIO" />
          </FiltersContainers>
          <CondosListContainer>
            {loading && (
              <LoadingCondos>
                <Text>Carregando condomínios...</Text>
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
    </>
  );
};

export default Condominiums;
