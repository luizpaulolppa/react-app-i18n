import React, { useEffect, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { getBalances, IBalance } from "../../services/Condominium";

import { Container, Balance, Name, Value, Eye } from "./styles";

interface IAccountBalance {}

const AccountBalance: React.FC<IAccountBalance> = () => {
  const [hideValues, setHideValues] = useState(false);
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState<IBalance>();

  const { cnpj } = useParams();

  useEffect(() => {
    loadBalances();
  }, []);

  async function loadBalances() {
    if (!cnpj) return;
    
    setLoading(true);
    const condo = await getBalances(cnpj);
    setLoading(false);

    if (condo && condo.balance) {
      setBalance(condo.balance);
    } else {
      setBalance({
        accountValue: 0.0,
        freeValue: 0.0,
        improvementsValue: 0.0,
        laborValue: 0.0,
      });
    }
  }

  return (
    <Container>
      <Balance>
        <Name>SALDO EM CONTA</Name>
        {loading ? (
          <Value>Carregando...</Value>
        ) : (
          <Value>R$ {hideValues ? "..." : balance?.accountValue}</Value>
        )}
      </Balance>
      <Balance>
        <Name>FUNDO DE RESERVA</Name>
        {loading ? (
          <Value>Carregando...</Value>
        ) : (
          <Value>R$ {hideValues ? "..." : balance?.freeValue}</Value>
        )}
      </Balance>
      <Balance>
        <Name>FUNDO DE MELHORIAS</Name>
        {loading ? (
          <Value>Carregando...</Value>
        ) : (
          <Value>R$ {hideValues ? "..." : balance?.improvementsValue}</Value>
        )}
      </Balance>
      <Balance>
        <Name>FUNDO TRABALHISTA</Name>
        {loading ? (
          <Value>Carregando...</Value>
        ) : (
          <Value>R$ {hideValues ? "..." : balance?.laborValue}</Value>
        )}
      </Balance>
      <Eye onClick={() => setHideValues(!hideValues)}>
        {hideValues ? <IoEyeSharp size={24} /> : <FaEyeSlash size={24} />}
      </Eye>
    </Container>
  );
};

export default AccountBalance;
