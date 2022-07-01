import React from "react";

import { Button } from "./styles";

interface IDefaultButton {
  label: string;
  secondary?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
}

const DefaultButton: React.FC<IDefaultButton> = ({
  label,
  secondary,
  type = "button",
  onClick,
}) => {
  return (
    <Button type={type} secondary={secondary} onClick={onClick}>
      {label}
    </Button>
  );
};

export default DefaultButton;
