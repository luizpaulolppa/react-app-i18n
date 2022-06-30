import styled from "styled-components";

interface IButton {
  secondary?: boolean;
}

export const Button = styled.button<IButton>`
  height: 32px;
  font-size: 12px;
  font-weight: 600;
  padding: 8px 8px;
  border-radius: 5px;
  border: 1px solid rgb(56, 109, 130);
  background-color: rgb(56, 109, 130);
  color: rgb(255, 255, 255);
  ${({ secondary }) => !!secondary ? `background-color: #FFFFFF;` : ``}
  ${({ secondary }) => !!secondary ? `color: rgb(56, 109, 130);` : ``}

  &:hover {
    opacity: 0.9;
  }
`;