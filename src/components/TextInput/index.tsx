import React from "react";

import { Input } from "./styles";

export interface ITextInput {
  maxLength?: number;
  placeholder?: string;
  value?: string;
  onChange?: (event: string) => void;
}

const TextInput: React.FC<ITextInput> = ({
  maxLength,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <Input
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={(e) => onChange && onChange(e.target.value)}
      value={value}
    />
  );
};

export default TextInput;
