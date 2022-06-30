import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

import { Container, Balance, Name, Value, Eye } from "./styles";

interface IAccountBalance {}

const AccountBalance: React.FC<IAccountBalance> = () => {
  const [hideValues, setHideValues] = useState(false);

  return (
    <Container>
      <Balance>
        <Name>SALDO EM CONTA</Name>
        <Value>R$ {hideValues ? "..." : "41.344,33"}</Value>
      </Balance>
      <Balance>
        <Name>FUNDO DE RESERVA</Name>
        <Value>R$ {hideValues ? "..." : "1.944,23"}</Value>
      </Balance>
      <Balance>
        <Name>FUNDO DE MELHORIAS</Name>
        <Value>R$ {hideValues ? "..." : "344,44"}</Value>
      </Balance>
      <Balance>
        <Name>FUNDO TRABALHISTA</Name>
        <Value>R$ {hideValues ? "..." : "4.554,73"}</Value>
      </Balance>
      <Eye onClick={() => setHideValues(!hideValues)}>
        {hideValues ? <IoEyeSharp size={24} /> : <FaEyeSlash size={24} />}
      </Eye>
    </Container>
  );
};

export default AccountBalance;
