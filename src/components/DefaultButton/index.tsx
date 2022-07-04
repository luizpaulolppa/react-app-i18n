import React from "react";
import { BiLoaderAlt } from "react-icons/bi";

import { Button } from "./styles";

interface IDefaultButton {
  label: string;
  secondary?: boolean;
  type?: "button" | "submit";
  loading?: boolean;
  onClick?: () => void;
}

const DefaultButton: React.FC<IDefaultButton> = ({
  label,
  secondary,
  type = "button",
  onClick,
  loading = false,
}) => {
  return (
    <Button type={type} secondary={secondary} onClick={onClick}>
      {loading && <BiLoaderAlt size={16} />}
      {!loading ? label : ""}
    </Button>
  );
};

export default DefaultButton;
