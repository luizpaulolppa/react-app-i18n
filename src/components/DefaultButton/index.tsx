import React from "react";

import { Button } from "./styles";

interface IDefaultButton {
  label: string;
  secondary?: boolean;
  type?: "button" | "submit";
}

const DefaultButton: React.FC<IDefaultButton> = ({
  label,
  secondary,
  type = "button",
}) => {
  return <Button type={type} secondary={secondary}>{label}</Button>;
};

export default DefaultButton;
