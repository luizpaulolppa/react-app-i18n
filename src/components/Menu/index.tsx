import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TbHome } from "react-icons/tb";
import { RiNewspaperLine } from "react-icons/ri";
import { ImArrowLeft2, ImArrowRight2 } from "react-icons/im";
import {
  MdOutlinePayments,
  MdOutlineManageAccounts,
  MdSchedule,
} from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { AiOutlineDownload } from "react-icons/ai";
import {
  MenuContainer,
  ChangeCondo,
  TextChangeCondo,
  CondoText,
  CondoName,
  CondoInfo,
  ArrowContainer,
  MenuHeader,
} from "./styles";
import ItemMenu from "./ItemMenu";

export interface IMenu {}

const Menu: React.FC<IMenu> = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  function handleChangeCondo() {
    navigate("/condominios");
  }

  return (
    <MenuContainer isOpen={isOpen}>
      <MenuHeader>
        <CondoInfo>
          {isOpen ? (
            <>
              <CondoName>Condomínio ABC</CondoName>
              <CondoText>CNPJ: 76.224.335/0001-55</CondoText>
              <CondoText>Síndico: MARCIA TORQUATTO</CondoText>
            </>
          ) : (
            <CondoName>C</CondoName>
          )}
        </CondoInfo>
        <ChangeCondo>
          <TextChangeCondo onClick={handleChangeCondo}>
            {isOpen ? "RETORNAR A LISTA DE CONDOMÍNIOS" : "RETORNAR"}
          </TextChangeCondo>
        </ChangeCondo>
        <ItemMenu
          active={true}
          hideName={!isOpen}
          name="Home"
          icon={<TbHome size={25} />}
        />
        <ItemMenu
          active={false}
          hideName={!isOpen}
          name="Extrato"
          icon={<RiNewspaperLine size={25} />}
        />
        <ItemMenu
          active={false}
          hideName={!isOpen}
          name="Demonstrativo Financeiro"
          icon={<RiNewspaperLine size={25} />}
        />
        <ItemMenu
          active={false}
          hideName={!isOpen}
          name="Pagamentos"
          icon={<MdOutlinePayments size={25} />}
        />
        <ItemMenu
          active={false}
          hideName={!isOpen}
          name="Investimentos"
          icon={<GiReceiveMoney size={25} />}
        />
        <ItemMenu
          active={false}
          hideName={!isOpen}
          name="Gerenciar condôminos"
          icon={<MdOutlineManageAccounts size={25} />}
        />
        <ItemMenu
          active={false}
          hideName={!isOpen}
          name="Meus agendamentos"
          icon={<MdSchedule size={25} />}
        />
        <ItemMenu
          active={false}
          hideName={!isOpen}
          name="Depositar"
          icon={<AiOutlineDownload size={25} />}
        />
      </MenuHeader>

      <ArrowContainer onClick={() => setIsOpen(!isOpen)} center={!isOpen}>
        {isOpen ? <ImArrowLeft2 size={22} /> : <ImArrowRight2 size={22} />}
      </ArrowContainer>
    </MenuContainer>
  );
};

export default Menu;
