import React from "react";
import { IItemMenu as IIM, ItemMenuContainer, ItemMenuName } from "./styles";

interface IItemMenu extends IIM {
  name: string;
  icon: React.ReactNode;
  hideName: boolean;
}

const ItemMenu: React.FC<IItemMenu> = ({ name, hideName, active, icon: Icon }) => {
  return (
    <ItemMenuContainer active={active} center={hideName}>
      {Icon}
      {!hideName && <ItemMenuName>{name}</ItemMenuName>}
    </ItemMenuContainer>
  );
};

export default ItemMenu;
