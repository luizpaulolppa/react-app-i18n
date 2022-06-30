import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import CondominiumHome from "../CondominiumHome";
import Payments from "../Payments";
import { TbHome } from "react-icons/tb";
import { RiNewspaperLine } from "react-icons/ri";
import { MdOutlinePayments, MdOutlineManageAccounts, MdSchedule } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { AiOutlineDownload } from "react-icons/ai";
import {
  Menu,
  Container,
  Body,
  Children,
  ChangeCondo,
  TextChangeCondo,
  CondoText,
  CondoName,
  CondoInfo,
  ItemMenu,
  ItemMenuName
} from "./styles";
export interface IAdminPainel {
  children?: React.ReactNode;
}

const AdminPainel: React.FC<IAdminPainel> = ({ children }) => {
  const navigate = useNavigate();

  function handleChangeCondo() {
    navigate("/condominios");
  }

  return (
    <Container>
      <NavBar />
      <Body>
        <Menu>
          <CondoInfo>
            <CondoName>Condomínio ABC</CondoName>
            <CondoText>CNPJ: 76.224.335/0001-55</CondoText>
            <CondoText>Síndico: MARCIA TORQUATTO</CondoText>
          </CondoInfo>
          <ChangeCondo>
            <TextChangeCondo onClick={handleChangeCondo}>
              RETORNAR A LISTA DE CONDOMÍNIOS
            </TextChangeCondo>
          </ChangeCondo>
          <ItemMenu>
            <TbHome size={20} />
            <ItemMenuName>Home</ItemMenuName>
          </ItemMenu>
          <ItemMenu>
            <RiNewspaperLine size={20} />
            <ItemMenuName>Extrato</ItemMenuName>
          </ItemMenu>
          <ItemMenu>
            <RiNewspaperLine size={20} />
            <ItemMenuName>Demonstrativo Financeiro</ItemMenuName>
          </ItemMenu>
          <ItemMenu>
            <MdOutlinePayments size={20} />
            <ItemMenuName>Pagamentos</ItemMenuName>
          </ItemMenu>
          <ItemMenu>
            <GiReceiveMoney size={20} />
            <ItemMenuName>Investimentos</ItemMenuName>
          </ItemMenu>
          <ItemMenu>
            <MdOutlineManageAccounts size={20} />
            <ItemMenuName>Gerenciar condôminos</ItemMenuName>
          </ItemMenu>
          <ItemMenu>
            <MdSchedule size={20} />
            <ItemMenuName>Meus agendamentos</ItemMenuName>
          </ItemMenu>
          <ItemMenu>
            <AiOutlineDownload size={20} />
            <ItemMenuName>Depositar</ItemMenuName>
          </ItemMenu>
          {/* <Link to={"/condominios/:cnpj/payments"}>payments</Link>
          <Link to={"/condominios/:cnpj/home"}>dashboard</Link> */}
        </Menu>
        <Children>
          <Routes>
            <Route path="/home" element={<CondominiumHome />} />
            <Route path="/payments" element={<Payments />} />
          </Routes>
        </Children>
      </Body>
    </Container>
  );
};

export default AdminPainel;
