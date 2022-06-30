import React from "react";
import TextInput, { ITextInput } from "../TextInput";

import { Container, Label } from "./styles";

interface ITextInputGroup extends ITextInput {
  label: string;
}

const TextInputGroup: React.FC<ITextInputGroup> = ({ label, ...rest }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <TextInput {...rest} />
    </Container>
  );
};

export default TextInputGroup;
